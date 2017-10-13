import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class ResultsService {

  private dropdowns = [
  'age_category',
  'competition_type',
  'equipped',
  'old_weight_class',
  'province',
  'sex',
  'weight_class',
  'year'];

  private text = [
  'competition',
  'name'];

  queryValues;
  page = {
    number: 1,
    results: []
  };

  constructor(private http:Http) { }

  private buildQueryUrl(values) {
    let url = '/api.php/results?';

    url = this.dropdowns.reduce(dropdown => values[dropdown] ? `${url}filter[]=${dropdown},eq,${values[dropdown]}&` : url, url);
    url = this.text.reduce(txt => values[txt] ? `${url}filter[]=${txt},cs,${values[txt]}&` : url, url);
    return url;
  }

  list(queryValues, page = 1){
    this.queryValues = queryValues;
    this.page.number = page;

    let observable = this.http.get(`${this.buildQueryUrl(queryValues)}order=date&transform=1&page=1,50`)
      .map(res => res.json())
      .share();

    observable.subscribe(res => this.page.results = res.results);
    return observable;
  }

  nextPage(){
    return this.list(this.queryValues,++this.page.number);
  }

  create(results){
    return this.http.post('/api.php/results', results).map(res => res.json);
  }
}
