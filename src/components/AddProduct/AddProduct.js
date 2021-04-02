import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./AddProduct.css"



const AddProduct = () => {
    const { register, handleSubmit,  errors } = useForm();
    const history = useHistory()
    const handleAddProduct = (productInfo) => {
        fetch("https://cherry-surprise-80306.herokuapp.com/addProduct",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(productInfo)

        }).then(res => res.json()).then(result => {
          if(result) {
            history.push("/admin")
            
          }
        })
    }
const onSubmit = (data) => {
    const {name,price,brand} = data;
    const formData = new FormData()
    formData.set("key","a4355e14fad8e03f37f160b394cd440a")
    formData.append("image", data.img[0])
    axios.post('https://api.imgbb.com/1/upload',formData)
      .then(response =>{
          console.log(response.data.data.display_url);

          const productInfo = {
              name:name,
              price:price,
              brand:brand,
              imgURL:response.data.data.display_url
          }

          handleAddProduct(productInfo)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
};

  return (
    <>
    <form className="addProduct-form" onSubmit={handleSubmit(onSubmit)}>
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
      <label htmlFor="">Brand Name</label>
      <input name="brand" type="text" ref={register({ required: true })} />
      {errors.brand && <span>This field is required</span>}

    <label htmlFor="">Add Photo</label>

      <input name="img" type="file" ref={register({ required: true })} />
      {errors.img && <span>This field is required</span>}

      <input className="btn-primary" type="submit" value="save" />
      </fieldset>
    </form> 
    
    </>
  );
};

export default AddProduct;
