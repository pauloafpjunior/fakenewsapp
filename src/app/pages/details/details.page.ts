import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private _news: NewsModel;

  constructor(private activatedRoute: ActivatedRoute,
    private newsService: NewsService) { }

  async ngOnInit() {
    try {
      let newsid: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      this._news = await this.newsService.getBy(newsid);
    } catch(error) {
      console.log("Erro ao carregar notícia!");
    }
  }

  public get news() {
    return this._news; 
  }
}
