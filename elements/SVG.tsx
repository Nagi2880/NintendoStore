import React from 'react'
import { FC } from 'react';

interface SVGProps {
  Pathd?: string | string[];
  Viewbox?: string;
  Width?: number;
  Role?: string;
  TestID?: string;
  Scale?: number;

}

const SVG: FC<SVGProps> =  ({ Pathd, Viewbox, Width, Role, TestID,  }) => {
  return (
  <div>
    <svg viewBox={Viewbox} width={Width} role={Role} data-testid={TestID} xmlns="http://www.w3.org/2000/svg" color="currentColor">
      {Array.isArray(Pathd) ? Pathd.map((d, index) => <path key={index} d={d} />) : <path d={Pathd} />}
    </svg>
  </div>
  )
}

export default SVG

