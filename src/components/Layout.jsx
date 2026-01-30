import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout Component
 * Wrapper component that provides consistent layout structure with Navbar and Footer
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
