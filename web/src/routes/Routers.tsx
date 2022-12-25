import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from '../pages/FormCadastro'
import Login from '../pages/FormLogin'
import Home from '../pages/Home'
import { Feed } from '../pages/feed/Feed'
import { ProtectedLayout } from '../components/ProtectedLayout';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Feed' element={
                    <ProtectedLayout>
                        <Feed />
                    </ProtectedLayout>
                }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;