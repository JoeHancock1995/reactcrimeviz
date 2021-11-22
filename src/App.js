/* global window */
import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {useState, useCallback} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';






function App() {
  const [viewport, setViewport] = React.useState({
    longitude: -97.73,
    latitude: 30.26,
    zoom: 9
  });
  return (
    <ReactMapGL
    mapStyle="mapbox://styles/mapbox/dark-v9"
    mapboxApiAccessToken = {'pk.eyJ1Ijoiam9laGFuY29jazk1IiwiYSI6ImNrdnp1azVvbDE4ODgyeXFpbmMyenU0OTcifQ.IDWTHLIF_B_8ZEC-qtDuMA'} // Set your mapbox token here
    {...viewport} 
    width="100vw" 
    height="100vh" 
    onViewportChange={setViewport}>
      <Marker 
      latitude={30.22664019} 
      longitude={ -97.7210571} 
      offsetLeft={-20} 
      offsetTop={-10}>
        <img src='https://github.com/JoeHancock1995/reactcrimeviz/blob/main/src/assets/marker.png?raw=true'width={10} height={10}></img>
      </Marker>
    </ReactMapGL>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
