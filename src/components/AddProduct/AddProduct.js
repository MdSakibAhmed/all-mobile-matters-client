import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";



const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const handleAddProduct = (productInfo) => {
        fetch("http://localhost:5000/addProduct",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(productInfo)

        }).then(res => {
            console.log(res)
        })
    }
const onSubmit = (data) => {
    const {name,price} = data;
    const formData = new FormData()
    formData.set("key","a4355e14fad8e03f37f160b394cd440a")
    formData.append("image", data.img[0])
    axios.post('https://api.imgbb.com/1/upload',formData)
      .then(response =>{
          console.log(response.data.data.display_url);

          const productInfo = {
              name:name,
              price:price,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input name="name" defaultValue="" ref={register({required:true})} />

      {/* include validation with required or other standard HTML validation rules */}
      <input name="price" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.price && <span>This field is required</span>}
      <input name="img" type="file" ref={register({ required: true })} />
      {errors.img && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default AddProduct;
