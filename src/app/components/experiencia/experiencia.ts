import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Experiencia } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent {
  // Lista com os marcos reais da trajetória de João Guilherme
  readonly marcos = signal<Experiencia[]>([
    {
      id: 1,
      periodo: '2026 - Presente (1º Semestre)',
      titulo: 'Graduação em Análise e Desenvolvimento de Sistemas',
      instituicao: 'Centro Universitário UniAteneu',
      tipo: 'formacao',
      descricao:
        'Início da formação superior na área de TI. Aprendizado de fundamentos de computação, lógica de programação com Python, introdução a banco de dados SQL e arquitetura de sistemas.',
      tags: ['Ensino Superior', 'ADS', 'UniAteneu', 'Python', 'SQL'],
    },
    {
      id: 2,
      periodo: '2026',
      titulo: 'Hackathon Proenergia Summit 2026',
      instituicao: 'Ecossistema Proenergia • Trilha de Inovação',
      tipo: 'hackathon',
      descricao:
        'Imersão prática e intensiva de tecnologia em squad colaborativa. Desenvolvimento de aplicação com Angular 22 moderno, versionamento com Git e criação de soluções aplicadas ao setor de energia sustentável.',
      tags: ['Hackathon', 'Angular 22', 'Trabalho em Equipe', 'Inovação', 'Git'],
    },
    {
      id: 3,
      periodo: 'Meta Atual • 2026',
      titulo: 'Objetivo Profissional: Suporte Técnico & TI',
      instituicao: 'Busca pela 1ª Oportunidade no Mercado de Trabalho',
      tipo: 'objetivo',
      descricao:
        'Buscando oportunidade de estágio ou posição júnior em Suporte Técnico / Helpdesk. Conhecimento em diagnóstico e manutenção de computadores, suporte a sistemas operacionais (Windows/Linux), redes e vontade genuína de aprender e resolver problemas.',
      tags: ['Suporte Técnico', 'Helpdesk N1', 'Hardware', 'Redes', 'Atendimento'],
    },
  ]);
}
