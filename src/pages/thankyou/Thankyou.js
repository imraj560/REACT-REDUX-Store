import React from "react";
import Layout from "../../component/layout/layout";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import '../thankyou/Thankyou.css'

const Thankyou = ()=>{



    return (
       <Layout>

        <Row className="thankyou__banner g-0">
            <p>Thank you for your purchase</p>
        </Row>

        <Row>
            <NavLink to="/movie"><button style={{background:"#e5e3e3", border:"none", color:"black", fontSize:"18px"}}>Back to store</button></NavLink>
        </Row>

       </Layout>
    )
}

export default Thankyou;