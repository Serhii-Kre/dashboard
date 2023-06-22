import './App.scss';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard, { loader as reportsLoader } from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import TableList from './pages/TableList'
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error'
import LoadProvider from './store/LoadProvider';
import AuthPage, { action as authAction} from './pages/AuthPage'
import { tokenLoader } from './util/auth.js'
import { checkAuthLoader } from './util/auth.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
    {
       index: true, 
       element: <Dashboard />, 
       loader: reportsLoader,
    },
    {
      path: 'auth',
      element: <AuthPage />,
      action: authAction
    },
    {
       path: 'user', 
       element: <UserProfile />,
       loader: checkAuthLoader
    },
    {
      path: 'list', element: <TableList />
    }
    ]
  }  
])

function App() {
  const [loaded, setLoaded] = useState(null);
  useEffect(() => {
    setLoaded(true)
  }, [loaded]);

  return (
    <LoadProvider loaded={loaded}>
      <RouterProvider router={router} />
    </LoadProvider>
    
  );
}

export default App;
