
import '../Styles/Quanly.css'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quanlyhanghoa = ({ products, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State lưu giá trị tìm kiếm
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Lọc sản phẩm dựa trên từ khóa tìm kiếm
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDeleteProduct = (productId) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirmDelete) {
      setProducts(products.filter(product => product.id !== productId));
    }
  };

  return (
    <div className="container">
      <h1>Quản lý hàng hóa</h1>
        <div className='top'>
            <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="search-input"
            />

            <button className="button_add"onClick={() => navigate('/add')}>Thêm sản phẩm</button>
        </div>
      

      <h2>Danh sách sản phẩm</h2>
      <ul>
        {currentProducts.map(product => (
          <li className="grid" key={product.id}>
            <span>{product.name} - {product.price} VND</span>
            <button className="button_edit" onClick={() => navigate(`/edit/${product.id}`)}>Sửa</button>
            <button className="button_delete" onClick={() => handleDeleteProduct(product.id)}>Xóa</button>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Trước
        </button>
        <span>{` Trang ${currentPage} / ${totalPages} `}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Sau
        </button>
      </div>
    </div>
  );
};

export default Quanlyhanghoa;
