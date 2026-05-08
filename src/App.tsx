import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import './index.css'

import Layout from './pages/Layout'
import PrimeiraVez from './pages/PrimeiraVez'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import AeronaveMenu from './pages/aeronaves/index'
import { CadastrarAeronave, ListarAeronaves, DetalhesAeronave } from './pages/aeronaves/pages'

import { PecasMenu, CadastrarPeca, ListarPecas, AtualizarPeca } from './pages/pecas/pages'

import { EtapasMenu, CadastrarEtapa, IniciarEtapa, FinalizarEtapa, AssociarFuncionario } from './pages/etapas/pages'

import { FuncionariosMenu, CadastrarFuncionario } from './pages/funcionarios/pages'

import { TestesMenu, RegistrarTeste, ListarTestes } from './pages/testes/pages'
import Relatorio from './pages/testes/Relatorio'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
                    <Route path="/" element={<Navigate to="/setup" replace />} />
          <Route path="/setup" element={<PrimeiraVez />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<Layout />}>
            <Route index element={<Navigate to="/app/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="aeronaves" element={<AeronaveMenu />} />
            <Route path="aeronaves/cadastrar" element={<CadastrarAeronave />} />
            <Route path="aeronaves/listar" element={<ListarAeronaves />} />
            <Route path="aeronaves/detalhes" element={<DetalhesAeronave />} />

            <Route path="pecas" element={<PecasMenu />} />
            <Route path="pecas/cadastrar" element={<CadastrarPeca />} />
            <Route path="pecas/listar" element={<ListarPecas />} />
            <Route path="pecas/atualizar" element={<AtualizarPeca />} />

            <Route path="etapas" element={<EtapasMenu />} />
            <Route path="etapas/cadastrar" element={<CadastrarEtapa />} />
            <Route path="etapas/iniciar" element={<IniciarEtapa />} />
            <Route path="etapas/finalizar" element={<FinalizarEtapa />} />
            <Route path="etapas/associar" element={<AssociarFuncionario />} />

            <Route path="funcionarios" element={<FuncionariosMenu />} />
            <Route path="funcionarios/cadastrar" element={<CadastrarFuncionario />} />

            <Route path="testes" element={<TestesMenu />} />
            <Route path="testes/registrar" element={<RegistrarTeste />} />
            <Route path="testes/listar" element={<ListarTestes />} />

            <Route path="relatorio" element={<Relatorio />} />
          </Route>
                    <Route path="dashboard" element={<Navigate to="/app/dashboard" replace />} />
          <Route path="aeronaves/*" element={<Navigate to="/app/aeronaves" replace />} />
          <Route path="pecas/*" element={<Navigate to="/app/pecas" replace />} />
          <Route path="etapas/*" element={<Navigate to="/app/etapas" replace />} />
          <Route path="funcionarios/*" element={<Navigate to="/app/funcionarios" replace />} />
          <Route path="testes/*" element={<Navigate to="/app/testes" replace />} />
          <Route path="relatorio" element={<Navigate to="/app/relatorio" replace />} />
          <Route path="*" element={<Navigate to="/setup" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
