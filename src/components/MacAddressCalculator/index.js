import React, { useState } from 'react';
import styles from './styles.module.css';

export default function MacAddressCalculator() {
  const [serialNumber, setSerialNumber] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [lastThreeBytes, setLastThreeBytes] = useState('');
  const [macAddress, setMacAddress] = useState('');
  const [error, setError] = useState('');

  const calculateMacAddress = (serial) => {
    setError('');
    
    // 입력값 검증
    if (!serial) {
      setHexValue('');
      setLastThreeBytes('');
      setMacAddress('');
      return;
    }

    // 숫자가 아닌 문자 제거
    const cleanSerial = serial.replace(/\D/g, '');
    
    if (cleanSerial.length !== 9) {
      setError('일련 번호는 9자리 숫자여야 합니다.');
      setHexValue('');
      setLastThreeBytes('');
      setMacAddress('');
      return;
    }

    const serialNum = parseInt(cleanSerial, 10);
    
    if (isNaN(serialNum)) {
      setError('유효한 숫자를 입력하세요.');
      return;
    }

    // 16진수로 변환
    const hex = serialNum.toString(16).toUpperCase();
    setHexValue(hex);

    // 마지막 3바이트 (6자리) 추출
    const lastSix = hex.slice(-6).padStart(6, '0');
    setLastThreeBytes(lastSix);

    // MAC 주소 구성
    const mac = `00:17:FC:${lastSix.slice(0, 2)}:${lastSix.slice(2, 4)}:${lastSix.slice(4, 6)}`;
    setMacAddress(mac);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSerialNumber(value);
    calculateMacAddress(value);
  };

  const handleExampleClick = () => {
    const exampleSerial = '546089489';
    setSerialNumber(exampleSerial);
    calculateMacAddress(exampleSerial);
  };

  const handleClear = () => {
    setSerialNumber('');
    setHexValue('');
    setLastThreeBytes('');
    setMacAddress('');
    setError('');
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.inputSection}>
        <label htmlFor="serialNumber" className={styles.label}>
          일련 번호 (9자리)
        </label>
        <div className={styles.inputGroup}>
          <input
            id="serialNumber"
            type="text"
            value={serialNumber}
            onChange={handleInputChange}
            placeholder="예: 546089489"
            className={styles.input}
            maxLength="9"
          />
          <button 
            onClick={handleExampleClick}
            className={styles.exampleButton}
            type="button"
          >
            예시 입력
          </button>
          {serialNumber && (
            <button 
              onClick={handleClear}
              className={styles.clearButton}
              type="button"
            >
              지우기
            </button>
          )}
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </div>

      {!error && serialNumber && (
        <div className={styles.resultContainer}>
          <div className={styles.resultLabel}>MAC 주소</div>
          <div className={styles.macAddress}>{macAddress}</div>
          <button
            onClick={() => navigator.clipboard.writeText(macAddress)}
            className={styles.copyButton}
            type="button"
            title="클립보드에 복사"
          >
            📋 복사
          </button>
        </div>
      )}
    </div>
  );
}
