import { FormBuilder } from '@angular/forms';
import { DCGPapers } from '../Papers';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dcg',
  templateUrl: './dcg.component.html',
  styleUrls: ['./dcg.component.css']
})
export class DcgComponent{
  checkoutForm;

  year;

  hasSectionA = false;
  hasSectionB = false;
  hasMark = false;

  sectionALink = "";
  sectionBLink = "";
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
    this.hasSectionA = false;
    this.hasSectionB = false;
    this.hasMark = false;

    for (var paper of DCGPapers){
      if ( (paper.year == this.year) ){
        if(paper.tipe == "ExamPaper"){
          if(paper.paper == "A"){
            this.hasSectionA = true;
            this.sectionALink = paper.link;
          }
          if(paper.paper == "B"){
            this.hasSectionB = true;
            this.sectionBLink = paper.link;
          }
          
        }else{
          this.hasMark = true;
          this.markLink = paper.link;
        }
      }
    }
  }
}