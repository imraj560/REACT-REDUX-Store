import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({children})=>{

    return(
        <div style={{width:'100%'}}>

            <Header/>
                {children}
            <Footer/>

        </div>
    )

}

export default Layout;