set -e

# 원격 preview 브랜치 기준으로 배포되므로 preview 브랜치에서만 실행한다
branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$branch" != "preview" ]; then
  echo "preview 브랜치에서 실행하세요. (현재 브랜치: $branch)"
  exit 1
fi

# 제품 스펙 조회 페이지 데이터 갱신
# DW API는 사내망 전용이므로 받지 못하면 커밋된 기존 데이터로 배포를 계속한다
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

gh workflow run preview.yml --ref preview
