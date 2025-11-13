import React, { useEffect, useRef } from 'react';
import Image from '@site/src/components/Image';

export default function SimpleResponsiveImageMap({ 
  src, 
  alt, 
  className, 
  mapName, 
  areas,
  originalWidth = 910,
  originalHeight = 700
}) {
  const containerRef = useRef(null);

  const resizeMap = () => {
    if (!containerRef.current) return;
    
    const img = containerRef.current.querySelector('img');
    const map = containerRef.current.querySelector('map');
    
    if (!img || !map) return;

    const currentWidth = img.clientWidth;
    const currentHeight = img.clientHeight;
    
    const scaleX = currentWidth / originalWidth;
    const scaleY = currentHeight / originalHeight;

    const areaElements = map.querySelectorAll('area');
    areaElements.forEach((area, index) => {
      if (areas[index]) {
        const coords = areas[index].coords.split(',').map((coord, i) => {
          const num = parseInt(coord);
          return Math.round(i % 2 === 0 ? num * scaleX : num * scaleY);
        }).join(',');
        area.setAttribute('coords', coords);
      }
    });
  };

  useEffect(() => {
    // 이미지 로드 대기 및 리사이즈 처리
    const timer = setTimeout(resizeMap, 100);
    const resizeHandler = () => resizeMap();
    
    window.addEventListener('resize', resizeHandler);
    
    // MutationObserver로 이미지 변화 감지
    const observer = new MutationObserver(resizeMap);
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src', 'width', 'height']
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', resizeHandler);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <map id={mapName} name={mapName}>
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
