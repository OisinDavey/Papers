import { FormBuilder } from '@angular/forms';
import { HLPhysicsPapers } from '../../Papers';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-physics',
  templateUrl: './physics.component.html',
  styleUrls: ['./physics.component.css']
})
export class HLPhysicsComponent{
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

    for (var paper of HLPhysicsPapers){
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