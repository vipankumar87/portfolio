"use client"
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const GlobeComponent = () => {
  const globeEl = useRef(null);

  useEffect(() => {
    if (globeEl.current) {
      // Enable auto-rotation and disable zoom
      const controls = globeEl.current?.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom = false;
      controls.transparent =true;
    }
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      width={800}
      height={800}
    />
  );
};

export default GlobeComponent;
