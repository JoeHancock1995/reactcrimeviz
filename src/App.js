/* global window */
import * as React from 'react';
import {useState, useCallback} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
// import Pins from './pins';
import ControlPanel from './control-panel';
import MAP_STYLE from '../map-style-basic-v8.json';
// import CITIES from './data/cities.json';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9laGFuY29jazk1IiwiYSI6ImNrdnp1azVvbDE4ODgyeXFpbmMyenU0OTcifQ.IDWTHLIF_B_8ZEC-qtDuMA'; // Set your mapbox token here

function getCursor({isHovering, isDragging}) {
  return isDragging ? 'grabbing' : isHovering ? 'pointer' : 'default';
}

export default function App() {
  const [viewport, setViewport] = useState({
    longitude: -97.73,
    latitude: 30.26,
    zoom: 8,
    bearing: 0,
    pitch: 0
  });
  const [interactiveLayerIds, setInteractiveLayerIds] = useState([]);

  const onInteractiveLayersChange = useCallback(layerFilter => {
    setInteractiveLayerIds(MAP_STYLE.layers.map(layer => layer.id).filter(layerFilter));
  }, []);

  const onClick = useCallback(event => {
    const feature = event.features && event.features[0];

    if (feature) {
      window.alert(`Clicked layer ${feature.layer.id}`); // eslint-disable-line no-alert
    }
  }, []);

  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={MAP_STYLE}
        clickRadius={2}
        onClick={onClick}
        getCursor={getCursor}
        interactiveLayerIds={interactiveLayerIds}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
       {/* <Pins data={CITIES}/> */}
      <ControlPanel onChange={onInteractiveLayersChange} />
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
