import {Component, OnInit} from '@angular/core';
import {DEPARTMENTS} from '../../mock-data/mock-department';
import {FormsModule, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  departments = DEPARTMENTS;
  myform: FormGroup;
  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
  }
  clear() {
    // this.myform.reset();
    console.log('clear call');
  }

}
