import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({ list, color }) => {
  return (
    <div>
      <Sparklines data={list} height={120} width={180}><SparklinesLine color={color} /></Sparklines>
    </div>
  );
}