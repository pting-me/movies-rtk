import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export const NavLayout: FC = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300 justify-between">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none lg:block">
            <ul className="menu menu-horizontal items-center">
              <li>
                <button>Search</button>
              </li>
              <li className="flex items-center">
                <label className="label cursor-pointer">
                  <SunIcon className="w-6 h-6 p-0" />

                  <input type="checkbox" className="toggle" />
                  <MoonIcon className="w-6 h-6 p-0" />
                </label>
              </li>
              <li>
                <button>Login</button>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li className="menu-title">
            <span>Discover</span>
          </li>
          <li>
            <Link to={`/movie/catalog/popular`}>Popular</Link>
          </li>
          <li>
            <Link to={`/movie/catalog/top_rated`}>Top Rated</Link>
          </li>
          <li>
            <Link to={`/movie/catalog/upcoming`}>Upcoming</Link>
          </li>
          <li className="menu-title">
            <span>Genres</span>
          </li>
          <li>
            <a>TBD</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
