import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    // create semantic header tag
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      {/* create a nav container */}
      <nav className="flex w-full screen-max-width">
        {/* the apple logo */}
        <img src={appleImg} alt="Apple" width={14} height={18} />

        {/* all of the nav items will dynamically rendered here */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => (
            <div key={i} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">{nav}</div>
          ))}
        </div>

        {/* search image */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search" width={18} height={18} />
            {/* bag image */}
            <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
