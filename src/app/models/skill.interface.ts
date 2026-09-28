export interface Skill {
  nome: string;
  categoria: 'Suporte & Redes' | 'Programação' | 'Banco de Dados' | 'Web & Ferramentas';
  nivel: number; // Porcentagem de domínio (0 a 100)
}
