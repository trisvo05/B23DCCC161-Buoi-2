import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <ul className="sidebar__list">
      <li>
        <Link to="/huongdan" className="li">
          Hướng dẫn
        </Link>
      </li>
      <li>
        <Link to="/" className="li">
          Quản lý hàng hóa
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
