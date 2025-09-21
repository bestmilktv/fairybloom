import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: 'Náhrdelníky',
      path: '/náhrdelníky'
    },
    {
      name: 'Náušnice',
      path: '/náušnice'
    },
    {
      name: 'Prsteny',
      path: '/prsteny'
    },
    {
      name: 'Náramky',
      path: '/náramky'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300" 
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
          >
            <img src={logo} alt="Fairy Bloom Logo" className="h-12 w-12 object-contain" />
            <h1 className="text-3xl font-light text-luxury tracking-[0.2em] font-serif">
              FAIRY BLOOM
            </h1>
          </Link>

          {/* Category Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map(category => (
              <Link 
                key={category.path} 
                to={category.path} 
                className="text-foreground/80 hover:text-gold transition-colors duration-300 font-medium tracking-wide"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Right side - empty for now, can add contact or other static elements */}
          <div className="flex items-center space-x-4">
            {/* Placeholder for future static elements */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;