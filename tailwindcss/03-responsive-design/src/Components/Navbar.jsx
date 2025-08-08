import { useState } from "react";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const [open, isOpen] = useState(false);
  return (
    <div className="relative">
      <div className="shadow-tweet relative mx-auto mt-10 flex max-w-4xl items-center justify-between px-2 py-2 md:rounded-full">
        <img src="twitter.png" alt="logo" height={40} width={40} />

        <div className="mr-10 hidden gap-4 text-sm font-semibold text-slate-400 md:flex">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={index.name}
              className="transition delay-75 hover:text-slate-700"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => {
            isOpen(!open);
          }}
          className="md:hidden"
        >
          <img src="menu.png" alt="menu" height={40} width={40} />
        </button>

        {open && (
          <div className="shadow-tweet absolute top-15 mx-auto max-w-[95%] bg-white md:hidden">
            <div className="flex  flex-col  items-start gap-4 text-sm text-neutral-500  p-4">
              {links.map((link, index) => (
                <a
                  href={link.href}
                  key={index.name}
                  className="transition delay-75 hover:text-slate-700"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
