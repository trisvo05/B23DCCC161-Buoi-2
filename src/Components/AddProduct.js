import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import App from '../App';

const AddProduct = ({ onAdd }) => {
  const [product, setProduct] = useState({ name: '', price: '' });
  const navigate = useNavigate();

  const handleAdd = () => {
    onAdd(product);
    navigate('/'); 
  };

  return (
    <div>
      <h2>Thêm sản phẩm mới</h2>
      <input
        type="text"
        placeholder="Tên sản phẩm"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Giá sản phẩm"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <button onClick={handleAdd}>Thêm sản phẩm</button>
    </div>
  );
};

export default AddProduct
