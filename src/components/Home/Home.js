import React from 'react';
import { useState,useEffect} from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

import Products from "../Products/Products"

const Home = () => {
    const [products,setProducts] = useState([])

    useEffect(()=> {
        fetch("http://localhost:5000/products").then(res => res.json()).then(data => {
            setProducts(data)
            })
    },[])
    
    return (<>
    <div style={{width:"300px", margin:"30px auto 0 auto",textAlign:"center"}}>
        <Form inline>
        <FormControl  type="text" placeholder="Search Mobile" className=" mr-sm-2 " />
        <Button className="mt-3" type="submit">Submit</Button>
      </Form>
      </div>
        <div className="d-flex flex-wrap justify-content-center mt-5 ">
            {products.map(pd => <Products key={pd._id} product={pd}></Products>)}
        </div>
        </>
    );
};

export default Home;