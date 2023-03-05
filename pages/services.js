import Head from 'next/head'
import Image from 'next/image'
import { Row, Col } from 'reactstrap';

import ducticon from "../photos/ducticon.png"
import insulationicon from "../photos/insulation.png"
import tank from "../photos/tank.png"
import mask from "../photos/mask.png"
import waterproof from "../photos/waterproof.png"
import safetyicon from "../photos/safety.png"



const Services = () => {
    return (
        <div>
            <Head>
                <title>Services</title>
            </Head>

            <div style={{ marginTop: "200px" }}>







                {/* services 6img grid ------------------------------------------------------------------------------ */}
                <div style={{ paddingBottom: "", backgroundColor: "orange" }}>


                    <Col lg="8" style={{ height: "", padding: "0", backgroundColor: "", marginLeft: "auto", marginRight: "auto", marginBottom: "40px", marginTop: "20px" }}>

                        <Row style={{ backgroundColor: "", margin: "0", height: "" }}>

                            <Col style={{ display: "flex", backgroundColor: "red" }}>
                                <Col lg="3" style={{ backgroundColor: "white", margin: "", textAlign: "" }}><Image style={{ backgroundColor: "blue" }} src={ducticon} alt="safety" width={100} height={100} /></Col>
                                <Col style={{ backgroundColor: "pink", margin: "" }}><h2>HVAC Duct</h2><p style={{ fontSize: "" }}>Asbestos, lead, and mold abatement and remediation services.</p></Col>
                            </Col>

                            <Col style={{ display: "flex", backgroundColor: "green" }}>
                                <Col lg="3" style={{ backgroundColor: "blue", margin: "", textAlign: "" }}><Image src={insulationicon} alt="safety" width={100} height={100} /></Col>
                                <Col style={{ backgroundColor: "", margin: "" }}><h2>Indoor Piping</h2><p style={{ fontSize: "" }}>Asbestos, lead, and mold abatement and remediation services.</p></Col>
                            </Col>

                            <Col style={{ display: "flex", backgroundColor: "red" }}>
                                <Col lg="3" style={{ backgroundColor: "blue", margin: "", textAlign: "" }}><Image src={tank} alt="safety" width={80} height={80} /></Col>
                                <Col style={{ backgroundColor: "", margin: "" }}><h2>Tanks</h2><p style={{ fontSize: "" }}>Asbestos, lead, and mold abatement and remediation services.</p></Col>
                            </Col>

                        </Row>


                        <Row style={{ backgroundColor: "", width: "", margin: "0", height: "" }}>
                            <Col style={{ display: "flex", backgroundColor: "green" }}>
                                <Col lg="3" style={{ backgroundColor: "black", margin: "", textAlign: "right" }}><Image src={mask} alt="safety" width={100} height={100} /></Col>
                                <Col style={{ backgroundColor: "", margin: "" }}><h2>Abatement</h2><p style={{ fontSize: "" }}>Asbestos, lead, and mold abatement and remediation services.</p></Col>
                            </Col>

                            <Col style={{ display: "flex", backgroundColor: "red" }}>

                                <Col lg="3" style={{ backgroundColor: "blue", margin: "", textAlign: "center" }}><Image src={waterproof} alt="safety" width={70} height={90} /></Col>
                                <Col style={{ backgroundColor: "", margin: "auto" }}>

                                    <h2>Outdoor Piping</h2>

                                    <ul>
                                        <li>stainless steel pipe covering</li>
                                        <li>pvc jacket</li>
                                        <li>jacketing</li>
                                    </ul>

                                </Col>

                            </Col>

                            <Col style={{ display: "flex", backgroundColor: "green" }}>
                                <Col lg="3" style={{ backgroundColor: "black", margin: "", textAlign: "" }}><Image src={safetyicon} alt="safety" width={100} height={100} /></Col>
                                <Col style={{ backgroundColor: "", margin: "" }}><h2>Consulting</h2><p style={{ fontSize: "" }}>Leverage 32 years of experience across project design and compliance.</p></Col>
                            </Col>
                        </Row>

                    </Col>


                </div>



















            </div>


        </div>
    )
};




export default Services;