import { useRef, useEffect } from 'react';

/**
 * 반응형 이미지 맵을 위한 커스텀 훅
 * @param {Array} areas - 원본 area 설정 배열
 * @param {number} originalWidth - 원본 이미지 너비
 * @param {number} originalHeight - 원본 이미지 높이
 */
export function useResponsiveImageMap(areas, originalWidth = 910, originalHeight = 700) {
  const imageRef = useRef(null);
  const mapRef = useRef(null);

  const updateCoordinates = () => {
    if (!imageRef.current || !mapRef.current) return;

    const img = imageRef.current.querySelector('img');
    if (!img) return;

    const actualWidth = img.offsetWidth;
    const actualHeight = img.offsetHeight;

    if (actualWidth === 0 || actualHeight === 0) return;

    const scaleX = actualWidth / originalWidth;
    const scaleY = actualHeight / originalHeight;

    const areaElements = mapRef.current.querySelectorAll('area');
    areaElements.forEach((area, index) => {
      if (areas[index]) {
        const originalCoords = areas[index].coords;
        const newCoords = originalCoords.split(',').map((coord, i) => {
          const num = parseInt(coord);
          return Math.round(i % 2 === 0 ? num * scaleX : num * scaleY);
        }).join(',');
        
        area.setAttribute('coords', newCoords);
      }
    });
  };

  useEffect(() => {
    // 이미지 로드 완료를 기다림
    const checkImageLoaded = () => {
      if (!imageRef.current) return;
      
      const img = imageRef.current.querySelector('img');
      if (img && img.complete) {
        updateCoordinates();
      } else if (img) {
        img.addEventListener('load', updateCoordinates, { once: true });
      }
    };

    // 초기 로드 확인
    const timer = setTimeout(checkImageLoaded, 100);

    // 리사이즈 이벤트 리스너
    const handleResize = () => {
      updateCoordinates();
    };

    window.addEventListener('resize', handleResize);

    // ResizeObserver로 이미지 크기 변화 감지
    let resizeObserver;
    if (imageRef.current) {
      resizeObserver = new ResizeObserver(updateCoordinates);
      resizeObserver.observe(imageRef.current);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return { imageRef, mapRef, updateCoordinates };
}
