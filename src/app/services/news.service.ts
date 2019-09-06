import { Injectable } from '@angular/core';
import { NewsModel } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private lstNews: NewsModel[];

  constructor() {
    this.lstNews = [
      new NewsModel({
        "id": 1,
        "title": "É montagem vídeo que mostra furacão Dorian sobre as Bahamas",
        "publishedAt": "09/04/2019 14:21:00",
        "likes": 200,
        "image": "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/furacao-dorian-bahamas-destaque.jpg",
        "link": "https://piaui.folha.uol.com.br/lupa/2019/09/04/verificamos-video-furacao-dorian-bahamas/",
        "content": "A informação, analisada pela Lupa, é falsa. O vídeo é na verdade uma animação por computador, criada pelo artista digital norte-americano Brent Shavnore. Ele compartilhou a obra em sua conta no Instagram no dia 19 de maio deste ano. Mais de 164 mil pessoas visualizaram o vídeo. Shavnore criou o “furacão” sobre uma foto da cidade de Miami, nos Estados Unidos. Em sua página pessoal, imagens que mostram tempestades e raios sobre cidades ou paisagens são comuns."
      }),
      new NewsModel({
        "id": 2,
        "title": "Polícia Federal não realizou operação contra a Rede Globo em 30 de agosto",
        "publishedAt": "09/04/2019 19:02:00",
        "likes": 100,
        "image": "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/printglobopftopo.png",
        "link": "https://piaui.folha.uol.com.br/lupa/2019/09/03/verificamos-globo-pf/",
        "content": "A informação analisada pela Lupa é falsa. A Lupa contatou a Divisão de Comunicação Social da Polícia Federal (PF), que disse não ter conhecimento de qualquer operação envolvendo a emissora. “Não chegou ao conhecimento desta DCS qualquer ocorrência nos moldes da descrita na consulta”, diz e-mail enviado pela PF."
      }),
      new NewsModel({
        "id": 3,
        "title": "É falso que Drauzio Varella recomendou suplemento contra dores articulares",
        "publishedAt": "09/02/2019 18:23:00",
        "likes": 10,
        "image": "https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/09/drauzioreproducao.png",
        "link": "https://piaui.folha.uol.com.br/lupa/2019/09/02/verificamos-drauzio-dores-articulares/",
        "content": "O conteúdo analisado pela Lupa é falso. O doutor Drauzio Varella nunca deu entrevista ao programa Fantástico recomendando um suplemento alimentar para dores nas articulações. “Nunca fiz nem nunca farei propaganda de remédios, muito menos desses que prometem curas sem comprovação científica. Sempre que você vir meu nome associado a algum medicamento tenha certeza: é mentira, propaganda enganosa”, disse Varella, em nota enviada à Lupa."
      })
    ];
  }

  getAll(): NewsModel[] {
    return this.lstNews; 
  }
}
