import React from 'react'
import { FC } from 'react';

interface SVGProps {
  Pathd?: string;
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
      <path d={Pathd}>
      </path>
    </svg>
  </div>
  )
}

export default SVG

