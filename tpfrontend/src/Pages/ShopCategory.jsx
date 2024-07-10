import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/f1.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {

    const {all_product} = useContext(ShopContext)

    return (
        <div className="shop-category">
            <div className="shop-category-head">
                <div className="shop-left">
                    <h1>WELCOME IN THIS PAGE</h1>
                    <p>12 <span>Hours</span> 20 <span>Mins</span></p>
                    <button>Explore Now</button>
                </div>
                <div className="shop-right">
                    <img className="shopcategory-banner" src={props.banner} alt="" />
                </div>
            </div>
            <div className="shopcategory-indexSort">
                <p>
                    <span >Showing 1-12</span> of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category===item.category){
                        return <Item 
                                key={i} id={item.id} 
                                name={item.name} image={item.image} 
                                new_price={item.new_price} old_price={item.old_price}
                                />
                    }else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcatergory-loadmore">
                <span >Explore More</span>
            </div>
        </div>
    )
}

export default ShopCategory;