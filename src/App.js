import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {Map} from "./Map";
import {Router} from "./Router";


function App() {
    return (
        <div className="App">
            <Router />
        </div>
    );
}

export default App;
