import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {ResultsService} from "../results.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm;

  competitionTypes = ['', 'Powerlifting', 'Bench Only'].sort();
  sexes = ['', 'Male', 'Female'].sort();
  provinces = ['', 'BC', 'AB', 'SK', 'MB', 'ON', 'QU', 'NB', 'PE','NS','NL','IQ','NU','IN','CAN'].sort();
  ageCategories = ['', 'Sub-Junior', 'Junior', 'Open', 'Master 1', 'Master 2', 'Master 3', 'Master 4'];
  oldWeightClasses = ['', '44','48','52','56','60','67.5','75','82.5','90','100','125','125+'];
  newWeightClasses= ['', '43','47','52','57','63','72','84','84+','53','59','66','74','83','93','105','120','120+']
  years = [];

  constructor(private formBuilder: FormBuilder, private router:Router, private resultsService:ResultsService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      competition_type: [''],
      sex: [''],
      province: [''],
      age_category: [''],
      old_weight_class: [''],
      weight_class: [''],
      year: [''],
      name: [''],
      equipped: [''],
      competition: ['']
    });

    this.years.push('');
    for( let i = (new Date()).getFullYear() ; i >= 1978 ; i--){
      this.years.push(i);
    }
  }

  onSubmit(searchForm){
    this.resultsService(searchForm);
  }

}
