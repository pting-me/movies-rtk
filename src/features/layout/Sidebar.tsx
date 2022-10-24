import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: FC = () => {
  return (
    <ul className="menu p-4">
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
  );
};
