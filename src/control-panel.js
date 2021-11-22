import * as React from 'react';

function ControlPanel() {
  return (
    <div className="control-panel">
      <h3>Marker, Popup, NavigationControl and FullscreenControl </h3>
      <p>
        Austin homicides for 2021 to date
      </p>
      <p>
        Data source:{' '}
      </p>
    </div>
  );
}

export default React.memo(ControlPanel);