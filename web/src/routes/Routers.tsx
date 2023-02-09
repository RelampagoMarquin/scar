import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from '../pages/FormCadastro'
import Login from '../pages/FormLogin'
import Home from '../pages/Home'
import { Feed } from '../pages/Feed'
import { ProtectedLayout } from '../components/ProtectedLayout/protectedLayout';
import RespostaCampo from '../pages/pageResposta';
import Sobre from '../pages/about';
import { Ajuda } from '../pages/help';
import Redes from '../pages/redes';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Sobre' element={<Sobre />} />
                <Route path='/Ajuda' element={<Ajuda />} />
                <Route path='/Redes' element={<Redes />} />

                <Route path='/Feed' element={
                    <ProtectedLayout>
                        <Feed />
                    </ProtectedLayout>
                }
                />
                <Route path='/question/:id' element={
                    <ProtectedLayout>
                        <RespostaCampo />
                    </ProtectedLayout>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;