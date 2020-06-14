import React, { Component } from 'react'
import {Map,TileLayer,Marker,Popup,Circle,GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {MapContainer,LeafMapContainer} from './styles/style'
import Sidebar from '../Sidebar/Sidebar/index'
import TogglersContainer from '../Togglers/TogglersContainer/index'
import json_data from './Obied.geojsonl.json'

export default class index extends Component {
    constructor(props){
            super(props);
            this.state={
                lat:13.1781071,
                long:30.2400797,
                zoom:15,
            };

    }       
        
    render() {
        L.Icon.Default.imagePath='img/'; 
        const position = [this.state.lat,this.state.long]; 
        return (
            <div>
                <MapContainer>
                    <Sidebar></Sidebar>
                    <LeafMapContainer>
                        <Map center={position} zoom={this.state.zoom} style={{width:'100%',height:'100%'}}>
                            <TileLayer url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'/>
                            <Marker position={position} draggable={true}>
                                <Popup>That one who called binga</Popup>
                            </Marker>
                            <Circle center = {position} radius={200}/>   
                            <GeoJSON data={json_data} style={{color:'none',fillColor: 'white'}}/>                
                        </Map>
                    </LeafMapContainer>
                    <TogglersContainer/>
                </MapContainer>
            </div>
        )
    }
}
