
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar';
import Quanlyhanghoa from './Components/Quanlyhanghoa';
import Huongdan from './Components/Huongdan'
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  
  return (
    // <div className="App">
      // <BrowserRouter >
        
      //   <Sidebar /> 
      //   <Routes>
      //     <Route path="/huong_dan" element={<Huongdan />} />
      //     <Route path="/" element={<Quanlyhanghoa products={products} setProducts={setProducts} />}/>
      //     <Route path="/add" element={<AddProduct onAdd={addProduct} />} />
      //     <Route path="/edit/:id"element={<EditProduct products={products} onUpdate={updateProduct} />} />
      //   </Routes>
      // </BrowserRouter> 
    // </div>
    <div className="App">
      <BrowserRouter>
        <div className="layout">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="content">
              <Routes>
                <Route path="/" element={<Quanlyhanghoa products={products} setProducts={setProducts} />} />
                <Route path="/add" element={<AddProduct onAdd={addProduct} />} />
                <Route path="/edit/:id" element={<EditProduct products={products} onUpdate={updateProduct} />} />
                <Route path="/huong_dan" element={<Huongdan />} />
              </Routes>
            </div>
          </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
