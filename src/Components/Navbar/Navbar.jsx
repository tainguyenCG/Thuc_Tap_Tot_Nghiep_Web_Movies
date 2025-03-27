import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import bell_icon from "../../assets/bell_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { Popover } from "antd";
import { Button, Modal } from "antd";
import Search from "antd/es/input/Search";
const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    navigate("/login");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const bell_content = (
    <div>
      <p>Bạn chưa có thông báo nào</p>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        // Đảm bảo navRef.current không phải là null
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt=""
        />
        <ul>
          <li>
            <Link to="/movies" className="custom_link">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/tvshows" className="custom_link">
              TV Shows
            </Link>
          </li>
          <li>
            <Link to="/news" className="custom_link">
              New & Popular
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Search placeholder="Movie search" enterButton />
        <p>Intern</p>
        <Popover content={bell_content} title="">
          <img src={bell_icon} alt="" className="icon" />
        </Popover>
        <div className="navbar-profile">
          <Button type="primary" onClick={showModal}>
            <FaSignOutAlt className="SignOut-icon" />
          </Button>
          <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Confirm logout?</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
