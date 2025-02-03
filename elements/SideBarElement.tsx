import React from 'react'
import Link from 'next/link'

interface SideBarElementProps{
    Title: string
    Image: string //URL de la imagen
    ElementURL: string
    IsSVG?: boolean //  prop que determina si hay disponible un svg
    SVGComponent?: React.ReactNode
}

const SideBarElement :React.FC<SideBarElementProps> = ({Title, Image, ElementURL, IsSVG, SVGComponent}) => {
  return (
    <div>
        <Link href={ElementURL}>
            <li>
                {IsSVG? (
                    <div>
                        {SVGComponent}
                    </div>
                ):(
                    <img src={Image} alt={Image} />
                )}
                <span>{Title}</span>
            </li>
        </Link>
    </div>
  )
}

export default SideBarElement