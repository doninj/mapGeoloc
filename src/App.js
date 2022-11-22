import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {Map} from "./Map";


function App() {
    return (
        <div className="App">
            <MapContainer center={[45.7603831,4.849664 ]} zoom={13} style={{width: "100%", height: "calc(100vh - 4rem)"}}
                          scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Map/>
            </MapContainer>
        </div>
    );
}

export default App;
