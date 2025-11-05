/**
 * Azure Blob Storage 이미지 업로드 스크립트 (Docusaurus 빌드용)
 * static/img 폴더의 모든 이미지를 Azure Blob Storage에 업로드
 */

// .env 파일에서 환경 변수 로드
require('dotenv').config();

const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const crypto = require('crypto');

class ImageUploader {
    constructor() {
        // 환경 변수에서 Azure Storage 설정 읽기
        this.accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
        this.accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;
        this.containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'images';
        
        if (!this.accountName || !this.accountKey) {
            throw new Error('AZURE_STORAGE_ACCOUNT_NAME과 AZURE_STORAGE_ACCOUNT_KEY 환경변수가 필요합니다. .env 파일을 확인하세요.');
        }

        console.log(`🔐 Azure Storage 설정 로드됨: ${this.accountName} (컨테이너: ${this.containerName})`);

        // Blob Service Client 초기화
        const { StorageSharedKeyCredential } = require('@azure/storage-blob');
        const credential = new StorageSharedKeyCredential(this.accountName, this.accountKey);
        this.blobServiceClient = new BlobServiceClient(
            `https://${this.accountName}.blob.core.windows.net`,
            credential
        );

        // 이미지 파일 확장자
        this.imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico'];
        
        // 기본 경로 설정
        this.staticImgPath = path.resolve(__dirname, 'static', 'img');
        
        // 실행 시간 측정을 위한 시작 시간
        this.startTime = Date.now();
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
     * 파일의 MD5 해시값 계산
     * @param {Buffer} fileBuffer - 파일 버퍼
     * @returns {string} MD5 해시값
     */
    calculateMD5(fileBuffer) {
        return crypto.createHash('md5').update(fileBuffer).digest('hex');
    }

    /**
     * 실행 시간 계산 (초 단위)
     * @param {number} startTime - 시작 시간 (밀리초)
     * @returns {string} 포맷된 실행 시간
     */
    formatElapsedTime(startTime) {
        const elapsedMs = Date.now() - startTime;
        const elapsedSeconds = (elapsedMs / 1000).toFixed(2);
        return `${elapsedSeconds}초`;
    }

    /**
     * 현재까지의 총 실행 시간 반환
     * @returns {string} 포맷된 실행 시간
     */
    getTotalElapsedTime() {
        return this.formatElapsedTime(this.startTime);
    }

    /**
     * 원격 Blob의 속성과 로컬 파일 비교
     * @param {string} filePath - 로컬 파일 경로
     * @param {string} blobName - Blob 이름
     * @returns {Promise<boolean>} 업로드가 필요한지 여부
     */
    async needsUpload(filePath, blobName) {
        try {
            const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);

            // 원격 파일 존재 여부 및 속성 확인
            const exists = await blockBlobClient.exists();
            if (!exists) {
                console.log(`   📤 새 파일: 업로드 필요`);
                return true;
            }

            // 로컬 파일 정보
            const fileBuffer = fs.readFileSync(filePath);
            const localMD5 = this.calculateMD5(fileBuffer);
            const localSize = fileBuffer.length;

            // 원격 파일의 속성 가져오기
            const properties = await blockBlobClient.getProperties();
            let remoteMD5 = properties.etag?.replace(/"/g, '');
            
            // 1단계: 파일 크기 비교 (빠른 체크)
            if (localSize !== properties.contentLength) {
                console.log(`   📏 파일 크기 다름: 업로드 필요 (로컬: ${localSize}, 원격: ${properties.contentLength})`);
                return true;
            }

            // 2단계: 메타데이터에서 저장된 MD5 확인
            if (properties.metadata && properties.metadata.localMD5) {
                const storedMD5 = properties.metadata.localMD5;
                if (localMD5.toLowerCase() === storedMD5.toLowerCase()) {
                    // console.log(`   ⏭️ 동일한 파일 (메타데이터 MD5 일치): 업로드 건너뛰기`);
                    return false;
                } else {
                    console.log(`   🔄 파일 변경됨 (메타데이터 MD5): 업로드 필요`);
                    return true;
                }
            }

            // 3단계: ETag가 MD5 형식인지 확인 (32자 hex)
            if (remoteMD5 && remoteMD5.length === 32 && /^[a-f0-9]+$/i.test(remoteMD5)) {
                // ETag가 MD5 해시인 경우
                const hashesMatch = localMD5.toLowerCase() === remoteMD5.toLowerCase();
                if (hashesMatch) {
                    console.log(`   ⏭️ 동일한 파일 (MD5 일치): 업로드 건너뛰기`);
                    return false;
                } else {
                    console.log(`   🔄 파일 변경됨 (MD5): 업로드 필요`);
                    return true;
                }
            }

            // 4단계: ETag가 MD5가 아닌 경우, 수정 시간으로 비교
            const localStats = fs.statSync(filePath);
            const localMTime = localStats.mtime;
            const remoteMTime = properties.lastModified;

            if (remoteMTime && localMTime <= remoteMTime) {
                console.log(`   ⏭️ 동일한 파일 (수정 시간): 업로드 건너뛰기`);
                return false;
            } else {
                console.log(`   🔄 파일 변경됨 (수정 시간): 업로드 필요`);
                console.log(`      로컬 수정 시간: ${localMTime.toISOString()}`);
                console.log(`      원격 수정 시간: ${remoteMTime ? remoteMTime.toISOString() : 'N/A'}`);
                return true;
            }

        } catch (error) {
            console.log(`   ❓ 비교 실패 (${error.message}): 업로드 진행`);
            return true;
        }
    }

    /**
     * 단일 이미지 파일을 Azure Blob Storage에 업로드
     * @param {string} filePath - 업로드할 파일 경로
     * @param {boolean} forceUpload - 강제 업로드 여부 (해시 비교 건너뛰기)
     * @returns {Promise<string>} 업로드된 파일의 URL
     */
    async uploadImage(filePath, forceUpload = false) {
        try {
            const blobName = this.getRelativePath(filePath);
            const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
            
            // 컨테이너가 없으면 생성 (공용 읽기 접근 허용)
            await containerClient.createIfNotExists({
                access: 'blob'
            });

            const blockBlobClient = containerClient.getBlockBlobClient(blobName);
            
            // 강제 업로드가 아닌 경우 해시 비교로 업로드 필요성 확인
            if (!forceUpload) {
                const needsUpload = await this.needsUpload(filePath, blobName);
                if (!needsUpload) {
                    // 업로드가 불필요한 경우 기존 URL 반환
                    return blockBlobClient.url;
                }
            }
            
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
                    uploadDate: new Date().toISOString(),
                    localMD5: this.calculateMD5(fileBuffer)
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
        const scanStartTime = Date.now();
        console.log(`🔍 이미지 파일 검색 중... (${this.staticImgPath})`);
        
        const imageFiles = this.findImageFiles(this.staticImgPath);
        const scanTime = this.formatElapsedTime(scanStartTime);
        
        if (imageFiles.length === 0) {
            console.log('📂 업로드할 이미지 파일이 없습니다.');
            console.log(`⏱️  파일 검색 시간: ${scanTime}`);
            return [];
        }

        console.log(`📊 총 ${imageFiles.length}개의 이미지 파일을 발견했습니다. (검색 시간: ${scanTime})`);
        console.log(`🚀 Azure Blob Storage 업로드 시작... (컨테이너: ${this.containerName})\n`);
        
        const uploadStartTime = Date.now();

        const results = [];
        let skippedCount = 0;
        let uploadedCount = 0;
        
        for (let i = 0; i < imageFiles.length; i++) {
            const filePath = imageFiles[i];
            const relativePath = this.getRelativePath(filePath);
            
            console.log(`[${i + 1}/${imageFiles.length}] ${relativePath}`);
            
            try {
                const blobName = this.getRelativePath(filePath);
                const needsUpload = await this.needsUpload(filePath, blobName);
                
                if (needsUpload) {
                    const url = await this.uploadImage(filePath, true); // 강제 업로드
                    uploadedCount++;
                    results.push({
                        localPath: filePath,
                        relativePath: relativePath,
                        url: url,
                        status: 'uploaded'
                    });
                } else {
                    skippedCount++;
                    const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
                    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
                    results.push({
                        localPath: filePath,
                        relativePath: relativePath,
                        url: blockBlobClient.url,
                        status: 'skipped'
                    });
                }
            } catch (error) {
                results.push({
                    localPath: filePath,
                    relativePath: relativePath,
                    error: error.message,
                    status: 'failed'
                });
            }
        }

        // 시간 계산
        const uploadTime = this.formatElapsedTime(uploadStartTime);
        const totalTime = this.getTotalElapsedTime();
        
        // 결과 요약
        const successCount = results.filter(r => r.status === 'uploaded').length;
        const failCount = results.filter(r => r.status === 'failed').length;
        
        console.log('\n📋 업로드 결과 요약:');
        console.log(`   📤 업로드됨: ${successCount}개`);
        console.log(`   ⏭️  건너뜀: ${skippedCount}개`);
        console.log(`   ❌ 실패: ${failCount}개`);
        console.log(`   💰 절약된 트랜잭션: ${skippedCount}개`);
        console.log('\n⏱️  실행 시간 정보:');
        console.log(`   🔍 파일 검색: ${scanTime}`);
        console.log(`   📤 업로드 처리: ${uploadTime}`);
        console.log(`   🕐 총 실행 시간: ${totalTime}`);
        
        // 성능 통계
        if (imageFiles.length > 0) {
            const avgTimePerFile = ((Date.now() - uploadStartTime) / imageFiles.length / 1000).toFixed(2);
            console.log(`   📊 파일당 평균 처리 시간: ${avgTimePerFile}초`);
        }
        
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
            .filter(r => r.status === 'uploaded' || r.status === 'skipped')
            .forEach(r => {
                // 상대 경로를 키로, Azure URL을 값으로 설정
                mapping[r.relativePath] = r.url;
            });

        const mappingPath = path.join(__dirname, 'image-url-mapping.json');
        fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2), 'utf8');
        
        console.log(`📝 URL 매핑 파일 생성: ${mappingPath} (${Object.keys(mapping).length}개 파일)`);
        return mapping;
    }
}

// CLI에서 직접 실행 시
if (require.main === module) {
    (async () => {
        try {
            console.log('🚀 Azure Blob Storage 이미지 업로드 시작...\n');
            const uploader = new ImageUploader();
            const results = await uploader.uploadAllImages();
            
            // URL 매핑 파일 생성
            if (results.length > 0) {
                const mappingStartTime = Date.now();
                await uploader.generateUrlMapping(results);
                const mappingTime = uploader.formatElapsedTime(mappingStartTime);
                console.log(`   📝 매핑 파일 생성 시간: ${mappingTime}`);
            }
            
            const totalExecutionTime = uploader.getTotalElapsedTime();
            console.log(`\n🎉 이미지 업로드 완료! (총 소요 시간: ${totalExecutionTime})`);
            process.exit(0);
        } catch (error) {
            console.error('💥 업로드 실패:', error.message);
            process.exit(1);
        }
    })();
}

module.exports = ImageUploader;
