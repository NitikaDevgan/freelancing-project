import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-orange-500">SHREE SHYAM</span> WELDING WORKS
        </h1>

        <div className="hidden md:flex gap-8 font-medium text-gray-300">
          <a href="#home" className="hover:text-orange-500 transition">Home</a>
          <a href="#services" className="hover:text-orange-500 transition">Services</a>
          <a href="#gallery" className="hover:text-orange-500 transition">Gallery</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>

        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-4 space-y-4 text-gray-300">
          <a href="#home" className="block">Home</a>
          <a href="#services" className="block">Services</a>
          <a href="#gallery" className="block">Gallery</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
