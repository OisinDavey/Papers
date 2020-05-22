import { FormBuilder } from '@angular/forms';
import { MathsPapers } from '../Papers';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-maths',
  templateUrl: 'maths.component.html',
  styleUrls: ['maths.component.css']
})
export class MathsComponent{
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

    for (var paper of MathsPapers){
      if ( (paper.year == this.year) ){
        if(paper.paper == "One"){
          this.hasOne = true;
          this.oneLink = paper.link;
        }else if(paper.paper == "Two"){
          this.hasTwo = true;
          this.twoLink = paper.link;
        }
      }
    }
  }
}