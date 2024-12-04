import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Styles/Quanly.css';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface QuanlyhanghoaProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Quanlyhanghoa: React.FC<QuanlyhanghoaProps> = ({ products, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // State lưu giá trị tìm kiếm
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigate = useNavigate();
  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Tính tổng giá trị sản phẩm
  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => total + product.price, 0);
  }, [products]);

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

  const handleDeleteProduct = (productId: number) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirmDelete) {
      setProducts(products.filter(product => product.id !== productId));
    }
  };

  return (
    <div className="container">
      <h1>Quản lý hàng hóa</h1>
      <div className="top">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="button_add" onClick={() => navigate('/add')}>
          Thêm sản phẩm
        </button>
      </div>

      {/* Hiển thị tổng giá trị sản phẩm trong bảng */}
      <table className="product-table">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá (VND)</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price} VND</td>
              <td>
                <button className="button_edit" onClick={() => navigate(`/edit/${product.id}`)}>
                  Sửa
                </button>
                <button className="button_delete" onClick={() => handleDeleteProduct(product.id)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Tổng giá trị sản phẩm */}
      <div className="total-price">
        <h3>Tổng giá trị hàng hóa: {totalPrice} VND</h3>
      </div>

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
