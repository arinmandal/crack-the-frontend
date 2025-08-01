import React from "react";

const Navbar = () => {
  const lists = [
    {
      title: "Founders",
      href: "#",
    },
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
    <nav className='flex justify-between items-center px-2'>
      <div className='logo'>
        <img src='/logo.svg' alt='logo' className='cursor-pointer' />
      </div>

      <div className='nav-lists flex justify-center items-center gap-6'>
        {lists.map(links => (
          <a
            href={links.href}
            key={links.title}
            className='font-semibold
              text-sm
              text-neutral-900
              hover:text-neutral-600 transition duration-200'
          >
            {links.title}
          </a>
        ))}

        <div className='nav-btn'>
          <button className='bg-[#2679F3] hover:bg-[#2262C7] text-sm text-white font-semibold rounded-md px-4 py-2 cursor-pointer shadow-lg text-shadow-md tracking-wide'>
            Start free trial
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
