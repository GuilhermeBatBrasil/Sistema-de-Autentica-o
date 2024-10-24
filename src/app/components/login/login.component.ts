import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service'; // Serviço de autenticação
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Para usar o [(ngModel)]
import { CommonModule } from '@angular/common'; // Necessário para usar o *ngIf

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.senha).subscribe({
      next: (response: { token: any; }) => {
        // Sucesso, salvar o token e redirecionar para outra página
        this.authService.salvarToken(response.token);
        this.router.navigate(['/usuarios']); // Redirecionar para a página de usuários
      },
      error: (error: any) => {
        // Exibir uma mensagem de erro no login
        this.errorMessage = 'Email ou senha incorretos.';
      }
    });
  }
}
