import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  // Dados Pessoais Reais com Signals
  readonly nome = signal('João Guilherme Ávila');
  readonly papel = signal('Estudante de ADS (UniAteneu) • Suporte Técnico & TI');
  readonly bio = signal(
    'Graduando no 1º semestre de Análise e Desenvolvimento de Sistemas na UniAteneu. Foco em Suporte Técnico, resolução prática de problemas de TI, automação com Python e banco de dados SQL.'
  );
  readonly avatarUrl = signal(
    'https://api.dicebear.com/8.x/bottts-neutral/svg?seed=JoaoGuilherme'
  );

  // Estado do Tema (Dark por padrão)
  readonly tema = signal<'dark' | 'light'>('dark');

  // Alterna o tema e aplica no documento HTML
  alternarTema(): void {
    const novoTema = this.tema() === 'dark' ? 'light' : 'dark';
    this.tema.set(novoTema);
    document.documentElement.setAttribute('data-theme', novoTema);
  }
}
