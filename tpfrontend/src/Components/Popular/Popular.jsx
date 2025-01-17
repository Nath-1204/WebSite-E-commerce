import React  from "react";
import './Popular.css'
import data_product from '../Assets/data'
import Item from "../Item/Item";


const Popular = (props) => {
    
    //const [popularProducts, setPopularProducts] = useState([]);

    /* useEffect(()=>{
        fetch('http://localhost:4000/popularinwomen')
        .then((response)=>response.json())
        .then((data)=>setPopularProducts(data));
    },[]) 
 */
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {
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
        </div>
    )
}

export default Popular;