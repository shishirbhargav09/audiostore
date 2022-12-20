import axios from "axios";
import React, { useState } from "react";
import "../styles/manageproducts.scss"
import toast from "react-hot-toast";
function AddProduct() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState();
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const addHandle = (e) => { 
    e.preventDefault();
    console.log("clicked")
    axios.post('https://server-shishirbhargav09.vercel.app/api/addproduct', {
      title: title,
      price: price,
      description: description,
      image: image

    })
    .then(function (response) {
      toast.success("Added To Database");
      console.log(response);
      settitle();
      setimage();
      setdescription();
      setprice();
    })
    .catch(function (error) {
      console.log(error);
    });
   }
  return (
    <div className="main">
      <h1>Add Products</h1>
      <div className="form-container">
      <form onSubmit={addHandle}>
        <input type="text" name="title" value={title} placeholder = "title" onChange={(e) => {
          settitle(e.target.value);
          console.log(title)
        }}/>
        <input type="text" name="price" value={price} placeholder = "price" onChange={(e) => {
          setprice(e.target.value);
        }}/>
        <input type="text" name="description" value={description} placeholder = "description" onChange={(e) => {
          setdescription(e.target.value);
        }}/>
        <input type="text" name="image" value={image} placeholder = "image url" onChange={(e) => {
          setimage(e.target.value);
        }}/>
        <button onSubmit={addHandle}>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default AddProduct;
