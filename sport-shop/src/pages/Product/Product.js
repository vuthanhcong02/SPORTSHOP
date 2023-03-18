import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import ProductList from './ProductList/ProductList';
import { useContext } from 'react';
import { CartContext } from '../../Layouts/DefaultLayout/DefaultLayout';
import ProductOption from './ProductOption/ProductOption';
const products = [
    {
        id: 1,
        price: 50000000,
        image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1373211-001-2_360x.jpg?v=1677218097',
        name: 'Áo Thun Nam Under Armour Streaker Topo',
        decription:
            'Những quãng đường dài và khả năng tăng tốc trong sự thoải mái đáng kinh ngạc. Đô co giãn hoàn hảo, cảm giác nhẹ nhàng là những gì mà bạn sẽ cảm nhận được với UA Streaker.',
    },
    {
        id: 2,
        price: 20000000,
        image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1373408-408-2_360x.jpg?v=1677218121',
        name: 'Áo Khoác Nam Under Armour Storm Daytona Vest',
        decription:
            'Chỉ có tập luyện thường xuyên mới giúp bạn cải thiện khả năng chơi golf, ngay cả khi trong thời tiết nắng nóng hoặc mưa tuyết. Áo khoác Under Armour là trang phục cần thiết mà bạn phải sở hữu trong tủ quần áo golf của mình, là người bạn lý tưởng đồng hành và hỗ trợ bạn trong mọi buổi tập luyện.',
    },
    {
        id: 3,
        price: 40000000,
        image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1373041-001-2_360x.jpg?v=1677218065',
        name: 'Quần Ngắn Nữ Under Armour Play Up 3.0 Mesh',
        decription:
            'Quần short là trang phục không thể thiếu trong tủ quần áo của mỗi người. Với túi bên hông và dây đai lưng quần mềm mại, mịn màng – đây là sự lựa chọn lý tưởng cho những buổi tập của bạn.',
    },
    {
        id: 4,
        price: 40000000,
        image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3025605-600-1_1024x1024@2x.jpg?v=1673419031',
        name: 'GIÀY BÓNG RỔ NAM UNDER ARMOUR HOVR HAVOC 5 CLONE',
        decription:
            'Havoc 5 Clone sở hữu đệm UA HOVR™ mang lại năng lượng cho bạn mỗi khi bạn di chuyển. Điều đó có nghĩa là mọi lần chạy và mọi lần nghỉ ngơi đều sẽ nhanh hơn và bùng nổ hơn. Đồng thời, Under Armour còn có công nghệ UA Clone giúp tạo khuôn cho bàn chân của bạn để có độ vừa vặn 1:1 thực sự.',
    },
    {
        id: 5,
        price: 40000000,
        image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/W1080O12-1_540x.jpg?v=1665479853',
        name: 'GIÀY CHẠY BỘ NỮ NEW BALANCE FRESH FOAM X 1080V12 ',
        decription:
            'Nếu chỉ sản xuất một loại giày chạy bộ, chắc chắn đó sẽ là dòng 1080. Điều làm nên sự độc đáo của 1080 không chỉ là đôi giày chạy bộ tốt nhất mà New Balance đã tạo ra, mà nó còn có tính linh hoạt hoàn hảo. 1080 mang đến hiệu suất đỉnh cao cho mọi vận động viên chạy, dù bạn đang luyện tập cho cuộc thi đẳng cấp thế giới hay chỉ là bắt một chuyến tàu vào giờ cao điểm.',
    },
    {
        id: 6,
        price: 40000000,
        image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1373041-001-2_360x.jpg?v=1677218065',
        name: 'KHẢ NĂNG HOÀN TRẢ NĂNG LƯỢNG TẠI MŨI GIÀY TĂNG 4% SO VỚI ULTRABOOST 21 VỚI ĐỘ ÔM CẢI THIỆN 360° CHO BÀN CHÂN NỮ GIỚI',
        decription:
            '',
    },
    {
        id: 7,
        price: 40000000,
        image: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/GX6666-1_1024x1024@2x.jpg?v=1666605818',
        name: 'Quần Ngắn Nữ Under Armour Play Up 3.0 Mesh',
        decription:
            'Quần short là trang phục không thể thiếu trong tủ quần áo của mỗi người. Với túi bên hông và dây đai lưng quần mềm mại, mịn màng – đây là sự lựa chọn lý tưởng cho những buổi tập của bạn.',
    },
];

function Product() {
    const { addToCart,cartItems } = useContext(CartContext);
    function handleAdd(product) {
        addToCart(product);
      }
    return (
            <div className=" wrapper container mt-3">
                <div className="row">
                    <ProductOption/>
                    <div className="col-8 p-3 m-1">
                        <div className="d-flex justify-content-between">
                            <span className="fs-5 fw-bold">Hiện thị sản phẩm</span>
                            <div className="btn-search">
                                <input className="search" type="text" placeholder="Tìm kiếm..." />
                                <FontAwesomeIcon className="searchicon" icon={faSearch} />
                            </div>
                        </div>
                        <div className="hr mt-3"></div>
                        <ProductList products={products} handleAdd={handleAdd} cartItems={cartItems} />
                    </div>
                </div>
            </div>
    );
}

export default Product;
