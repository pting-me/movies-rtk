import { FC, MouseEventHandler } from 'react';

interface Props {
  onMenuClick: MouseEventHandler<HTMLButtonElement>;
}

export const NavBar: FC<Props> = (props) => {
  const { onMenuClick } = props;
  return (
    <div className="p-4 flex justify-between">
      <div>
        <button className="lg:hidden" onClick={onMenuClick}>
          Menu
        </button>
      </div>
      <div className="flex gap-4">
        <button>Search</button>
        <button>Dark mode</button>
        <button>Login</button>
      </div>
    </div>
  );
};
