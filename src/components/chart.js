import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = arr => (arr.reduce((a,b) => a + b)/arr.length);

export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines data={data} height={120} width={180} preserveAspectRatio={2}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p className="text-center text-muted">{average(data).toFixed(2)} {units}</p>
    </div>
  );
}