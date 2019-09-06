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
    this._lstNews = await this.newsService.getAll();
  }

  public get lstNews() {
    return this._lstNews;
  }



}
