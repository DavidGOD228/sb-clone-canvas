import { useEffect, useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./layout/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <div className="h-screen bg-white relative">
      <>
        <Header label="Home" toggleSidebar={toggleSidebar} />
        {children}
        <Footer />
        {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      </>
    </div>
  );
};

export default Layout;
