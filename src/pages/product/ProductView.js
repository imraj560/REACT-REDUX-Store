import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
import { Card } from "react-bootstrap";
import Layout from "../../component/layout/layout";
import MovieCard from "../../component/movie/MovieCard";
import './ProductView.css';

const ProductView = () => {

    const [pdata, setPdata] = useState([]);
    const param = useParams();

    useEffect(()=>{

    const asyncFunction = async()=>{

        let data = await fetch(`https://dummyjson.com/products/${param.id}`).then((response)=>{

        return response.json();

        }).then((data)=>{

          

          setPdata(data);

        })
      }

      asyncFunction();

      console.log(pdata);

    }, [])
  


    return(

    <Layout>

        <Row className="view__banner g-0">

            <p>Product Display</p>

        </Row>

        <Row className="details g-0">

          <Col lg={6} style={{padding:"20px"}}>
          <h3>Description</h3><br></br>
          <h5>{pdata.title}</h5>
          <p>
          {pdata.description}
          </p>
          </Col>

          
          <Col lg={6}>
          
          

           <MovieCard movieProp={pdata} />

          
          
          </Col>

        </Row>

        

    </Layout>

    )
    


}

export default ProductView;

