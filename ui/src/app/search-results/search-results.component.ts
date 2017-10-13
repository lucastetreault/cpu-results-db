import { Component, OnInit } from '@angular/core';
import {ResultsService} from "../results.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  page;

  constructor(private resultsService:ResultsService) { }

  ngOnInit() {
    this.page = this.resultsService.page;
  }

}
