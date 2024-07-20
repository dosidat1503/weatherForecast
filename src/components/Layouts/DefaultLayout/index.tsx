import Header from "./Header/header"; 

import React from 'react';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

function DefaultLayout({children}: DefaultLayoutProps){
    return (
        <div>
            <Header/>
            <main 
                style={{ 
                    backgroundColor: "#e3f2fd" ,
                    padding: "2rem",
                    height: "100%"
                }}
            >{children}</main> 
        </div>
    )
}
 

export default DefaultLayout;