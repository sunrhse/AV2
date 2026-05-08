import { createContext, useContext, type ReactNode } from 'react'
import type { AppState, Funcionario, Aeronave, Peca, Etapa, Teste } from '../types'

export const mockState: AppState = {
  primeiraVez: false,
  usuarioLogado: { id: 'F001', nome: 'Ana Silva', telefone: '(11) 99999-1000', endereco: 'Av. Paulista, 1000', usuario: 'admin', senha: '123', nivel: 'adm' },
  funcionarios: [
    { id: 'F001', nome: 'Ana Silva', telefone: '(11) 99999-1000', endereco: 'Av. Paulista, 1000', usuario: 'admin', senha: '123', nivel: 'adm' },
    { id: 'F002', nome: 'Bruno Martins', telefone: '(12) 98888-2200', endereco: 'Rua das Aeronaves, 42', usuario: 'bruno.eng', senha: '123', nivel: 'eng' },
    { id: 'F003', nome: 'Carla Souza', telefone: '(12) 97777-3300', endereco: 'Rua Hangar Azul, 25', usuario: 'carla.op', senha: '123', nivel: 'op' },
  ],
  aeronaves: [
    { codigo: 'AC001', modelo: 'Boeing 737-X', capacidade: 180, alcance: 6500, tipo: 'comercial' },
    { codigo: 'AC002', modelo: 'Airbus A320-N', capacidade: 165, alcance: 6100, tipo: 'comercial' },
    { codigo: 'AC003', modelo: 'Embraer E195', capacidade: 120, alcance: 4800, tipo: 'comercial' },
  ],
  pecas: [
    { nome: 'Motor CFM56', fornecedor: 'CFM International', tipo: 'importada', status: 'pronta' },
    { nome: 'Trem de pouso', fornecedor: 'Embraer', tipo: 'nacional', status: 'em produção' },
    { nome: 'Aileron esquerdo', fornecedor: 'Liebherr', tipo: 'importada', status: 'em transporte' },
  ],
  etapas: [
    { nome: 'Montagem', prazo: '2026-06-01', codigoAero: 'AC001', status: 'em andamento', funcionarios: ['F002', 'F003'] },
    { nome: 'Inspeção', prazo: '2026-06-15', codigoAero: 'AC002', status: 'em andamento', funcionarios: ['F002'] },
    { nome: 'Testes Finais', prazo: '2026-06-30', codigoAero: 'AC003', status: 'pendente', funcionarios: [] },
  ],
  testes: [
    { codigoAero: 'AC001', tipo: 'elétrico', resultado: 'aprovado', data: '2026-05-02' },
    { codigoAero: 'AC002', tipo: 'hidráulico', resultado: 'aprovado', data: '2026-04-28' },
    { codigoAero: 'AC003', tipo: 'aerodinâmico', resultado: 'reprovado', data: '2026-04-22' },
  ],
}

interface AppContextType {
  state: AppState
  criarAdmin: (f: Funcionario) => void
  login: (usuario: string, senha: string) => boolean
  logout: () => void
  addFuncionario: (f: Funcionario) => void
  addAeronave: (a: Aeronave) => void
  addPeca: (p: Peca) => void
  updateStatusPeca: (nome: string, status: Peca['status']) => void
  addEtapa: (e: Etapa) => void
  updateEtapa: (codigoAero: string, nome: string, updates: Partial<Etapa>) => void
  associarFuncionario: (codigoAero: string, nomeEtapa: string, idFunc: string) => void
  addTeste: (t: Teste) => void
}

const AppContext = createContext<AppContextType | null>(null)
const noop = () => undefined

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <AppContext.Provider value={{
      state: mockState,
      criarAdmin: noop,
      login: () => true,
      logout: noop,
      addFuncionario: noop,
      addAeronave: noop,
      addPeca: noop,
      updateStatusPeca: noop,
      addEtapa: noop,
      updateEtapa: noop,
      associarFuncionario: noop,
      addTeste: noop,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp fora do AppProvider')
  return ctx
}
