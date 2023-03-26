import Image from "next/image";
import logoImage from "../assets/shared/desktop/logo.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Headphones",
    href: "/headphones",
  },
  {
    name: "Speakers",
    href: "/speakers",
  },
  {
    name: "Earphones",
    href: "/earphones",
  },
];

const Navbar = () => {
  const navStyle = {
    width: "100%",
    position: "fixed",
    top: "32px",
    zIndex: "100",
  };

  const containerStyle = {
    maxWidth: "1440px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const navLinkContainerStyle = {
    display: "flex",
    gap: "24px",
    listStyle: "none",
    padding: "0",
    margin: "0",
  };

  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    letterSpacing: "2px",
    fontSize: "13px",
  };

  const dividerStyle = {
    maxWidth: "1440px",
    width: "100%",
    margin: "36px auto 0",
    height: "1px",
    backgroundColor: "#fff",
    opacity: "0.2",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link href="/">
          <Image src={logoImage} alt="logo" />
        </Link>
        <ul style={navLinkContainerStyle}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a style={navLinkStyle} href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="">
          <Image src={cartIcon} alt="cart" />
        </a>
      </div>
      <div style={dividerStyle} />
    </nav>
  );
};

export default Navbar;
