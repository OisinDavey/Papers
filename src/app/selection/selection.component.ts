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

  subject;
  year;
  tipe;
  paper;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      subject: '',
      year: '',
      tipe: '',
      paper: '',
    });
  }
  onSubmit() {
    this.subject = this.checkoutForm.get('subject').value;
    this.year = this.checkoutForm.get('year').value;
    this.tipe = this.checkoutForm.get('tipe').value;
    this.paper = this.checkoutForm.get('paper').value;

    for (var paper of Papers){
      if (
        paper.subject == this.subject && 
        paper.year == this.year &&
        paper.tipe == this.tipe && 
        paper.paper == this.paper
        ){
        window.alert(paper.link)
        break;
      }
    }
  }
}