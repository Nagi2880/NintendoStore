'use client'
import React from 'react'
import { categories } from '../../Data/categories'
import Arrowbutton from '../Reusable SVGS/Arrowbutton'
import { useState } from 'react';
import Link from 'next/link';

export const HeaderSearchbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const handleAllCategories = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div>
                <button>   
                    {/*here comes the search svg*/}
                    <span>
                        Search
                    </span>
                </button> 
                <div>
                    <button onClick={toggleDropdown} >
                        All categories
                        <Arrowbutton />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div>
                    {categories.map((category) => (
                        category.title === "Allcategories" ? (
                            <button onClick={handleAllCategories} key={category.title}>
                                {category.title}
                            </button>
                        ) : (
                            <Link href={category.url} key={category.title}>
                                {category.title}
                            </Link>
                        )
                    ))}
                </div>
            )}
        </div>
    )
}
