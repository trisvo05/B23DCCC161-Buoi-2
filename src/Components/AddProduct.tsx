import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AddProduct.css';

interface Product {
  id?: number; // id có thể không có khi thêm mới
  name: string;
  price: number;
}

interface AddProductProps {
  onAdd: (newProduct: Product) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ onAdd }) => {
  const [product, setProduct] = useState<Product>({ name: '', price: 0 });
  const navigate = useNavigate();

  const handleAdd = () => {
    if (product.name.trim() && product.price > 0) {
      onAdd(product);
      navigate('/'); // Điều hướng về trang danh sách sản phẩm
    } else {
      alert('Vui lòng nhập đầy đủ thông tin sản phẩm!');
    }
  };

  return (
    <div className='add-product-container'>
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
        onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
      />
      <button onClick={handleAdd}>Thêm sản phẩm</button>
    </div>
  );
};

export default AddProduct;
