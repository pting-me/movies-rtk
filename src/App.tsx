import { FC } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { CreateList, EditList, Lists } from './features/list';
import { MovieDetails, Catalog } from './features/movie';
import { NavLayout } from './features/navigation';
import { PersonDetails } from './features/person';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Navigate to="/catalog" />} />
      <Route path="catalog">
        <Route index element={<Navigate to="popular" />} />
        <Route path=":category">
          <Route index element={<Navigate to="1" />} />
          <Route path=":page" element={<Catalog />} />
        </Route>
      </Route>
      <Route path="movie/:movieId" element={<MovieDetails />}></Route>
      <Route path="person/:personId" element={<PersonDetails />}></Route>
      <Route path="list" element={<Lists />}>
        <Route path="create" element={<CreateList />} />
        <Route path="edit/:listId" element={<EditList />} />
      </Route>
    </Route>
  )
);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
