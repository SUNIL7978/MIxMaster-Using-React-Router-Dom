import {
  About,
  Cocktail,
  HomeLayout,
  Landing,
  NewsLetter,
  Error,
  SinglePageError,
} from './Pages';

import { QueryClient, QueryClientProvider } from 'react-query';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as landingLoader } from './Pages/Landing';
import { loader as singleLandingLoader } from './Pages/Cocktail';
import { action as newsLetterAction } from './Pages/NewsLetter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        index: true,
        loader: landingLoader,
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'cocktails/:id',
        loader: singleLandingLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'newslatter',
        action: newsLetterAction,
        element: <NewsLetter />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
