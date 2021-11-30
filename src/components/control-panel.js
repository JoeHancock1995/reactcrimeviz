import * as React from 'react';

function ControlPanel() {
  return (
    <div className="control-panel">
      <h3>Austin, Texas </h3>
      <p>
        City of Austin Population = 1,003,615
      </p>
      <p>
        Homicides in 2021 = 82
      </p>
      <p>  
        Homicides per 100,000 citizens = 8.17 
      </p>
      {/* <p>
        Data source:{' '}
      </p> */}
    </div>
  );
}

export default React.memo(ControlPanel);