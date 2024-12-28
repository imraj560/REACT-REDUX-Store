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

        <Row className="view__banner g-0">

            <p style={{fontFamily:'Poppins', fontSize:'32PX', fontWeight:'600'}}>Product Display</p>

        </Row>

        <Container style={{width:'50%'}}>

          <Row id="productDiv">

          <Col lg={6} >
          <h3 style={{fontWeight:'600', fontFamily:'Poppins', fontSize:"30PX"}}>Description</h3><br/>
          <p>{pdata.title}</p>
          <p>
          {pdata.description}
          </p>
          <p style={{marginBottom:'25px', marginTop:'30PX'}}><Calendar3 size={22} style={{fontWeight:600, marginRight:'7px'}}/> Release Date:  {pdata.Release}</p>
          <p style={{marginBottom:'25px'}}><ClockFill size={22} style={{fontWeight:600, marginRight:'7px'}}/> Run Time:  {pdata.Runtime}</p>
          <p style={{display:'flex', flexDirection:'row'}}><Star size={22} style={{fontWeight:600, marginRight:'7px'}}/>  Rating:  <StarRating rating={pdata.rating} totalStars={5} /></p>
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

