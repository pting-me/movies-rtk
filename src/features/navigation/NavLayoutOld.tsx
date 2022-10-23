import clsx from 'clsx';
import { FC, PropsWithChildren, useState } from 'react';
import { NavBar } from './NavBar';
import { NavDrawer } from './NavDrawer';

interface Props extends PropsWithChildren {}

export const NavLayout: FC<Props> = (props: Props) => {
  const { children } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={clsx(
          'max-lg:absolute max-lg:shadow lg:border-r min-h-screen w-64 z-20 bg-white -left-64',
          { 'left-0': isDrawerOpen }
        )}
      >
        <NavDrawer />
      </div>
      <div className="flex-1">
        <div
          className={clsx(
            'bg-black opacity-50 h-full w-full absolute hidden z-10',
            { 'max-lg:block': isDrawerOpen }
          )}
          onClick={() => setIsDrawerOpen(false)}
        />
        <div className="max-lg:sticky max-lg:shadow top-0 bg-white">
          <NavBar onMenuClick={() => setIsDrawerOpen(true)} />
        </div>
        {children}
      </div>
    </div>
  );
};
