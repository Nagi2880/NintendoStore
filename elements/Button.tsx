import React from 'react'
import Link from 'next/link';
import ButtonData from '@/Data/HeaderButtonsData.json'
import SVG from './SVG';

interface NavBarProps{
    Url: string;
    Title: string;

}

const Button: React.FC<NavBarProps> = ({ Url, Title }) => {
  return (
    {ButtonData.map((item, index: number) => (
      <div key={index}>
        <div>
          {item.IsSVG ? <SVG />}
        </div>
      </div>
    ))

    }

    <div>
        <Link href={Url}>
            <span>{Title}</span>
        </Link>  
    </div>
    
  )
}

export default Button