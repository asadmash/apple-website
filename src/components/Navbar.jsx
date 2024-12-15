import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    // create semantic header tag
    <header>
      {/* create a nav container */}
      <nav>
        {/* the apple logo */}
        <img src={appleImg} alt="Apple" width={14} height={18} />

        {/* all of the nav items will dynamically rendered here */}
        <div>
          {["Phones", "Macbooks", "Tablets"].map((nav, i) => (
            <div key={i}>{nav}</div>
          ))}
        </div>

        {/* search image */}
        <div>
            <img src={searchImg} alt="search" width={18} height={18} />
            {/* bag image */}
            <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
