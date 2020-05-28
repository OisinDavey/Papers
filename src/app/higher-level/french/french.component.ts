import { FormBuilder } from '@angular/forms';
import { HLFrenchPapers } from '../../Papers/HLFrenchPapers';
import { SoundFilesFrench} from '../../Papers/SoundFilesFrench'
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-higher-level-french',
  templateUrl: 'french.component.html',
  styleUrls: ['french.component.css']
})
export class HLFrenchComponent{
  checkoutForm;

  year;

  hasPaper = false;
  hasAural = false;
  hasSound = false;
  hasMark = false;

  paperLink = "";
  auralLink = "";
  soundLink = "";
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
    this.hasAural = false;
    this.hasSound = false;
    this.hasMark = false;

    for (var paper of HLFrenchPapers){
      if ( (paper.year == this.year) ){
        if(paper.tipe == "ExamPaper"){
          this.hasPaper = true;
          this.paperLink = paper.link;
        }else if(paper.tipe == "AuralPaper"){
          this.hasAural = true;
          this.auralLink = paper.link;
        }else{
          this.hasMark = true;
          this.markLink = paper.link;
        }
      }
    }

    for(var sound of SoundFilesFrench){
      if ( (sound.year == this.year ) ){
        this.hasSound = true;
        this.soundLink = sound.link;
      }
    }
  }
}