import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Guide",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Log In",
      href: "#",
    },
  ];
  return (
    <div className='navbar-root'>
      <div className='logo'>Fintech</div>
      <div className="links">
        {links.map((link, idx) => (
          <a className='link-items' key={link.title} href={link.href}>
            {link.title}
          </a>
        ))}

        <button className="btn">Start free trail</button>
      </div>
    </div>
  );
};

export default Navbar;
