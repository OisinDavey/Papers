import { Component, OnInit } from '@angular/core';
import { Papers } from '../Papers';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  tipe = ""
  year = ""
  exam = ""
  subject = ""

  updateTipe(text) {
    this.tipe = text;
  }

  updateYear(text) {
    this.year = text;
  }

  updateExam(text) {
    this.exam = text;
  }

  updateSubject(text) {
    this.subject = text;
  }

  clearSelection() {
    this.tipe = "";
    this.year = "";
    this.exam = "";
    this.subject = "";
  }

  constructor() { }

  ngOnInit() {
  }

}