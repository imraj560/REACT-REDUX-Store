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
import ProductViewCard from "../../component/productpage/ProductViewCard";
import { Calendar3, ClockFill, HeartArrow, Star } from "react-bootstrap-icons";
import StarRating from "../../component/rating/StarRating";
import './ProductView.css';
import { all } from "axios";

const ProductView = () => {
  const [singleProductData, setSingleProductData] = useState([]);
  const [realtedData, setRelatedData] = useState([])
  const [allData, setAllData] = useState([])
  const {id, category} = useParams();

  useEffect(()=>{

    const fetchData =  async() => {

      await fetch('/utils/data.json', {

        method:'GET',
        header: {

          'Content-Type':'application/json'
        }

      }).then((response)=>{

        return response.json()

      }).then((data)=>{

          setAllData(data)

         

      })

    }

    fetchData()



  }, [id, category]);


  useEffect(()=>{

   const filterSingleData = allData.filter((singleData)=>{

    return singleData.id == id;

   })

  setSingleProductData(filterSingleData)

  }, [allData])


  useEffect(()=>{

    const filterRelatedData = allData.filter((singleData)=>{

      return singleData.category == `${category}`
    })

    setRelatedData(filterRelatedData.slice(0,3))

  

  },[allData])
   


    return(

    <Layout>

        

        <Container id="productDisplayContainer">

        <Row id="title_row">

        <p id="display_title">Product Display</p>

        </Row>

        <Row id="productDiv">

            <Col lg={6} >
            {singleProductData.map((singleData)=>{

                return (
                  <>

                <h3 id="description">Description</h3><br/>
                <p style={{fontWeight:'600'}}>{singleData.title}</p>
                <p>
                {singleData.description}
                </p>
                <p style={{marginBottom:'25px', marginTop:'30PX'}}><Calendar3 size={22} style={{fontWeight:600, marginRight:'7px'}}/> Release Date:  {singleData.Release}</p>
                <p style={{marginBottom:'25px'}}><ClockFill size={22} style={{fontWeight:600, marginRight:'7px'}}/> Run Time:  {singleData.Runtime}</p>
                <p style={{display:'flex', flexDirection:'row'}}><Star size={22} style={{fontWeight:600, marginRight:'7px'}}/>  Rating:  <StarRating rating={singleData.rating} totalStars={5} /></p>
                  
                  </>
                 
                  
                )
            })}
           
            </Col>


            <Col id="cardDiv" lg={6}>

            {singleProductData.map((singleData)=>{

                      return (
                        <>
                        <MovieCard movieProp={singleData} />

                        </>
                      
                        
                      )
                      })}

           

            </Col>

            </Row>

            <Row id="relatedDivTitle">

              <h2 id="related_title">Related Movies</h2>

              {
                realtedData.map((singleData)=>{

                    return (

                      <>
                        <Col lg={4} md={6} id="relatedCol">
                            <ProductViewCard props={singleData} />
                        </Col>
                      </>
                    )
                })
              }



            </Row>
      </Container>

        

        

    </Layout>

    )
    


}

export default ProductView;

