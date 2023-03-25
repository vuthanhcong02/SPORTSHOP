import Home from '../pages/Home/Home';
import routeConfig from '../config/routes';
import Product from '../pages/Product/Product';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Cart from '../pages/Cart/Cart';
import InforProduct from '../Layouts/components/InforProduct/InforProduct';
const publicRouter = [
    { path: routeConfig.home, component: Home ,layout:DefaultLayout},
    { path: routeConfig.product, component: Product },
    { path: routeConfig.about, component: About },
    { path: routeConfig.contact, component: Contact },
    { path: routeConfig.cart, component: Cart},
    { path: routeConfig.inforProduct, component: InforProduct},
];
const privateRouter = [];
export { publicRouter, privateRouter };
