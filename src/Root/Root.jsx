import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <div
      className="lg:max-w-[1800px] mx-auto "
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
