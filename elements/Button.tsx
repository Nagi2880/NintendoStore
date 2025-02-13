import React from 'react'
import Link from 'next/link';
import SVG from './SVG';

interface NavBarProps{
    Url: string;
    Title: string;
    IsSVG: boolean;
    SVGPathd: string | string[];
    Viewbox: string;
    Width: number;
    Role: string;
    TestID: string

}

const Button: React.FC<NavBarProps> = ({ Url, Title, IsSVG, SVGPathd, Viewbox, Width, Role, TestID }) => {
  return (
    <div>
      {IsSVG == true ?( 
        <SVG
        Pathd={SVGPathd}
        Viewbox={Viewbox}
        Width={Width}
        Role={Role}
        TestID={TestID}
      />
      ) 
      : null}
        <Link href={Url}>
            <span>{Title}</span>
        </Link>  
    </div>
    
  )
}

export default Button