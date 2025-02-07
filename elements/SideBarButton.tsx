import React from 'react'
import SideBarElement from './SideBarElement'
import SVG from './SVG'
import sidebarData from '@/Data/HeaderButtonsDataTwo.json'
import Arrowbutton from './Reusable SVGS/Arrowbutton'
const SideBarButton = () => {
    return (
        <div>
            {sidebarData.map((item, index)=>(
                <div key={index}>
                    <div>
                    {item.IsSVG ? <SVG
                    Pathd={item.SVGPathd}
                    Viewbox={item.SVGviewbox}
                    Width={item.SVGWidth}
                    Role={item.SVGRole}
                    TestID={item.SVGTestID}

                    />: null}
                        <span>
                            {item.ButtonTitle}
                            <Arrowbutton />
                        </span>
                    </div>
                    <ul>
                        {item.Sidebarlist.map((element, elementIndex) =>(
                            <SideBarElement
                            key={elementIndex}
                            Title={element.title}
                            ElementURL={element.link}
                            Image={element.URLImage}
                            IsSVG={element.IsSVG}
                            SVGComponent={element.IsSVG ? <SVG
                                Pathd={element.SVGPathd}
                                Viewbox={element.SVGviewbox}
                                Width={element.SVGWidth}
                                Role={element.SVGRole}
                                TestID={item.SVGTestID}
                                />: null}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default SideBarButton