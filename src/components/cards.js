/* import swim from '../images/swim.png';
import weddingphoto from '../images/wedding-photography1.png';
import bike from '../images/mountain-bike1.png'; */
//import star from '../images/Star1.png';

const Cards = (props) => {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="cards">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.item.coverImg} alt=""
            className='c-image'/>
            <div className="star">
              <img src="images/Star1.png" alt="" className='c-star'/>
                <span>{props.item.stats.rating}</span>
                <span className='gray'>{props.item.stats.reviewCount}</span>
                <span className='gray'>{props.item.location}</span>
            </div>
                <p className="card--title">{props.item.title}</p>
                <p className="card--price"> <span className="bold"> From ${props.item.price}/person</span></p>
         
        </div>
     );
}
 
export default Cards;