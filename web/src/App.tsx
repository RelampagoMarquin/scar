import { AuthProvider } from './contexts/AuthProvider'
import RoutesApp from './routes/Routers'


export function App() {

  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}

export default App