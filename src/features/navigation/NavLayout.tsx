import { FC, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  ArrowRightOnRectangleIcon,
  MoonIcon,
  SunIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import { themeChange } from 'theme-change';

export const NavLayout: FC = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar shadow justify-between">
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
            <ul className="menu menu-horizontal items-center gap-2">
              <li>
                <button className="p-2 rounded-full">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </button>
              </li>
              {/* TODO: make this real toggle */}
              <li className="flex items-center">
                <button
                  className="p-2 rounded-full"
                  data-set-theme="light"
                  data-act-class="active"
                >
                  <SunIcon className="w-6 h-6" />
                </button>
              </li>
              <li>
                <button
                  className="p-2 rounded-full"
                  data-set-theme="dark"
                  data-act-class="active"
                >
                  <MoonIcon className="w-6 h-6" />
                </button>
              </li>
              <li>
                <button className="p-2 rounded-full">
                  <ArrowRightOnRectangleIcon className="w-6 h-6" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side shadow">
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
