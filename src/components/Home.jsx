import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Loader from "./Loader";

// const fetchdata = async() => {
  
// const data = await fetch("https://server-shishirbhargav09.vercel.app/api/products");
// const dataa = data.json();
// console.log(dataa);
// }
// fetchdata();
const Home = () => {
  const [loader, setLoader] = useState(true)
  const [productList, setproductList] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
     const {data} = await axios.get('https://server-shishirbhargav09.vercel.app/api/products')
     console.log(data)
     setproductList([...data])
     // console.log(moviesdata);
    setLoader(false)
     
    }
    fetchdata();
   }, [])
//   const productList = [
//     {
//         "_id": "63a0960b47ad9f46f11fb80f",
//         "title": "boAt BassHeads 900 On-Ear Wired Headphone with Mic",
//         "price": 799,
//         "description": "Enjoy powerful, dynamic sound with punchy bass and clear, natural vocals with the responsive 40mm Neodymium drivers, balanced sound for a complete listening experience",
//         "image": "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61xeIT6UHrL._SX522_.jpg",
//         "__v": 0
//     },
//     {
//         "_id": "63a0961247ad9f46f11fb812",
//         "title": "boAt BassHeads 900 On-Ear Wired Headphone with Mic",
//         "price": 799,
//         "description": "Enjoy powerful, dynamic sound with punchy bass and clear, natural vocals with the responsive 40mm Neodymium drivers, balanced sound for a complete listening experience",
//         "image": "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61xeIT6UHrL._SX522_.jpg",
//         "__v": 0
//     },
//     {
//         "_id": "63a0961447ad9f46f11fb814",
//         "title": "boAt BassHeads 900 On-Ear Wired Headphone with Mic",
//         "price": 799,
//         "description": "Enjoy powerful, dynamic sound with punchy bass and clear, natural vocals with the responsive 40mm Neodymium drivers, balanced sound for a complete listening experience",
//         "image": "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61xeIT6UHrL._SX522_.jpg",
//         "__v": 0
//     },
//     {
//         "_id": "63a0961747ad9f46f11fb816",
//         "title": "boAt BassHeads 900 On-Ear Wired Headphone with Mic",
//         "price": 799,
//         "description": "Enjoy powerful, dynamic sound with punchy bass and clear, natural vocals with the responsive 40mm Neodymium drivers, balanced sound for a complete listening experience",
//         "image": "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61xeIT6UHrL._SX522_.jpg",
//         "__v": 0
//     },
//     {
//         "_id": "63a098a65366e240e5993ca4",
//         "title": "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)",
//         "price": 1220,
//         "description": "Playback- It provides a massive battery backup of upto 15 hours for a superior playback time. Charging Time : 3 Hours",
//         "image": "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51xxA+6E+xL._SY355_.jpg",
//         "__v": 0
//     }
// ]
  

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {
        loader ? <Loader/> : ""
      }
      {productList.map((i) => (
        <ProductCard
          key={i._id}
          imgSrc={i.image}
          name={i.title}
          price={i.price}
          id={i._id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name.slice(0,30)}..</p>
    <h4>₹{price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
