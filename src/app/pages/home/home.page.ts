import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsModel } from 'src/app/model/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private _lstNews: NewsModel[];

  constructor(private newsService: NewsService) { }

  async ngOnInit() {
    try {
      this._lstNews = await this.newsService.getAll();
    } catch(error) {
      console.log("Erro ao carregar lista de notícias!");
    }
  }

  public get lstNews() {
    return this._lstNews;
  }



}
