export type NivelPermissao = 'adm' | 'eng' | 'op'
export type TipoAeronave = 'comercial' | 'militar'
export type TipoPeca = 'nacional' | 'importada'
export type StatusPeca = 'em produção' | 'em transporte' | 'pronta'
export type TipoTeste = 'elétrico' | 'hidráulico' | 'aerodinâmico'
export type ResultadoTeste = 'aprovado' | 'reprovado'
export type StatusEtapa = 'pendente' | 'em andamento' | 'concluída'

export interface Funcionario {
  id: string
  nome: string
  telefone: string
  endereco: string
  usuario: string
  senha: string
  nivel: NivelPermissao
}

export interface Aeronave {
  codigo: string
  modelo: string
  capacidade: number
  alcance: number
  tipo: TipoAeronave
}

export interface Peca {
  nome: string
  fornecedor: string
  tipo: TipoPeca
  status: StatusPeca
}

export interface Etapa {
  nome: string
  prazo: string
  codigoAero: string
  status: StatusEtapa
  funcionarios: string[]
}

export interface Teste {
  codigoAero: string
  tipo: TipoTeste
  resultado: ResultadoTeste
  data: string
}

export interface AppState {
  funcionarios: Funcionario[]
  aeronaves: Aeronave[]
  pecas: Peca[]
  etapas: Etapa[]
  testes: Teste[]
  usuarioLogado: Funcionario | null
  primeiraVez: boolean
}
