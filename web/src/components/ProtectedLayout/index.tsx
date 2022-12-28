import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import "./protectedlayout.css"
export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (!auth.token) {
    return (
      <div>
        <h2>Ops... Algo deu errado!</h2>
        <div id='bgprotected'>
          <h1>Faça login para continuar</h1>
          <h3 id='loginprotected'><Link to='/Login'>Login</Link></h3>
        </div>
      </div>
    );
  }
  return children;
}
