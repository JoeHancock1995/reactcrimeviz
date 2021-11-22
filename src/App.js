/* global window */
import * as React from 'react';
import {useState, useCallback} from 'react';
import {render} from 'react-dom';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';


import ControlPanel from './control-panel.js';
import Pins from './pins.js';
import MurderInfo from './data/112921murdersformat2.json';

import MURDERS from './data/112921murdersformat2.json';

const TOKEN = 'pk.eyJ1Ijoiam9laGFuY29jazk1IiwiYSI6ImNrdnp1azVvbDE4ODgyeXFpbmMyenU0OTcifQ.IDWTHLIF_B_8ZEC-qtDuMA';

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
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
    latitude: 30.26,
    zoom: 9
  });
  const [popupInfo, setPopupInfo] = useState(null);


  return (
    <>
    <ReactMapGL
    {...viewport}
    mapStyle="mapbox://styles/mapbox/dark-v9"
    mapboxApiAccessToken = {TOKEN} // Set your mapbox token here
    {...viewport} 
    width="100vw" 
    height="100vh" 
    onViewportChange={setViewport}
    >
      {/* <Marker 
      latitude={30.22664019} 
      longitude={ -97.7210571} 
      offsetLeft={-20} 
      offsetTop={-10}>
        <img src='https://github.com/JoeHancock1995/reactcrimeviz/blob/main/src/assets/marker.png?raw=true'width={10} height={10}></img>
      </Marker> */}
 
    <Pins data={MURDERS} onClick={setPopupInfo}/>

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
      <FullscreenControl style={fullscreenControlStyle} />
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
