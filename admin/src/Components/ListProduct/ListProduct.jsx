import React, { useEffect, useState } from "react";
import './ListProduct.css'
import cross_icon from "../../assets/cross_icon.png"

const ListProduct = () => {

    const [allproduct,setAllproduct] = useState([]);

    const fecthInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllproduct(data)})
    }

    useEffect(()=>{
        fecthInfo();
    },[])

    const remove_product = async () => {
        await fetch('http://localhost:4000/removeproduct', {
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fecthInfo();
    }

    return (
        <div className="list-product">
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproduct">
                <hr />
                {allproduct.map((product,index)=>{
                    return (
                        <>
                            <div key={index} className="listproduct-format-main listproduct-format">
                                <img src={product.image} alt="" className="listproduct-product-icon"/>
                                <p>{product.name}</p>
                                <p>${product.old_price}</p>
                                <p>${product.new_price}</p>
                                <p>{product.category}</p>
                                <img onClick={()=>{return(alert("Voulez-vous vraiment le supprimer!!"),remove_product(product.id))}} src={cross_icon} alt="" className="listproduct-remove-icon"/>
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ListProduct;