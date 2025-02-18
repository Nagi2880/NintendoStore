import React from 'react'
import Button from '../Button'
import ButtonData from '@/Data/HeaderButtonData.json'
function HeaderNavbar() {
  
  return (
    <div>
      {ButtonData.map( ( item, index: number ) =>(
        <div key={index}>
          <div>
            <Button
            Url={item.URL}
            Title={item.ButtonTitle}
            IsSVG={item.IsSVG}
            SVGPathd={item.SVGPathd}
            Viewbox={item.SVGviewbox}
            Width={item.SVGWidth}
            Role={item.SVGRole}
            TestID={item.SVGTestID}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default HeaderNavbar