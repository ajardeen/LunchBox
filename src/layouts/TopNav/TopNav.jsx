import  { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

// Nav Links Data
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Dropdown Links Data
const pagesDropdownLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Pricing', href: '/pricing' },
];

function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 h-[100px] bg-transparent w-full relative z-50">
      {/* Logo */}
      <a href="/" className="flex items-center text-xl font-bold text-green-700">
        {/* <span className="mr-2 text-2xl">🌱</span> LunchBox Legends */}
        <img src="./images/logo.png" alt="logoimg" className='w-38' />
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-base font-medium transition duration-150 hover:text-green-600"
          >
            {link.name}
          </a>
        ))}

        {/* Desktop Pages Dropdown */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center gap-1 text-base font-medium hover:text-green-600 focus:outline-none">
              Pages <ChevronDownIcon className="w-4 h-4" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="min-w-[180px] bg-white rounded-md p-1.5 shadow-xl border border-gray-200 z-50 origin-top-right animate-in fade-in-0 zoom-in-95"
              sideOffset={10}
            >
              {pagesDropdownLinks.map((item) => (
                <DropdownMenu.Item
                  key={item.name}
                  className="flex items-center w-full px-3 py-2 text-sm text-gray-700 rounded-md cursor-pointer outline-none transition-colors data-[highlighted]:bg-green-50 data-[highlighted]:text-green-700"
                >
                  <a href={item.href} className="w-full">
                    {item.name}
                  </a>
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Arrow className="fill-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <Cross1Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col md:hidden p-4 space-y-2 z-40">
          {/* Regular links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium py-2 px-2 rounded hover:bg-green-50 hover:text-green-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Pages Dropdown in Mobile */}
          <div className="border-t border-gray-200 pt-2">
            <button
              className="w-full flex items-center justify-between py-2 px-2 text-gray-700 font-medium rounded hover:bg-green-50 hover:text-green-700 focus:outline-none"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Pages
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileDropdownOpen && (
              <div className="pl-4 mt-2 flex flex-col space-y-1">
                {pagesDropdownLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 font-medium py-2 px-2 rounded hover:bg-green-50 hover:text-green-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default TopNav;
