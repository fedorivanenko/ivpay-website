"use client";

import * as three from "three";
import Globe from "react-globe.gl";
import { useRef, useMemo, useState, useLayoutEffect, useEffect } from "react";

import geoJsonData from "@/resources/ne_110m_land.json";

const citiesData = [
  { name: "Lisbon", latitude: 38.7223, longitude: -9.1393 },
  { name: "Berlin", latitude: 52.52, longitude: 13.405 },
  { name: "London", latitude: 51.5074, longitude: -0.1278 },
  { name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  { name: "Delhi", latitude: 28.7041, longitude: 77.1025 },
  { name: "Rio", latitude: -22.9068, longitude: -43.1729 },
  { name: "Calicut", latitude: 11.2588, longitude: 75.7804 },
  { name: "Manaus", latitude: -3.119, longitude: -60.0217 },
];

export default function CountriesGlobe() {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [countries] = useState(geoJsonData);

  const ringsData = citiesData.map((city) => ({
    lat: city.latitude,
    lng: city.longitude,
    radius: 20,
    propagationSpeed: 2,
    repeatPeriod: 800,
  }));

  /* Resizer */
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        const size = Math.min(offsetWidth, offsetHeight);
        setDimensions({ width: size, height: size });
      }
    };

    if (typeof window !== "undefined") {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateDimensions);
      }
    };
  }, []);

  const globeMaterial = useMemo(() => {
    const material = new three.MeshPhongMaterial();
    material.transparent = true;
    material.opacity = 0.8;
    material.specular = new three.Color("white");
    return material;
  }, []);

  const colorInterpolator = (t) => `rgba(0,0,255,${Math.sqrt(1 - t)})`;

  useLayoutEffect(() => {
    if (globeRef.current) {
      const globeInstance = globeRef.current;
      globeInstance.pointOfView({ lat: 12, lng: 60, altitude: 2 }, 0);
      globeInstance.controls().enableZoom = false;
      globeInstance.controls().enableZoom = false;
      globeInstance.controls().enableRotate = false;
      globeInstance.controls().enablePan = false;
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
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.3}
          hexPolygonUseDots={true}
          hexPolygonColor={() => "rgba(0,0,0,0.4)"}
          ringsData={ringsData}
          ringResolution={256}
          ringColor={() => colorInterpolator}
          ringMaxRadius="radius"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
        />
      </div>
      {/*
       */}
    </div>
  );
}
