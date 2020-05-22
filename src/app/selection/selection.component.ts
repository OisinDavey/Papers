import { FormBuilder } from '@angular/forms';
import { MathsPapers } from '../Papers';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent{
  checkoutForm;

  year;
  tipe;
  paper;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      year: '',
      tipe: '',
      paper: '',
    });
  }
  onSubmit() {
    this.year = this.checkoutForm.get('year').value;
    this.tipe = this.checkoutForm.get('tipe').value;
    this.paper = this.checkoutForm.get('paper').value;

    for (var paper of MathsPapers){
      if (
        (paper.year == this.year) &&
        (paper.tipe == this.tipe) && 
        (paper.paper == this.paper || paper.paper == "")
        ){
        window.alert(paper.link)
        break;
      }
    }
  }
}