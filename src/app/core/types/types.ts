export interface iUsuarios{
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
}

export interface iPerfil {
  id: number;
  nome: string;
  descricao: string;
  ativo: boolean;
}

export interface iPermissao {
  id: number;
  nome: string;
  descricao: string;
  ativo: boolean;
}
