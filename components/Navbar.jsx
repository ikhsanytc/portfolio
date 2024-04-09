"use client";
import feather from "feather-icons";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const sidebar = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    if (sidebar.current) {
      setSidebarOpen(!sidebarOpen);
    }
  };
  useEffect(() => {
    function clickOutside(e) {
      if (sidebar.current && !sidebar.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);
  const links = [
    {
      link: "#home",
      display: "Home",
    },
    {
      link: "#about",
      display: "About",
    },
    {
      link: "#projects",
      display: "Projects",
    },
    {
      link: "#contact",
      display: "Contact",
    },
  ];
  return (
    <>
      <div className="bg-gray-950 bg-opacity-85 backdrop-filter backdrop-blur-2xl p-4 fixed w-full shadow-xl flex justify-between items-center z-40">
        <h1 className="text-xl font-bold">IkhsanYtc</h1>
        <div
          dangerouslySetInnerHTML={{ __html: feather.icons.menu.toSvg() }}
          className="cursor-pointer active:bg-gray-800 hover:bg-gray-700 p-2 rounded-md transition duration-200 sm:hidden"
          onClick={() => toggleSidebar()}
        ></div>
        <div className="hidden md:flex gap-9">
          {links.map((link, idx) => (
            <a
              href={link?.link}
              key={idx}
              className="hover:font-semibold hover:border-b-2"
            >
              {link?.display}
            </a>
          ))}
        </div>
      </div>
      <div
        className={`fixed inset-y-0 right-0 bg-gray-900 text-white py-4 px-3 transition-all ease-in-out duration-300 z-50 backdrop-filter backdrop-blur-lg bg-opacity-90 ${
          sidebarOpen ? "w-64" : "w-0 opacity-0"
        }`}
        ref={sidebar}
      >
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.link}
            className="block text-white hover:bg-gray-700 active:bg-gray-600 rounded-lg px-3 py-2"
            onClick={() => toggleSidebar()}
          >
            {link.display}
          </a>
        ))}
      </div>
      {/* <div className="p-10"></div> */}
    </>
  );
};

export default Navbar;
