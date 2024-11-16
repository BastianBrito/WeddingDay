import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -33.7989991, // Coordenadas de ejemplo (Santiago de Chile)
  lng: -70.756935,
};

const Map = () => {
  const mapRef = useRef(null); // Referencia para el mapa

  const onLoadMap = (map) => {
    mapRef.current = map; // Guarda la referencia al mapa para usarla más adelante

    const addAdvancedMarker = async () => {
      if (window.google) {
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary('marker');

        new AdvancedMarkerElement({
          map, // Vincula el marcador al mapa cargado
          position: center, // Coordenadas del marcador
          title: 'Mi marcador avanzado', // Opcional: texto del marcador
        });
      }
    };

    addAdvancedMarker();
  };

  useEffect(() => {
    return () => {
      // Limpieza opcional: desconectar marcadores si es necesario
      mapRef.current = null;
    };
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCEX6c2S4xMHPAdZw5JBDuNjg3rsYvtfGU"
      libraries={['marker']} // Carga la biblioteca de marcadores avanzados
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoadMap} // Se llama cuando el mapa está cargado
        options={{
          mapId: 'DEMO_MAP_ID', // Reemplaza con tu Map ID
        }}
      />
    </LoadScript>
  );
};

export default Map;
