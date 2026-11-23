#!/bin/bash
# ============================================================================
# preview 사이트(supremainc.github.io/docs) 로컬 빌드·배포
#
# 엔터프라이즈 IP 허용 목록 때문에 GitHub 호스팅 러너에서 preview.yml이 실패할 때
# 사내망 PC에서 빌드하고 gh-pages 브랜치에 직접 push합니다.
# preview.yml과 같은 결과물을 만듭니다(로케일별 img 사본 삭제, 결과물 검증, force orphan 배포).
#
# 사용법: preview 브랜치에서 Git Bash로 실행
#   sh preview-local.sh
# ============================================================================
set -e

fail() {
  echo
  echo "[실패] $1"
  exit 1
}

confirm() {
  read -r -p "$1 [y/N] " answer
  case "$answer" in
    [yY]|[yY][eE][sS]) return 0 ;;
    *) return 1 ;;
  esac
}

# 1. preview 브랜치 확인
branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" != "preview" ]; then
  fail "preview 브랜치에서 실행하세요. (현재 브랜치: $branch)"
fi

# 2. 원격 preview와 같은 커밋인지 확인
echo "[1/7] 원격 preview 브랜치와 비교합니다..."
git fetch -q origin preview
if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/preview)" ]; then
  fail "로컬 preview와 origin/preview가 다릅니다. pull 또는 push로 맞춘 뒤 다시 실행하세요."
fi

if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  echo "[경고] 커밋하지 않은 변경 사항이 있습니다. 이 변경 사항도 빌드에 포함됩니다."
  confirm "계속하시겠습니까?" || exit 1
fi

# 3. 제품 사양 데이터 갱신 (preview.sh와 동일)
#    DW API는 사내망 전용이므로 받지 못하면 커밋된 기존 데이터로 계속 진행합니다.
echo "[2/7] 제품 사양 데이터를 갱신합니다..."
SPECS=src/pages/products-specs/_specs.json
if node utils/fetchProductSpecs.mjs; then
  if [ -n "$(git status --porcelain -- "$SPECS")" ]; then
    git add -- "$SPECS"
    git commit -m "제품 사양 데이터 갱신" -- "$SPECS"
    git push origin preview
  fi
else
  echo "제품 사양 데이터를 받지 못해 기존 데이터로 배포합니다."
fi

# 4. SVG 컴포넌트 맵 생성 (.gitignore에 등록된 생성 파일)
echo "[3/7] SVG 컴포넌트 맵을 생성합니다..."
node genpdf/generateSvgMap.js

# 5. 전체 로케일 빌드 (ko, en, es, ja)
echo "[4/7] 사이트를 빌드합니다. 시간이 걸립니다..."
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=8192}"
yarn build:preview

# 6. 로케일별 img 사본 삭제 (GitHub Pages 1GB 제한 대응, preview.yml과 동일)
echo "[5/7] 로케일별 중복 img 폴더를 삭제합니다..."
rm -rf build/en/img build/es/img build/ja/img

# 7. 결과물 검증 (gh-pages를 통째로 교체하므로 누락 시 해당 언어가 사라짐)
echo "[6/7] 빌드 결과물을 검증합니다..."
verify_fail=0
test -f build/index.html || { echo "[오류] build/index.html 없음"; verify_fail=1; }
test -d build/img || { echo "[오류] build/img 없음 (preview 공용 이미지)"; verify_fail=1; }
for l in en es ja; do
  test -f "build/$l/index.html" || { echo "[오류] build/$l/index.html 없음"; verify_fail=1; continue; }
  # 언어별 페이지가 자기 언어 경로(/docs/<locale>/assets)의 자산을 참조하는지 확인
  grep -q "/docs/$l/assets/" "build/$l/index.html" || { echo "[오류] $l 페이지의 자산 경로가 /docs/$l/로 시작하지 않음"; verify_fail=1; }
done
[ "$verify_fail" -eq 0 ] || fail "빌드 결과물 검증에 실패해 배포를 중단했습니다."

# GitHub Pages가 _로 시작하는 파일을 무시하지 않도록 Jekyll 처리를 끕니다.
touch build/.nojekyll

# 8. gh-pages 브랜치로 배포 (force orphan: 이력 없이 브랜치를 통째로 교체)
origin_url=$(git remote get-url origin)
short_sha=$(git rev-parse --short HEAD)

echo
echo "배포 대상: $origin_url (gh-pages 브랜치)"
echo "소스 커밋: $short_sha"
if ! confirm "gh-pages 브랜치를 이 빌드 결과물로 교체합니다. 계속하시겠습니까?"; then
  echo "배포를 취소했습니다. 빌드 결과물은 build 폴더에 남아 있습니다."
  exit 1
fi

echo "[7/7] gh-pages 브랜치로 push합니다..."
# 실패하더라도 build 안의 임시 저장소는 지웁니다.
trap 'rm -rf build/.git' EXIT
rm -rf build/.git
git -C build init -q -b gh-pages
git -C build -c core.autocrlf=false -c core.safecrlf=false add -A
git -C build -c core.autocrlf=false commit -q -m "deploy: preview $short_sha"
git -C build push --force "$origin_url" gh-pages

echo
echo "배포를 완료했습니다. GitHub Pages 반영까지 몇 분 걸릴 수 있습니다."
echo "https://supremainc.github.io/docs/"
