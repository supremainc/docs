/**
 * Azure Blob Storage 이미지 업로드 스크립트 (Docusaurus 빌드용)
 * static/img 폴더의 모든 이미지를 Azure Blob Storage에 업로드
 */

const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

class ImageUploader {
    constructor() {
        // 환경 변수에서 Azure Storage 설정 읽기
        this.accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
        this.accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;
        this.containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'images';
        
        if (!this.accountName || !this.accountKey) {
            throw new Error('AZURE_STORAGE_ACCOUNT_NAME과 AZURE_STORAGE_ACCOUNT_KEY 환경변수가 필요합니다.');
        }

        // Blob Service Client 초기화
        this.blobServiceClient = new BlobServiceClient(
            `https://${this.accountName}.blob.core.windows.net`,
            {
                account: this.accountName,
                accountKey: this.accountKey
            }
        );

        // 이미지 파일 확장자
        this.imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico'];
        
        // 기본 경로 설정
        this.staticImgPath = path.resolve(__dirname, 'static', 'img');
    }

    /**
     * 디렉토리에서 모든 이미지 파일을 재귀적으로 찾기
     * @param {string} dirPath - 검색할 디렉토리 경로
     * @returns {Array<string>} 이미지 파일 경로 배열
     */
    findImageFiles(dirPath) {
        const imageFiles = [];
        
        if (!fs.existsSync(dirPath)) {
            console.warn(`경로가 존재하지 않습니다: ${dirPath}`);
            return imageFiles;
        }

        const items = fs.readdirSync(dirPath);

        for (const item of items) {
            const fullPath = path.join(dirPath, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                // 재귀적으로 하위 디렉토리 검색
                imageFiles.push(...this.findImageFiles(fullPath));
            } else if (stat.isFile()) {
                const ext = path.extname(item).toLowerCase();
                if (this.imageExtensions.includes(ext)) {
                    imageFiles.push(fullPath);
                }
            }
        }

        return imageFiles;
    }

    /**
     * 로컬 파일 경로를 Blob 이름으로 변환
     * @param {string} filePath - 로컬 파일 경로
     * @returns {string} Blob 이름
     */
    getRelativePath(filePath) {
        const relativePath = path.relative(this.staticImgPath, filePath);
        // Windows 경로 구분자를 슬래시로 변환
        return relativePath.replace(/\\/g, '/');
    }

    /**
     * 단일 이미지 파일을 Azure Blob Storage에 업로드
     * @param {string} filePath - 업로드할 파일 경로
     * @returns {Promise<string>} 업로드된 파일의 URL
     */
    async uploadImage(filePath) {
        try {
            const blobName = this.getRelativePath(filePath);
            const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
            
            // 컨테이너가 없으면 생성 (공용 읽기 접근 허용)
            await containerClient.createIfNotExists({
                access: 'blob'
            });

            const blockBlobClient = containerClient.getBlockBlobClient(blobName);
            
            // 파일 읽기
            const fileBuffer = fs.readFileSync(filePath);
            
            // MIME 타입 결정
            const contentType = mime.lookup(filePath) || 'application/octet-stream';
            
            // 파일 업로드
            await blockBlobClient.upload(fileBuffer, fileBuffer.length, {
                blobHTTPHeaders: {
                    blobContentType: contentType
                },
                metadata: {
                    originalPath: this.getRelativePath(filePath),
                    uploadDate: new Date().toISOString()
                }
            });

            const fileUrl = blockBlobClient.url;
            console.log(`✅ 업로드 완료: ${blobName} → ${fileUrl}`);
            
            return fileUrl;
        } catch (error) {
            console.error(`❌ 업로드 실패: ${filePath}`, error.message);
            throw error;
        }
    }

    /**
     * static/img 폴더의 모든 이미지를 업로드
     * @returns {Promise<Array>} 업로드된 파일 정보 배열
     */
    async uploadAllImages() {
        console.log(`🔍 이미지 파일 검색 중... (${this.staticImgPath})`);
        
        const imageFiles = this.findImageFiles(this.staticImgPath);
        
        if (imageFiles.length === 0) {
            console.log('📂 업로드할 이미지 파일이 없습니다.');
            return [];
        }

        console.log(`📊 총 ${imageFiles.length}개의 이미지 파일을 발견했습니다.`);
        console.log(`🚀 Azure Blob Storage 업로드 시작... (컨테이너: ${this.containerName})\n`);

        const results = [];
        
        for (let i = 0; i < imageFiles.length; i++) {
            const filePath = imageFiles[i];
            const relativePath = this.getRelativePath(filePath);
            
            console.log(`[${i + 1}/${imageFiles.length}] ${relativePath}`);
            
            try {
                const url = await this.uploadImage(filePath);
                results.push({
                    localPath: filePath,
                    relativePath: relativePath,
                    url: url,
                    status: 'success'
                });
            } catch (error) {
                results.push({
                    localPath: filePath,
                    relativePath: relativePath,
                    error: error.message,
                    status: 'failed'
                });
            }
        }

        // 결과 요약
        const successCount = results.filter(r => r.status === 'success').length;
        const failCount = results.filter(r => r.status === 'failed').length;
        
        console.log('\n📋 업로드 결과 요약:');
        console.log(`   ✅ 성공: ${successCount}개`);
        console.log(`   ❌ 실패: ${failCount}개`);
        
        if (failCount > 0) {
            console.log('\n❌ 실패한 파일들:');
            results
                .filter(r => r.status === 'failed')
                .forEach(r => console.log(`   - ${r.relativePath}: ${r.error}`));
        }

        return results;
    }

    /**
     * URL 매핑 파일 생성 (선택사항)
     * 로컬 경로와 Azure URL의 매핑을 JSON 파일로 저장
     * @param {Array} results - 업로드 결과 배열
     */
    async generateUrlMapping(results) {
        const mapping = {};
        
        results
            .filter(r => r.status === 'success')
            .forEach(r => {
                // 상대 경로를 키로, Azure URL을 값으로 설정
                mapping[r.relativePath] = r.url;
            });

        const mappingPath = path.join(__dirname, 'image-url-mapping.json');
        fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf8');
        
        console.log(`📝 URL 매핑 파일 생성: ${mappingPath}`);
        return mapping;
    }
}

// CLI에서 직접 실행 시
if (require.main === module) {
    (async () => {
        try {
            const uploader = new ImageUploader();
            const results = await uploader.uploadAllImages();
            
            // URL 매핑 파일 생성
            if (results.length > 0) {
                await uploader.generateUrlMapping(results);
            }
            
            console.log('\n🎉 이미지 업로드 완료!');
            process.exit(0);
        } catch (error) {
            console.error('💥 업로드 실패:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = ImageUploader;
