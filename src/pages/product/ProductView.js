import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
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

        <Container>

          <Row id="productDiv">

          <Col lg={6} >
          <h3>Description</h3><br></br>
          <h5>{pdata.title}</h5>
          <p>
          {pdata.description}adable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          </Col>

          
          <Col lg={6}>
          
          <MovieCard movieProp={pdata} />

          </Col>

        </Row>
      </Container>

        

        

    </Layout>

    )
    


}

export default ProductView;

