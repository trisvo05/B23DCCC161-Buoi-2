import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/AddProduct.css'
interface Product {
  id: number;
  name: string;
  price: number;
}

interface EditProductProps {
  products: Product[];
  onUpdate: (updatedProduct: Product) => void;
}

const EditProduct: React.FC<EditProductProps> = ({ products, onUpdate }) => {
  const { id } = useParams<{ id: string }>(); // id từ URL là chuỗi
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null); // Có thể null nếu không tìm thấy sản phẩm

  useEffect(() => {
    const productToEdit = products.find((p) => p.id === Number(id));
    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [id, products]);

  const handleUpdate = () => {
    if (product) {
      onUpdate(product);
      navigate('/');
    }
  };

  if (!product) {
    return <p>Không tìm thấy sản phẩm.</p>; // Hiển thị thông báo nếu không tìm thấy sản phẩm
  }

  return (
    <div className='add-product-container'>
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
        onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
      />
      <button onClick={handleUpdate}>Cập nhật sản phẩm</button>
    </div>
  );
};

export default EditProduct;
