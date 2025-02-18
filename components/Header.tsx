import HeaderLogoandSearchbar from '@/elements/Header/HeaderLogoandSearchbar'
import HeaderNavbar from '@/elements/Header/HeaderNavbar'
import SideBarButton from '@/elements/Header/HeaderSideBarButton'
import React from 'react'

function Header() {
  return (
    <div>
      <HeaderLogoandSearchbar />
      <HeaderNavbar />
      <SideBarButton />
    </div>
  )
}

export default Header