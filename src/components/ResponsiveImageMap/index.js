import React, { useRef, useEffect, useState } from 'react';
import Image from '@site/src/components/Image';

export default function ResponsiveImageMap({ 
  src, 
  alt, 
  className, 
  mapName, 
  areas, 
  originalWidth = 910, // 원본 이미지 너비
  originalHeight = 700  // 원본 이미지 높이
}) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // 좌표를 현재 이미지 크기에 맞게 조정하는 함수
  const updateAreaCoords = () => {
    if (!containerRef.current || !mapRef.current || !isLoaded) return;

    const img = containerRef.current.querySelector('img');
    if (!img) return;

    const actualWidth = img.offsetWidth;
    const actualHeight = img.offsetHeight;

    if (actualWidth === 0 || actualHeight === 0) return;

    // 스케일 비율 계산
    const scaleX = actualWidth / originalWidth;
    const scaleY = actualHeight / originalHeight;

    // 모든 area 요소의 좌표 업데이트
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

  // 이미지 로드 완료 감지
  useEffect(() => {
    if (!containerRef.current) return;

    const img = containerRef.current.querySelector('img');
    if (!img) return;

    const handleImageLoad = () => {
      setIsLoaded(true);
      setTimeout(updateAreaCoords, 100);
    };

    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener('load', handleImageLoad);
    }

    return () => {
      img.removeEventListener('load', handleImageLoad);
    };
  }, []);

  // 윈도우 리사이즈 시 좌표 업데이트
  useEffect(() => {
    const handleResize = () => {
      updateAreaCoords();
    };

    window.addEventListener('resize', handleResize);
    
    // 컴포넌트 마운트 시에도 좌표 업데이트
    const timer = setTimeout(updateAreaCoords, 200);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [isLoaded]);

  // 이미지 크기 변화 감지 (ResizeObserver 사용)
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      updateAreaCoords();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [isLoaded]);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <map 
        ref={mapRef}
        id={mapName} 
        name={mapName}
      >
        {areas.map((area, index) => (
          <area
            key={index}
            shape={area.shape}
            coords={area.coords}
            href={area.href}
            title={area.title}
            alt={area.alt || area.title}
          />
        ))}
      </map>
      <Image 
        src={src}
        alt={alt}
        className={className}
        usemap={`#${mapName}`}
      />
    </div>
  );
}
