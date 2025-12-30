#!/bin/bash

# 사용법 출력 함수
show_usage() {
    echo "사용법: $0 [OPTIONS]"
    echo "옵션:"
    echo "  -s, --skip-upload    이미지 업로드를 건너뜁니다"
    echo "  -h, --help          도움말을 표시합니다"
    exit 1
}

# 매개변수 파싱
SKIP_UPLOAD=false

while [[ $# -gt 0 ]]; do
    case $1 in
        -s|--skip-upload)
            SKIP_UPLOAD=true
            shift
            ;;
        -h|--help)
            show_usage
            ;;
        *)
            echo "알 수 없는 옵션: $1"
            show_usage
            ;;
    esac
done

# 이미지 업로드 실행 (건너뛰기 옵션이 없는 경우에만)
if [ "$SKIP_UPLOAD" = false ]; then
    echo "이미지 업로드를 실행합니다..."
    node uploadImage
    if [ $? -ne 0 ]; then
        echo "이미지 업로드에 실패했습니다."
        exit 1
    fi
    echo "이미지 업로드가 완료되었습니다."
else
    echo "이미지 업로드를 건너뜁니다."
fi

# GitHub Actions 워크플로우 실행
echo "GitHub Actions 워크플로우를 실행합니다..."
gh workflow run azure-static-web-apps-victorious-beach-03178ad00.yml --ref main