import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
