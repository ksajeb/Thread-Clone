import { Menu } from "lucide-react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex h-40 items-center justify-around  top-0 sticky py-1">
      <img src="threadlogo2.png" alt="logo" className="w-28 h-20  rounded-xl" />
      <div className="justify-center w-[550px] bg-blue-200 z-10 h-16">
        <Navbar />
      </div>
      <Menu className="size-8" />
    </div>
  );
};

export default Header;
