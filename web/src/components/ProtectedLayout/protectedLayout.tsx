import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (!auth.token) {
    return (
      <div className='bg-primary Text-center protected-l'>
        <h2 className='bg-terciary f-padding'>Ops... Algo deu errado!</h2>
        <div className='bg-secondary f-padding'>
          <h1 className='bg-terciary f-padding'>Faça login para continuar</h1>
          <h3 className='bg-green  f-padding'><Link to='/Login' >Login</Link></h3>
        </div>
      </div>
    );
  }
  return children;
}
