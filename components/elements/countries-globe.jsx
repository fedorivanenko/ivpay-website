'use client'

//https://github.com/nvkelso/natural-earth-vector/tree/master/geojson

import * as three from 'three'
import Globe from 'react-globe.gl'
import { useRef, useMemo, useState, useLayoutEffect, useEffect } from 'react';


const CITIES_DATA = [
  { name: 'Lisbon', latitude: 38.7223, longitude: -9.1393 },
  { name: 'Berlin', latitude: 52.5200, longitude: 13.4050 },
  { name: 'London', latitude: 51.5074, longitude: -0.1278 },
  { name: 'Mumbai', latitude: 19.0760, longitude: 72.8777 },
  { name: 'Rio', latitude: -22.9068, longitude: -43.1729 },
  { name: 'Calicut', latitude: 11.2588, longitude: 75.7804 },
  { name: 'Manaus', latitude: -3.1190, longitude: -60.0217 }
];

export default function CountriesGlobe() {

  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const ringsData = CITIES_DATA.map(city => ({
    lat: city.latitude,
    lng: city.longitude,
    radius: 20,
    propagationSpeed: 2,
    repeatPeriod: 80
  }));

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        const size = Math.min(offsetWidth, offsetHeight);
        setDimensions({ width: size, height: size });
      }
    };
  
    if (typeof window !== 'undefined') {
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
    }
  
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateDimensions);
      }
    };
  }, []);

  const bumpImageUrl = 'earth-topology.png'; // Ensure this path is correct

  const globeMaterial = useMemo(() => {
    const material = new three.MeshPhongMaterial({
      bumpMap: new three.TextureLoader().load(bumpImageUrl),
      bumpScale: 40,
      transparent: true,
      opacity: 0.9,
      specular: new three.Color("white"),
    });
    return material;
  }, [bumpImageUrl]);

  const colorInterpolator = t => `rgba(0,0,255,${Math.sqrt(1-t)})`;
    
    useLayoutEffect(() => {
    if (globeRef.current) {
      const MapToLisbon = { lat: 24, lng: 34, altitude: 2};
      const globeInstance = globeRef.current;

      const scene = globeInstance.scene();

      globeInstance.pointOfView(MapToLisbon, 0);
      globeInstance.controls().enableZoom = false;
      globeInstance.controls().autoRotate = true;
      globeInstance.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full pb-[100%]">
        <div className="absolute inset-0">
          <Globe
            ref={globeRef}
            width={dimensions.width}
            height={dimensions.height}
            globeMaterial={globeMaterial}
            showAtmosphere={false}
            backgroundColor="rgba(0,0,0,0)"
            ringsData={ringsData}
            ringColor={() => colorInterpolator}
            ringMaxRadius="radius"
            ringPropagationSpeed="propagationSpeed"
            //ringRepeatPeriod="repeatPeriod"
          />
          </div>
          {/* 
            */}
    </div>
  );
}