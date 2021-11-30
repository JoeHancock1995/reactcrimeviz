import * as React from 'react';

function MurderInfo(props) {
  const {info} = props;
  const displayName = `${info.Address}, ${info.OccurredDate}`;

  return (
    <div>
      <div>
        {displayName} |{' '}
      </div>
      <img width={240} src={info.image} />
    </div>
  );
}

export default React.memo(MurderInfo);