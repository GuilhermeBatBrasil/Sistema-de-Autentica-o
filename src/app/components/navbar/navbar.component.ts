import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class NavbarComponent {

  constructor(private router: Router) {}

  logout(): void {
    // Aqui você pode colocar a lógica de logout, como remover o token do localStorage ou limpar sessões
    console.log('Usuário deslogado');
    this.router.navigate(['/']); // Redireciona para a página de login
  }

  toggleTheme(): void {
    // Lógica para alternar entre temas
    console.log('Tema alternado');
    // Aqui você pode integrar a troca de temas como light/dark
  }
}
