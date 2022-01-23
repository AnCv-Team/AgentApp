import React, { useCallback, useState } from 'react';

import ListProduct from '../ListProduct';

const dataList = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '4' },
  { key: '5' },
  { key: '6' },
  { key: '7' },
  { key: '8' },
  { key: '9' },
  { key: '10' },
  { key: '11' },
  { key: '12' },
  { key: '13' },
  { key: '14' },
  { key: '15' },
  { key: '16' },
  { key: '17' },
  { key: '18' },
  { key: '19' },
  { key: '20' },
];

function SellALot({ scrollHandel, HEADER_MAX_HEIGHT }) {
  return <ListProduct dataList={dataList} scrollHandel={scrollHandel} HEADER_MAX_HEIGHT={HEADER_MAX_HEIGHT} />;
}

export default SellALot;