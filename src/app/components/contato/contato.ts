import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatoComponent {
  readonly email = signal('guilhermeavila1220@gmail.com');
  readonly telefoneFormatado = signal('(85) 98105-6364');
  readonly whatsappLink = signal(
    'https://wa.me/5585981056364?text=Ol%C3%A1%20Jo%C3%A3o%20Guilherme,%20vi%20seu%20curr%C3%ADculo%20digital!'
  );
  readonly localizacao = signal('Fortaleza, Ceará • Brasil');

  // Estado reativo para feedback visual do botão de copiar
  readonly copiado = signal(false);

  // Usa a Clipboard API nativa do navegador para copiar o texto
  async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.copiado.set(true);

      // Reseta o botão após 2 segundos
      setTimeout(() => {
        this.copiado.set(false);
      }, 2000);
    } catch (err) {
      console.error('Erro ao copiar e-mail:', err);
    }
  }
}
