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
import { Calendar3, ClockFill, Star } from "react-bootstrap-icons";
import StarRating from "../../component/rating/StarRating";
import './ProductView.css';

const ProductView = () => {

    const [pdata, setPdata] = useState([]);
    const param = useParams();

    useEffect(()=>{

    const asyncFunction = async()=>{

        // let data = await fetch(`https://dummyjson.com/products/${param.id}`).then((response)=>{
          let data = await fetch('../utils/data.json').then((response)=>{

        return response.json();

        }).then((data)=>{

          
          const newParam = param.id - 1;
          setPdata(data[newParam]);
         

        })
      }

      asyncFunction();

      console.log(pdata);

    }, [])
  


    return(

    <Layout>

        

        <Container style={{width:"50%"}}>

           <Row id="product_banner">

            <p id="product_banner_text">Product Display</p>

          </Row>

          <Row id="productDiv">

          <Col lg={8}>
          <p id="productDiv_title">{pdata.title}</p>
          <p>
          {pdata.description}
          </p>
          <p style={{marginBottom:'32px', marginTop:'30PX'}}><Calendar3 size={22} style={{fontWeight:600, marginRight:'7px'}}/> Release Date:  {pdata.Release}</p>
          <p style={{marginBottom:'32px'}}><ClockFill size={22} style={{fontWeight:600, marginRight:'7px'}}/> Run Time:  {pdata.Runtime}</p>
          <p style={{display:'flex', flexDirection:'row'}}><Star size={22} style={{fontWeight:600, marginRight:'7px'}}/> <StarRating rating={pdata.rating} totalStars={5} /></p>
          </Col>

          
          <Col lg={4}>
          
          <MovieCard movieProp={pdata} />

          </Col>

        </Row>
      </Container>

        

        

    </Layout>

    )
    


}

export default ProductView;

