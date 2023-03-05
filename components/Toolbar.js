import React, { useEffect, useState } from "react";
// import Head from 'next/head'
import { useRouter } from 'next/router';

import { Row, Col } from 'reactstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "../styles/Toolbar.module.css";

// import React from 'react';




const Toolbar = () => {


  const router = useRouter();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);






  return (
    <div className={small ? styles.smallNavComp : styles.navComponent}>

      {/* <Head><title>Navbar</title></Head> */}

      <Row id="navContainer" className={small ? styles.smallNavContainer : styles.navContainer}>
        <div style={{ display: 'flex' }}>





          <div className={styles.navbrand}>
            <div>
              <a href="/" className={small ? styles.smallLogo : styles.brandLogo}>
                <div style={{ color: "blue", letterSpacing: "-2px" }}>WJ</div>
                <div className={small ? styles.smallLogoTitle : styles.logoTitle}>Best</div>
                <div className={small ? styles.smallLogoTitle : styles.logoTitle}>Insulation</div>
              </a>
            </div>
          </div>



          <div className={small ? styles.smallNavLinks : styles.navlinks}>
            <div>
              <Col><a href="/">Home</a></Col>
              <Col><a href="/services">Services</a></Col>
              <Col><a href="/projects">Gallery</a></Col>
              <Col><a href="/contact">Contact</a></Col>
              <Col><a href="/quote">Get a Quote</a></Col>
            </div>
          </div>



          <div className={styles.phoneLink}>
            <div>
              <a title="Call Now" className={small ? styles.smallPhoneLinkTag : styles.phoneLinkTag} href="tel:7329101016">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
                <b>(732) 910-1016</b>
              </a>
            </div>
          </div>



          <Col className={styles.burgercolumn}>


            <div className={show === false ? styles.burgerContainer : styles.burgerContainerActive}>
            {/* <div className={ small ? styles.smallBurgerContainer : styles.burgerContainer}> */}
              <div className={show === false ? styles.burgerIcon : styles.burgerActive} onClick={handleShow} title="Menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
              </div>
            </div>



            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>WJ Best Insulation</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={styles.offCanvasBody}>
                <ul>
                  <li><a href="/" className={router.pathname == "/" ? styles.active : ""}>Home</a></li>
                  <li><a href="/services" className={router.pathname == "/services" ? styles.active : ""}>Services</a></li>
                  <li><a href="/gallery" className={router.pathname == "/gallery" ? styles.active : ""}>Gallery</a></li>
                  <li><a href="/contact" className={router.pathname == "/contact" ? styles.active : ""}>Contact</a></li>
                </ul>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>






        </div>
      </Row>
    </div>
  )
};


export default Toolbar;