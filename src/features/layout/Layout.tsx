import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const Layout: FC = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="layout-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="top-0 max-lg:sticky max-lg:drop-shadow max-lg:bg-base-200 max-lg:z-50">
          <Navbar />
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="layout-sidebar" className="drawer-overlay"></label>
        {/* Added lg:bg-base-100 */}
        {/* Seems to be an issue with Daisy UI where the background color bleeds into the mobile background */}
        <div className="overflow-y-auto w-64 text-base-content bg-base-200 lg:bg-base-100 lg:border-r">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
