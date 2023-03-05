import Toolbar from './Toolbar.js'
import Footer from './Footer.js';
import styles from '../styles/Layout.module.css';
import React, { useEffect } from 'react';
// import Background from "../photos/istock.jpg"



const Layout = ({ children }) => {



    // useEffect(() => {
    //     var navHeight = document.getElementById('navContainer').offsetHeight;
    //     // console.log(navHeight);
    //     var mainContent = document.getElementById("mainContainer");
    //     mainContent.style.marginTop = navHeight + "px";
    // }, [])



    // <div style={{backgroundImage: "url(../photos/istock.jpg)"}}>


    return (

        <div className={styles.Layout}>


            <Toolbar/>

            <div id="mainContainer" className={styles.container}>

                {children}

            </div>

            <Footer />


        </div>

    )
}
export default Layout
