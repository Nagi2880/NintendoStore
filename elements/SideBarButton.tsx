'use client';
import React, { useState } from 'react'
import SideBarElement from './SideBarElement'
import SVG from './SVG'
import sidebarData from '@/Data/HeaderButtonsDataTwo.json'
import Arrowbutton from './Reusable SVGS/Arrowbutton'

const SideBarButton = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleLista = (index : number) => {

        setActiveIndex(activeIndex === index ? null : index);
};


    return (
        <div>
            {sidebarData.map((item, index: number) => (
                <div key={index}>
                    <div>
                    {item.IsSVG ? (
                    <SVG
                    Pathd={item.SVGPathd}
                    Viewbox={item.SVGviewbox}
                    Width={item.SVGWidth}
                    Role={item.SVGRole}
                    TestID={item.SVGTestID}
                    />
                    ) : null}
                    
                        <button onClick={() => toggleLista(index)} className='SidebarButton-container'>
                            {item.ButtonTitle}
                            <Arrowbutton />
                        </button>
                    </div>
                    {activeIndex === index && (

                    <ul>
                        {item.Sidebarlist.map((element, elementIndex) =>(
                            <SideBarElement
                            key={elementIndex}
                            Title={element.title}
                            ElementURL={element.link}
                            Image={element.URLImage}
                            IsSVG={element.IsSVG}
                            SVGComponent={
                                element.IsSVG && (
                                <SVG
                                Pathd={element.SVGPathd}
                                Viewbox={element.SVGviewbox}
                                Width={element.SVGWidth}
                                Role={element.SVGRole}
                                TestID={item.SVGTestID}
                                />
                                )
                            }
                            />
                        ))}
                    </ul>
                    )}
                </div>
            ))}
        </div>
    )
}

export default SideBarButton