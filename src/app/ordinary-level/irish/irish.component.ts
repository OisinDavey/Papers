import { FormBuilder } from '@angular/forms';
import { OLIrishPapers } from '../../Papers/OLIrishPapers';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ordinary-level-irish',
  templateUrl: 'irish.component.html',
  styleUrls: ['irish.component.css']
})
export class OLIrishComponent{
  checkoutForm;

  year;

  hasOne = false;
  hasTwo = false;
  hasMark = false;

  oneLink = "";
  twoLink = "";
  markLink = "";

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      year: '',
    });
  }

  onSubmit() {
    this.year = this.checkoutForm.get('year').value;
    this.hasOne = false;
    this.hasTwo = false;
    this.hasMark = false;

    for (var paper of OLIrishPapers){
      if ( (paper.year == this.year) ){
        if(paper.tipe == "ExamPaper"){
          if(paper.paper == "One"){
            this.hasOne = true;
            this.oneLink = paper.link;
          }else if(paper.paper == "Two"){
            this.hasTwo = true;
            this.twoLink = paper.link;
          }
        }else{
          this.hasMark = true;
          this.markLink = paper.link;
        }
      }
    }
  }
}