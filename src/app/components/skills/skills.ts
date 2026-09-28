import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  // Filtro ativo (começa em 'Todos')
  readonly filtroAtivo = signal<string>('Todos');

  // Habilidades Reais com níveis calibrados para quem está no 1º semestre de ADS
  readonly skills = signal<Skill[]>([
    // Suporte & Redes
    { nome: 'Suporte Técnico & Helpdesk', categoria: 'Suporte & Redes', nivel: 70 },
    { nome: 'Manutenção e Hardware', categoria: 'Suporte & Redes', nivel: 65 },
    { nome: 'Sistemas Operacionais (Windows/Linux)', categoria: 'Suporte & Redes', nivel: 65 },
    { nome: 'Redes & Conectividade (TCP/IP)', categoria: 'Suporte & Redes', nivel: 55 },

    // Programação
    { nome: 'Python (Lógica & Automação)', categoria: 'Programação', nivel: 55 },
    { nome: 'Lógica de Programação', categoria: 'Programação', nivel: 65 },

    // Banco de Dados
    { nome: 'SQL (Consultas & Filtros)', categoria: 'Banco de Dados', nivel: 55 },
    { nome: 'Modelagem de Dados Básica', categoria: 'Banco de Dados', nivel: 50 },

    // Web & Ferramentas
    { nome: 'Git & GitHub', categoria: 'Web & Ferramentas', nivel: 50 },
    { nome: 'Angular 22 & Web (Em Aprendizado)', categoria: 'Web & Ferramentas', nivel: 45 },
  ]);

  // Extrai as categorias únicas
  readonly categorias = computed(() => {
    const catsUnicas = [...new Set(this.skills().map((s) => s.categoria))];
    return ['Todos', ...catsUnicas];
  });

  // Lista filtrada reativa
  readonly skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') {
      return this.skills();
    }
    return this.skills().filter((skill) => skill.categoria === filtro);
  });

  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}
