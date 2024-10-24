import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-perfis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-perfis.component.html',
  styleUrls: ['./crud-perfis.component.css']
})
export class CrudPerfisComponent {
  perfis = [
    { id: 1, nome: 'Adm', descricao: 'Administra', ativo: true },
    { id: 2, nome: 'Operação', descricao: 'Opera', ativo: true },
    { id: 3, nome: 'Testes', descricao: 'Testa', ativo: false }
  ];

  adicionarPerfil() {
    // Lógica para adicionar um novo usuário
    alert('Adicionar Usuário');
  }

  editarPerfil(perfil: any) {
    // Lógica para editar o usuário
    alert(`Editar Usuário: ${perfil.nome}`);
  }

  deletarPerfil(id: number) {
    // Lógica para deletar o usuário
    this.perfis = this.perfis.filter(u => u.id !== id);
    alert(`Usuário com ID ${id} deletado`);
  }
}
