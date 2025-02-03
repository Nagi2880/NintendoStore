import React from 'react'
import SideBarElement from './SideBarElement'
import SVG from './SVG'
import sidebarData from '@/Sidebars.json'
const SideBarButton = () => {
  return (
    <div>
        {sidebarData.map((item, index)=>(
            <div key={index}>
                <span>{item.SidebarTitle}</span>
                <ul>
                    {item.Sidebarlist.map((element, elementIndex) =>(
                        <SideBarElement
                        key={elementIndex}
                        Title={element.title}
                        ElementURL={element.link}
                        Image={element.URL}
                        IsSVG={element.IsSVG}
                        SVGComponent={element.IsSVG ? <SVG />: null}
                        />
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default SideBarButton