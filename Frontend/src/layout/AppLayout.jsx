import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const AppLayout = ({ children,isSidebar=true }) => {
    return (
        <>
            <Header />
            {children}
            {/* <Footer /> */}
            {isSidebar&&<Sidebar />}
            
        </>
    )
}

export default AppLayout
