import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Profile } from '../../types/profile';
import L from 'leaflet';

// Fix marker icon issues in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface MapViewProps {
  profiles: Profile[];
  selectedProfile: Profile | null;
}

// Component to handle map view changes when selectedProfile changes
const MapUpdater: React.FC<{ selectedProfile: Profile | null }> = ({ selectedProfile }) => {
  const map = useMap();
  
  useEffect(() => {
    if (selectedProfile) {
      const { lat, lng } = selectedProfile.address.coordinates;
      map.flyTo([lat, lng], 13, {
        duration: 1.5
      });
    }
  }, [selectedProfile, map]);
  
  return null;
};

const MapView: React.FC<MapViewProps> = ({ profiles, selectedProfile }) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([39.8283, -98.5795]); // Center of US
  const [mapZoom, setMapZoom] = useState<number>(4);
  
  useEffect(() => {
    if (selectedProfile) {
      const { lat, lng } = selectedProfile.address.coordinates;
      setMapCenter([lat, lng]);
      setMapZoom(13);
    } else if (profiles.length > 0) {
      // If no profile is selected but we have profiles, set a view that shows all profiles
      setMapCenter([39.8283, -98.5795]); // Center of US
      setMapZoom(4);
    }
  }, [selectedProfile, profiles]);
  
  const customIcon = (isSelected: boolean) => new L.Icon({
    iconUrl: isSelected 
      ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
      : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {profiles.map(profile => (
          <Marker
            key={profile.id}
            position={[profile.address.coordinates.lat, profile.address.coordinates.lng]}
            icon={customIcon(selectedProfile?.id === profile.id)}
          >
            <Popup>
              <div>
                <h3 className="font-semibold">{profile.name}</h3>
                <p className="text-sm">{profile.address.street}</p>
                <p className="text-sm">{profile.address.city}, {profile.address.state} {profile.address.zip}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        
        <MapUpdater selectedProfile={selectedProfile} />
      </MapContainer>
    </div>
  );
};

export default MapView;