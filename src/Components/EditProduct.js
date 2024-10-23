import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = ({ products, onUpdate }) => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    const productToEdit = products.find((p) => p.id === Number(id));
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [id, products]);

  const handleUpdate = () => {
    onUpdate(product);
    navigate('/');
  };

  return (
    <div>
      <h2>Sửa sản phẩm</h2>
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
      <button onClick={handleUpdate}>Cập nhật sản phẩm</button>
    </div>
  );
};

export default EditProduct;
