import { Injectable } from '@angular/core';
import { NewsModel } from '../model/news.model';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private lstNews: NewsModel[];
  private API_BASE_URL: string = 'http://localhost:8000';

  constructor(private http: HttpClient) {
  }

  public getAll(): Promise<NewsModel[]> {
    return this.http.get<NewsModel[]>(`${this.API_BASE_URL}/news`).pipe(
      map(
        (itens: NewsModel[]) => {
          return itens.map(
            (item: NewsModel) => new NewsModel(item)
          )
        }
      )
    ).toPromise();
  }

  public getBy(id: number): Promise<NewsModel> {
    return this.http.get<NewsModel>(`${this.API_BASE_URL}/news/${id}`).pipe(
      map(
        (item: NewsModel) => {
          return new NewsModel(item)
        }
      )
    ).toPromise();
  }
}
