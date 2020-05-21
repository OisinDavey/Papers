import { FormBuilder } from '@angular/forms';
import { Papers } from '../Papers';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent{
  checkoutForm;

  exam;
  year;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      exam: '',
      year: '',
    });
  }
  onSubmit() {
    this.exam = this.checkoutForm.get('exam').value;
    this.year = this.checkoutForm.get('year').value;

    for (var paper of Papers){
      if (paper.exam == this.exam && paper.year == this.year){
        break;
      }
    }
  }
}