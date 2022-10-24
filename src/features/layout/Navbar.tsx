import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import { FC } from 'react';
import { DarkThemeToggle } from './DarkThemeToggle';

export const Navbar: FC = () => {
  return (
    <div className="px-6 navbar justify-between">
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
          <li className="flex items-center">
            <DarkThemeToggle className="form-control hover:bg-transparent" />
          </li>
          <li>
            <button className="p-2 rounded-full">
              <ArrowRightOnRectangleIcon className="w-6 h-6" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
