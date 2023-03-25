import './Card.css'
import {Link} from 'react-router-dom'
import routeConfig from '../../../config/routes';
function Card({image,price,name}) {
    return ( 
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title">{name}</h6>
                <p className="card-text">
                {price}
                </p>
                <Link to={routeConfig.inforProduct} className="btn btn-outline-danger">
                    Xem thêm
                </Link>
            </div>
        </div>
    );
}

export default Card;