import {Marker, Popup, useMap} from "react-leaflet";
import {useEffect, useState} from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import L from 'leaflet';
import {Icon} from 'leaflet'

export function Map() {

    const [position, setPosition] = useState({lat: 0, lng:0})
    const map = useMap()
    const icon = L.icon({iconUrl: markerIconPng});

    useEffect(() => {
        const geo = navigator.geolocation
        const watcher = geo.watchPosition((positions) => {
            setPosition({lat: positions.coords.latitude, lng: positions.coords.longitude})
            map.setView({lat: positions.coords.latitude, lng: positions.coords.longitude})
        })
        return () => {
            geo.clearWatch(watcher)
        };
    }, []);

    return (
        <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} position={[position.lat, position.lng]}>
            <Popup>
                lat: {position.lat} lng: {position.lng}
            </Popup>
        </Marker>
    )
}