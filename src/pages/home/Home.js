import React, { useEffect, useState } from 'react';
import Layout from '../../component/layout/layout';
import { Button, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Paypal } from 'react-bootstrap-icons';
import { CreditCard } from 'react-bootstrap-icons';
import { Truck } from 'react-bootstrap-icons';
import { Tv, CollectionPlayFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import ProductViewCard from '../../component/productpage/ProductViewCard';
import './Home.css';

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [groceries, setgroceries] = useState([]);
  const [fragrance, setFragrance] = useState([]);
  const [beauty, setBeauty] = useState([]);
  const [furniture, setFurniture] = useState([]);

 
  {/**Getting the API Data */}
  useEffect(()=>{

    const asyncFunction = async() =>{

      //let data = await fetch('https://dummyjson.com/products').then((response)=>{
        let data = await fetch('utils/data.json').then((response)=>{

      
        return response.json();

      }).then((data)=>{

        setProducts(data);
        console.log(products)
      })

    }

    asyncFunction();

    console.log(products);

  },[]);


  {/**Taking the first 3 items from array */}
 useEffect(()=>{

  const groceriesData = products.filter((product)=>{
    
  return product.category.toLowerCase().includes('animation');

  })



  setgroceries(groceriesData.slice(0 ,4));

  const fragranceData = products.filter((product)=>{
    
    return product.category.toLowerCase().includes('action');
  
    })
  
    setFragrance(fragranceData.slice(0 ,4));


    const beautyData = products.filter((product)=>{
    
      return product.category.toLowerCase().includes('romantic');
    
      })
    
      setBeauty(beautyData.slice(0 ,4));


      const furnitureData = products.filter((product)=>{
    
        return product.category.toLowerCase().includes('drama');
      
        })
      
        setFurniture(furnitureData.slice(0 ,4));



  

 },[products])

  

  

  return (

    <Layout>

      <Container>
      <Row style={{height:'500px', marginTop:'100PX', marginBottom:'300px'}}>
       
        <Col md={6} style={{alignContent:'center'}}>
          <h1 style={{fontFamily:'Poppins', fontWeight:'600', marginBottom:'20px'}}>Discover Your Next Favourite Movie Collection</h1>
          <p style={{fontFamily:'Poppins', fontWeight:'300'}}>
          Welcome to our movie store, where you can explore the latest and greatest films. Whether you're a fan of action, romance, or comedy, we have something for everyone! 
          </p>
         
          <Button variant='secondary' style={{width:'20%', borderRadius:'0px', background:'black', padding:'15px'}}>
          <NavLink style={{textDecoration:'none', color:'white'}} to={'/store'}>Store</NavLink>
          </Button>
          
        </Col>
        <Col md={6}  id="home_banner">

        </Col>

      </Row>

      <Row className='service__section g-5' style={{marginBottom:'170px'}}>

        <div style={{marginBottom:'10px'}}>
          <p style={{fontFamily:'Poppins', fontSize:'32PX', fontWeight:'600', textAlign:'left', width:'50%'}} className='mb-5'>
             Discover the Latest Hits with Our Newest Movie Releases
         </p>
        </div>
        

          <Col  lg={4} md={12} sm={12} xs={12}>
          <Tv size={30} style={{marginBottom:'20PX'}}/>
          <p style={{fontFamily:'Poppins', fontSize:'20PX', fontWeight:'600'}}>Explore the Best of Cinema with Our Top Rated Movies</p>
          <p style={{fontFamily:'Poppins', fontSize:'13PX', fontWeight:'300'}}>Stay ahead with our curated selection of the highest-rated films.</p>
          <Button variant='secondary' style={{width:'20%', borderRadius:'0px', fontSize:'15PX', background:'black', padding:'7px'}}>
          <NavLink style={{textDecoration:'none', color:'white'}} to={'/store'}>Store</NavLink>
          </Button>
          </Col>
          <Col  lg={4} md={12} sm={12} xs={12} className=''>
          <CreditCard size={30} style={{marginBottom:'20PX'}}/>
          <p style={{fontFamily:'Poppins', fontSize:'20PX', fontWeight:'600'}}>Unlock Amazing Savings with Our Exclusive Deals on Movies</p>
          <p style={{fontFamily:'Poppins', fontSize:'13PX', fontWeight:'300'}}>Don’t miss out on limited-time offers for your favorite films, Register Now!</p>
          <Button variant='secondary' style={{width:'20%', borderRadius:'0px', fontSize:'15PX', background:'black', padding:'7px'}}>
          <NavLink style={{textDecoration:'none', color:'white'}} to={'/register'}>Sign</NavLink>
          </Button>
          </Col>
          <Col  lg={4} md={12} sm={12} xs={12} className=''>
          <CollectionPlayFill size={30} style={{marginBottom:'20PX'}}/>
          <p style={{fontFamily:'Poppins', fontSize:'20PX', fontWeight:'600'}}>Enjoy a Curated Collection of Must-Watch Movies Just for You</p>
          <p style={{fontFamily:'Poppins', fontSize:'13PX', fontWeight:'300'}}>Find your next favorite film with our personalized recommendations.</p>
          <Button variant='secondary' style={{width:'20%', borderRadius:'0px',fontSize:'15PX', background:'black', padding:'7px'}}>
          <NavLink style={{textDecoration:'none', color:'white'}} to={'/login'}>Login</NavLink>
          </Button>
          </Col>
         

      </Row>

      <Row className="electronics__section">

        <Row style={{marginBottom:'50px'}}>

          <Col>
          <p style={{fontSize:'13PX'}}>Discover</p>

          <p style={{fontFamily:'Poppins', fontSize:'32PX', fontWeight:'600', textAlign:'left', width:'50%', marginBottom:'20px'}}>
            Movies
            </p>

            <p style={{fontSize:'13PX', marginBottom:'0PX'}}>Explore our extensive collection of movies for everyone!</p>   
          </Col>

          <Col style={{position:'relative'}}>
            <Button className="float-end mt-auto" variant='secondary' style={{width:'20%', position:'absolute', bottom:'0px', right:'0px', borderRadius:'0px',fontSize:'15PX', background:'black', padding:'7px'}}>
            <NavLink style={{textDecoration:'none', color:'WHITE'}} to={'/login'}>Store</NavLink>
            </Button>
          </Col>
          

          
        </Row>
      

          {
          groceries.map((data)=>(
          <Col lg={3} md={12} sm={12} xs={12} style={{marginBottom:"20px"}}>   
          <ProductViewCard props={data} />
          </Col>

          ))
        }

     


     

     

          {

        fragrance.map((data)=>(
        <Col lg={3} md={12} sm={12} xs={12} style={{marginBottom:"20px"}}>   
          <ProductViewCard props={data} />
        </Col>

        ))
      }

      </Row>




     

    </Container>
      


  </Layout>
     
   
  )
}

export default Home;
