const fs = require("fs").promises;
const path = require("path");
const { imageSizeFromFile } = require('image-size/fromFile')

const directoryPath = './static/img';

// 재귀적으로 디렉토리를 탐색하고 파일 목록을 가져오는 함수
async function readFilesInDirectory(directory, callback) {
    try {
        const files = await fs.readdir(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);

            // 파일인 경우에만 처리
            const isFile = (await fs.stat(filePath)).isFile();

            if (isFile && isImageFile(filePath)) {
                const dimensions = await imageSizeFromFile(filePath);
                callback(filePath, dimensions);
            } else if (!isFile) {
                // 디렉토리인 경우 재귀적으로 탐색
                await readFilesInDirectory(filePath, callback);
            }
        }
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

// 파일 확장자가 이미지인지 확인하는 함수
function isImageFile(filePath) {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', 'svg']; // 확장자 추가 가능
    const ext = path.extname(filePath).toLowerCase();
    return allowedExtensions.includes(ext);
}

const imageInfo = {};

// 파일 정보를 수집하는 콜백 함수
function collectFileInfo(file, dimensions) {
    const fileName = file.replace(/\\/g, '/').replace('static/img/', '/img/');
    imageInfo[fileName] = { width: dimensions.width, height: dimensions.height };
}

// 디렉토리와 그 하위 디렉토리의 이미지 파일 정보를 수집
readFilesInDirectory(directoryPath, collectFileInfo)
    .then(() => {
        // 최종 결과를 JSON 파일로 저장
        const jsonOutput = JSON.stringify(imageInfo, null, 2);
        return fs.writeFile("./src/components/Image/sizeOfimages.json", jsonOutput, 'utf-8');
    })
    .then(() => {
        console.log("Complete");
    })
    .catch((err) => {
        console.error('Error:', err);
    });
