import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import routers from './pages/routes/router.tsx'
import "./App.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
   <RouterProvider router={routers} />
)