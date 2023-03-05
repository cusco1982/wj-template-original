import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron.js"
import styles from "../styles/Quote.module.css"


const Quote = () => {
    return (
        <div>
            <Head>
                <title>Quote</title>
            </Head>


            {/* <Jumbotron/> */}
            <Row className={styles.jumboBackground} style={{ height: "60vh", backgroundColor: "black", textAlign: "center", padding: "0", margin: "0" }}>

                <div style={{ margin: "auto", color: "white" }}>
                    <h1 style={{ backgroundColor: "", padding: "20px" }}>#1 Mechanical Insulation Service</h1>
                    <div style={{ borderTop: "1px solid #4db2ec", width: "10%", padding: "10px", margin: "auto" }}></div>
                    <p style={{ backgroundColor: "", padding: "20px" }}>We believe that the satisfaction and safety of our <br /> customers is our #1 Priority.</p>
                    <button style={{ backgroundColor: "#4db2ec", padding: "20px" }}>GET A QUOTE</button>
                </div>

            </Row>

            <Row style={{ padding: "0", marginTop: "60px", marginBottom: "60px", marginLeft: "0", marginRight: "0", backgroundColor:"green" }}>

                <h2 style={{ textAlign: "center" }}>GET A FREE ESTIMATE</h2>


                <Col lg="8" style={{ backgroundColor: "purple", margin: "auto" }}>
                    <Row>



                        <Col lg="5" style={{ backgroundColor: "red" }}>
                            <div>
                                <h4>PROJECT IN MIND?</h4>
                                <p>We'd love to help with your next project! Simply tell us about the scope of work and we'll follow up shortly.</p>
                                <h4>PHONE</h4>
                                <p>(732) 423-9671</p>
                                <h4>EMAIL</h4>
                                <p>wjbestinsulation@gmail@gmail.com</p>
                                <h4>ADDRESS</h4>
                                <p>2 Nora Rd, Edison, NJ 08837</p>
                                <div>Li Fb iG Yt</div>
                            </div>
                        </Col>






                        <Col lg="7" style={{ backgroundColor: "pink" }}>
                            <div>
                                <p>Fields marked with an asterisk (*) are required.</p>

                                <Row>
                                    <Col> <input type="Name" /> </Col>
                                    <Col> <input type="Company" /> </Col>
                                </Row>

                                <Row>
                                    <Col> <input type="Email*" /> </Col>
                                    <Col> <input type="Phone" /> </Col>
                                </Row>

                                <Row>
                                    <textarea name="Message" id="" cols="30" rows="3"></textarea>
                                </Row>

                                <Row>
                                    <button>REQUEST ESTIMATE</button>
                                </Row>


                            </div>

                        </Col>







                    </Row>
                </Col>



            </Row>






        </div>
    )
};




export default Quote;