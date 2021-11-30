/* global window */
import * as React from 'react';
import {useState, useCallback} from 'react';
import {render} from 'react-dom';
import ReactMapGL, {Popup, NavigationControl, ScaleControl, GeolocateControl} from 'react-map-gl';
import ControlPanel from './components/control-panel.js';
import Pins from './components/pins'
import MurderInfo from './data/112921murdersformat2.json';
import Header from './components/header.js';


import MURDERS from './data/112921murdersformat2.json';
const TOKEN = 'pk.eyJ1Ijoiam9laGFuY29jazk1IiwiYSI6ImNrdnp1azVvbDE4ODgyeXFpbmMyenU0OTcifQ.IDWTHLIF_B_8ZEC-qtDuMA';


const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};

export default function App() {
  const [viewport, setViewport] = React.useState({
    longitude: -97.73,
    latitude: 30.3,
    zoom: 10
    
  });
  const [popupInfo, setPopupInfo] = useState(null);


  return (
    <>
    <Header/>
      <ReactMapGL
        {...viewport}
        mapStyle="../mapbox-gl-styles-master/Moves-map.json"
        //        mapStyle="mapbox://styles/joehancock95/ckwcwouxe00dg16lq5cyglc6u"
        mapboxApiAccessToken = {TOKEN} // Set your mapbox token here
        width="100vw" 
        height="100vh" 
        onViewportChange={setViewport}>
        <Pins data={MURDERS} onClick={setPopupInfo}
        />

    {popupInfo && (
      <Popup 
        tipSize={3}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        closeOnClick={false}
        onClose={setPopupInfo}
        >
      <MurderInfo info={popupInfo} />
      </Popup>
    )}
      <GeolocateControl style={geolocateStyle} />
      <NavigationControl style={navStyle} />
      <ScaleControl style={scaleControlStyle} />
    </ReactMapGL>
    <ControlPanel />
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
