import { FC } from 'react';

export interface HLineProps {};

const HLine: FC<HLineProps> = () => (
  <div className="w-full mb-4">
    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
  </div>
);

export default HLine;
