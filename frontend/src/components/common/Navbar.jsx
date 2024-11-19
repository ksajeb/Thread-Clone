import {
  CircleUserRound,
  FilePenLine,
  Heart,
  House,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex max-w-full items-center justify-around ">
      <Link to={"/"}>
        <House className="size-8 " />
      </Link>
      <Link to={"/search"}>
        <Search className="size-8" />
      </Link>

      <FilePenLine className="size-8" />
      <Heart className="size-8" />
      <CircleUserRound className="size-8" />
    </div>
  );
};

export default Navbar;
