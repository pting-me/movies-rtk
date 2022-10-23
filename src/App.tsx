import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateList, EditList, Lists } from './features/list';
import { MovieDetails, Movies } from './features/movie';
import { NavLayout } from './features/navigation';
import { PersonDetails } from './features/person';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Movies />,
  },
  {
    path: '/movie',
    element: <MovieDetails />,
  },
  {
    path: '/person',
    element: <PersonDetails />,
  },
  {
    path: '/list',
    element: <Lists />,
  },
  {
    path: '/list/create',
    element: <CreateList />,
  },
  {
    path: '/list/edit',
    element: <EditList />,
  },
]);

const App: FC = () => {
  return (
    <NavLayout>
      <RouterProvider router={router} />
    </NavLayout>
  );
};

export default App;
