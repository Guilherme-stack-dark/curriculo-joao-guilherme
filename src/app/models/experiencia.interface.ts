export interface Experiencia {
  id: number;
  periodo: string;
  titulo: string;
  instituicao: string;
  tipo: 'formacao' | 'hackathon' | 'objetivo';
  descricao: string;
  tags: string[];
}
