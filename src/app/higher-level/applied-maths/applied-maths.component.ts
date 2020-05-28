import { FormBuilder } from '@angular/forms';
import { HLAppliedMathsPapers } from '../../Papers/HLAppliedMathsPapers';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-higher-level-applied-maths',
  templateUrl: 'applied-maths.component.html',
  styleUrls: ['applied-maths.component.css']
})
export class HLAppliedMathsComponent{
  checkoutForm;

  year;

  hasPaper = false;
  hasMark = false;

  paperLink = "";
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
    this.hasPaper = false;
    this.hasMark = false;

    for (var paper of HLAppliedMathsPapers){
      if ( (paper.year == this.year) ){
        if(paper.tipe == "ExamPaper"){
          this.hasPaper = true;
          this.paperLink = paper.link;
        }else{
          this.hasMark = true;
          this.markLink = paper.link;
        }
      }
    }
  }
}