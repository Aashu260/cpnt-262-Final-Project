import { Link } from "react-router-dom";
import { book1 } from "../assets";

function Nav() {
  return (
    <div>
      <nav className="bg-amber-100 dark:bg-violet-300 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={book1} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-bg-amber-950 dark:text-white">
              Book Charm
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-6 rtl:space-x-reverse">
            <Link to="/login">
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-amber-950 text-center border border-amber-950 rounded-full hover:bg-amber-950 hover:text-white hover:text-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-amber-950 text-center border border-amber-950 rounded-full hover:bg-amber-950 hover:text-white hover:text-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Sign Up
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-amber-200 focus:outline-none focus:ring-2 focus:bg-amber-200 dark:bg-amber-200 dark:hover:bg-amber-200 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-cols p-4 md:p-0 mt-4 font-semibold md:space-x-8 rtl:space-x-reverse md-flex-row md:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-bg-amber-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:hover:text-lg md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-bg-amber-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:hover:text-lg md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="block py-2 px-3 text-bg-amber-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:hover:text-lg md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="block py-2 px-3 text-bg-amber-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:hover:text-lg md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
