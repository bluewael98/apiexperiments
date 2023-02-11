import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import landinglogo from "../assets/landinglogo.png";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-white" : ""
      } hover:text-white transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage
    ? "transition duration-500"
    : "bg-neoyellow transition duration-500";

  return (
    <nav className={`${navbarBackground} z-40 w-full top-80 pt-4 h-[80px]`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img src={landinglogo} alt="logo" className="w-[80px] m-0 p-0" />
        <div className="flex justify-between gap-16 font-Oswald text-sm font-semibold">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Market Prices"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="News"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
