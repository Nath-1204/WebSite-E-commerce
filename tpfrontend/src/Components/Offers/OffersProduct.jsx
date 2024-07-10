import offers from "../Assets/offers";
import Item from "../Item/Item";
import "./OffersProduct.css"

const OffersProduct = () => {
    return(
        <div className="offer">
            <h1>Exclusive Offers For You</h1>
            <hr />
            <div className="offersproducts">
                {offers.map((item,i)=>{
                    return <Item    key={i} id={item.id} 
                                    name={item.name} image={item.image} 
                                    new_price={item.new_price} old_price={item.old_price}
                                />
                })}
            </div>
        </div>
    )
}

export default OffersProduct;