import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-permissoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-permissoes.component.html',
  styleUrls: ['./crud-permissoes.component.css']
})
export class CrudPermissoesComponent {
  permissoes = [
    { id: 1, nome: 'Get', descricao: 'faz o get', ativo: true },
    { id: 2, nome: 'Put', descricao: 'faz o put', ativo: true },
    { id: 3, nome: 'Post', descricao: 'faz o post', ativo: true }
  ];

  adicionarPermissao() {
    // Lógica para adicionar um novo usuário
    alert('Adicionar Usuário');
  }

  editarPermissao(permissao: any) {
    // Lógica para editar o usuário
    alert(`Editar Usuário: ${permissao.nome}`);
  }

  deletarPermissao(id: number) {
    // Lógica para deletar o usuário
    this.permissoes = this.permissoes.filter(u => u.id !== id);
    alert(`Usuário com ID ${id} deletado`);
  }
}
