import './Card.css'
import {Link} from 'react-router-dom'
import routeConfig from '../../../config/routes';
function Card({product}) {

    return ( 
       <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text">
                    {product.price}
                    </p>
                    <Link to={`${routeConfig.inforProduct}/${product.id}`} className="btn btn-outline-danger">
                        Xem thêm
                    </Link>
                </div>
            </div>

       </div>
    );
}

export default Card;