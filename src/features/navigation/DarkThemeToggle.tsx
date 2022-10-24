import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FC,
  useEffect,
  useState,
} from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { themeChange } from 'theme-change';

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const DarkThemeToggle: FC<Props> = (props) => {
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  const local = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState((local ?? system) === 'dark');

  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    const htmlTheme = document.documentElement.getAttribute('data-theme');
    htmlTheme && localStorage.setItem('theme', htmlTheme);
  }, [isDarkMode]);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(e.currentTarget.checked);
  };

  return (
    <div {...props}>
      <label className="label cursor-pointer gap-2">
        <SunIcon className="w-6 h-6" />
        <input
          type="checkbox"
          className="toggle"
          onChange={handleToggle}
          checked={isDarkMode}
        />
        <MoonIcon className="w-6 h-6" />
      </label>
    </div>
  );
};
