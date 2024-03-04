import { ModeToggle } from '@/components/mode-toggle';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="border-b mb-2 lg:mb-4">
      <div className="container px-4 md:px-6">
        <nav className="flex items-center justify-between h-14">
          <a className="flex items-center" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="text-sm font-medium flex-1 text-center">
              Home
            </NavLink>
            <NavLink
              className="text-sm font-medium flex-1 text-center"
              to="/catalog"
            >
              Catalog
            </NavLink>
            <NavLink
              className="text-sm font-medium flex-1 text-center"
              to="/about"
            >
              About
            </NavLink>
            <a className="text-sm font-medium" href="#">
              <ShoppingCartIcon className="h-6 w-6" />
            </a>
            <a className="text-sm font-medium" href="#">
              Sign In
            </a>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
