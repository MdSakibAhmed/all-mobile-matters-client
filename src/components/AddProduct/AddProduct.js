import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./AddProduct.css"



const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory()
    const [successAddProduct,setSuccessAddProduct] = useState(false)

    const handleAddProduct = (productInfo) => {
        fetch("https://cherry-surprise-80306.herokuapp.com/addProduct",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(productInfo)

        }).then(res => res.json()).then(result => {
          if(result) {
            setSuccessAddProduct(true)
            setTimeout(() => {
              history.push("/admin")
            }, 2000);
            
          }
        })
    }
const onSubmit = (data) => {
    const {name,price,model} = data;
    const formData = new FormData()
    formData.set("key","a4355e14fad8e03f37f160b394cd440a")
    formData.append("image", data.img[0])
    axios.post('https://api.imgbb.com/1/upload',formData)
      .then(response =>{
          console.log(response.data.data.display_url);

          const productInfo = {
              name:name,
              price:price,
              model:model,
              imgURL:response.data.data.display_url
          }

          handleAddProduct(productInfo)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });



};

 // watch input value by passing the name of it
  return (
    <>
    {successAddProduct && <h3 className="">Product added successfully</h3>}
    {!successAddProduct && <form className="addProduct-form" onSubmit={handleSubmit(onSubmit)}>
    <fieldset>
    <legend>Add Product</legend>
    <label htmlFor="">Product Name</label>
  
      <input name="name" defaultValue="" ref={register({required:true})} />
      {errors.name && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
    <label htmlFor="">Product Price</label>

      <input name="price" type="number" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.price && <span>This field is required</span>}
      <label htmlFor="">Model Number</label>
      <input name="model" type="text" ref={register({ required: true })} />
      {errors.model && <span>This field is required</span>}

    <label htmlFor="">Add Photo</label>

      <input name="img" type="file" ref={register({ required: true })} />
      {errors.img && <span>This field is required</span>}

      <input className="btn-primary" type="submit" value="save" />
      </fieldset>
    </form> }
    
    </>
  );
};

export default AddProduct;
