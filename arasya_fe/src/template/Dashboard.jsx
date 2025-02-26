import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import ModalProfile from './ModalProfile';
import logo from '../images/logongopi.png';
import { Link, useNavigate } from 'react-router-dom';
import profilee from '../images/profilekopih.png';

const Dashboard = ({ children, page }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect ke halaman login jika tidak ada token
    }
  }, [navigate]);

  const [decode, setDecode] = useState('');
  useEffect(() => {
    const data = localStorage.getItem('token');
    data ? setDecode(jwtDecode(data)) : <></>;
  }, []);

  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  const list = [
    { nama: 'Daftar Menu', ic: '', link: '/menu' },
    { nama: 'Data Pembeli', ic: '', link: '/pembeli' },
    // { nama: 'Data Admin', ic: '', link: '/admin' },
    { nama: 'Transaksi', ic: 'z', link: '/transaksi' },
    { nama: 'LogOut', ic: 'z', link: '/' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <>
        <ModalProfile profile={profile} decode={decode} setProfile={setProfile} />
        <nav className="bg-gradient-to-r from-amber-700 to-amber-800 fixed w-full z-20 top-0 start-0 border-b border-amber-600 shadow-lg">
          <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 py-3">
            <a
              href="https://flowbite.com/"
              className="items-end hidden md:flex space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-10" alt="Flowbite Logo" />
              <span className="self-center text-3xl whitespace-nowrap text-amber-50 font-semibold">
                Kintamani Coffee
              </span>
            </a>
            <button
              onClick={() => setProfile(true)}
              type="button"
              className="flex cursor-pointer text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium p-0.5 text-center rounded-full transition-colors shadow-sm"
            >
              <img src={profilee} className="w-10 h-10 rounded-full" alt="Profile" />
            </button>
            <div className="flex md:hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={() => setOpen(!open)}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-amber-50 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-10 w-64 h-screen bg-gradient-to-b from-amber-700 to-amber-800 transition-transform ${
            open ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0 shadow-xl`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 mt-2 py-4 overflow-y-auto pt-20 border-r-2 border-amber-600">
            <ul className="space-y-3 font-medium">
              {list.map((e, i) => (
                <li key={i}>
                  <Link to={e.link}>
                    <span
                      className={`flex items-center p-2 rounded-lg ${
                        page === e.link
                          ? 'bg-amber-600 text-white shadow-md'
                          : 'text-amber-100 hover:bg-amber-600 hover:text-white'
                      } transition-all duration-300`}
                    >
                      <svg
                        className={`w-5 h-5 transition duration-75 ${
                          page === e.link ? 'text-white' : 'text-amber-200'
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 21"
                      >
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                      </svg>
                      <span className="ms-3">{e.nama}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64 mt-20 px-6">
          <div className="p-4 border-2 border-amber-200 rounded-lg bg-white shadow-sm">
            {children}
          </div>
        </div>
      </>
    </div>
  );
};

export default Dashboard;