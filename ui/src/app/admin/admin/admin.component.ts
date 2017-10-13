import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error;

  resultsForm;
  results;

  competitionTypes = ['', 'Powerlifting', 'Bench Only'].sort();

  ageCategories = {
    SJR: 'Sub-Junior',
    JR: 'Junior',
    O: 'Open',
    M1: 'Master 1',
    M2: 'Master 2',
    M3: 'Master 3',
    M4: 'Master 4'
  };

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.resultsForm = this.formBuilder.group({
      competition: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      competition_type: ['', Validators.required],
      csv: ['', Validators.required],
    });
  }

  openFile(event) {
    let input = event.target;
    for (let index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {

        this.results = reader.result
          .split('\n')
          .map(row => row.split(',').map(column => column.toString().trim()).map(column => column === '&nbsp;' ? '' : column))
          .filter(row => row != "")
          .map(res => {
            let category = res[4].split('-');
            let sex = category[0];
            let equipped = !!category[2];
            let age_category = this.ageCategories[category[1]];

            return {
              name: res[0],
              province: res[2],
              sex,
              age_category,
              weight: res[5],
              weight_class: res[6],
              squat: Math.max(parseFloat(res[8]), parseFloat(res[9]), parseFloat(res[10]), 0),
              bench: Math.max(parseFloat(res[11]), parseFloat(res[12]), parseFloat(res[13]), 0),
              deadlift: Math.max(parseFloat(res[14]), parseFloat(res[15]), parseFloat(res[16]), 0),
              total: parseFloat(res[17] || 0),
              wilks: parseFloat(res[18] || 0),
              equipped
            }
          });

        this.results.shift(); // Remove the header line;
      };
      reader.readAsText(input.files[index]);
    }
  }

  onSubmit(resultsForm) {

  }
}

