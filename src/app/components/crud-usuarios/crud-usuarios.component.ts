import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../core/services/usuario/usuario.service'; // Importar o service

@Component({
  selector: 'app-crud-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.css']
})
export class CrudUsuariosComponent implements OnInit {
  usuarios: any[] = []; // Lista de usuários

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    // Chama o método para carregar os usuários ao inicializar o componente
    this.carregarUsuarios();
  }

  // Carrega os usuários da API
  carregarUsuarios() {
    this.usuariosService.listarUsuarios().subscribe({
      next: (data: any[]) => {
        this.usuarios = data;
      },
      error: (error: any) => {
        console.error('Erro ao carregar usuários', error);
      },
      complete: () => {
        console.log('Carregamento de usuários completo');
      }
    });
  }

  // Cria um novo usuário
  adicionarUsuario() {
    const novoUsuario = { nome: 'Novo Usuário', email: 'novo@exemplo.com' };
    this.usuariosService.criarUsuario(novoUsuario).subscribe({
      next: (data: any) => {
        this.usuarios.push(data); // Adiciona o novo usuário à lista
      },
      error: (error: any) => {
        console.error('Erro ao adicionar usuário', error);
      }
    });
  }

  // Atualiza um usuário existente
  editarUsuario(usuario: any) {
    const usuarioAtualizado = { ...usuario, nome: 'Nome Atualizado' }; // Exemplo de alteração
    this.usuariosService.atualizarUsuario(usuario.id, usuarioAtualizado).subscribe({
      next: (data: any) => {
        // Atualiza o usuário na lista local (opcional, depende da resposta da API)
        const index = this.usuarios.findIndex((u) => u.id === usuario.id);
        if (index !== -1) {
          this.usuarios[index] = data;
        }
      },
      error: (error: any) => {
        console.error('Erro ao atualizar usuário', error);
      }
    });
  }
}
