import Header from './Components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Shop from './Components/Shop/Shop';
import Order from './Components/OrderReview/Order';
import Inventory from './Components/Inventory/Inventory';
import ProductDetails from './Components/ProductDetails/ProductDetails';


function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Shop />}></Route>
            <Route path="shop" element={<Shop />}></Route>
            <Route path='review' element={<Order />}></Route>
            <Route path='inventory' element={<Inventory />}></Route>
            <Route path='products/:productKey' element={<ProductDetails />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
