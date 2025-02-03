import React from 'react'
import Link from 'next/link';

interface NavBarProps{
    Url: string;
    Title: string;
}

const Button: React.FC<NavBarProps> = ({ Url, Title}) => {
  return (
    <div>
        <Link href={Url}>
            <span>{Title}</span>
        </Link>
       
    </div>
    
  )
}

export default Button