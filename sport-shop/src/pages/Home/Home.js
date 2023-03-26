import Carousel from '../../components/Carousel/Carousel';
import './Home.css';
import { useState } from 'react';
import Card from '../../Layouts/components/Card/Card';
import Mockdata from '../../Layouts/components/MockDataProduct/Mockdata';

const navtab = [
    {
        id: 1,
        tab: 'Sản phẩm mới',
    },
    {
        id: 2,
        tab: 'Sản phẩm bán chạy',
    },
    {
        id: 3,
        tab: 'Tất cả sản phẩm',
    },
];
function Home() {
    const [activeTab, setActiveTab] = useState(navtab[0].tab);
    console.log(activeTab);
    return (
        <div className="">
            <Carousel />
            <div className="p2 mt-4">
                <ul className="nav justify-content-center">
                    {navtab.map((nav) => (
                        <li className="" key={nav.id}>
                            <button
                                className="tab"
                                style={
                                    activeTab === nav.tab
                                        ? {
                                              border: 'none',
                                              outline: 'none',
                                              color: 'crimson',
                                              borderBottom: '3px solid crimson',
                                          }
                                        : {}
                                }
                                onClick={() => setActiveTab(nav.tab)}
                            >
                                {nav.tab}
                            </button>
                        </li>
                    ))}
                </ul>
                {activeTab === navtab[0].tab && (
                    <div className="container p-3">
                        <div className=" p-2">
                        <div className="timkiem d-flex justify-content-end align-items-center">
                            <input type='text' placeholder="Tìm kiếm ...."/>
                            <button className="">Tìm kiếm</button>
                         </div>
                        </div>
                       <div className="display">
                            {Mockdata.slice(0,8).map((product) => (
                               <Card key={product.id} product={product}/>
                            ))}
                       </div >
                    </div>
                )}
                {activeTab === navtab[1].tab && 
                <div className="container p-3">
                    <div className=" p-2">
                        <div className="timkiem d-flex justify-content-end align-items-center">
                            <input type='text' placeholder="Tìm kiếm ...."/>
                            <button className="">Tìm kiếm</button>
                         </div>
                    </div>
                    <div className="display">
                            {Mockdata.slice(0,4).map((product) => (
                               <Card key={product.id} product={product}/>
                            ))}
                       </div >
                </div>
                }
                {activeTab === navtab[2].tab && 
                <div className="container p-3">
                     <div className=" p-2">
                        <div className="timkiem d-flex justify-content-end align-items-center">
                            <input type='text' placeholder="Tìm kiếm ...."/>
                            <button className="">Tìm kiếm</button>
                         </div>
                    </div>
                    <div className="display">
                            {Mockdata.map((product) => (
                               <Card key={product.id} product={product}/>
                            ))}
                       </div >
                </div>}
            </div>
        </div>
    );
}

export default Home;
