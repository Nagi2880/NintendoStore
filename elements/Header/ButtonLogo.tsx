import React from 'react'
import { NintendoLogo } from '../NintendoLogo'
import Link from 'next/link'

const ButtonLogo = () => {
    return (
    <div>
        <Link href="/">
            <NintendoLogo />
        </Link>
    </div>
    )
}

export default ButtonLogo