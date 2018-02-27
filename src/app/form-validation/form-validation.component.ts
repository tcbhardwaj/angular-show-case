import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {DEPARTMENTS} from '../../mock-data/mock-department';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
departments = DEPARTMENTS;
  constructor() {}

  ngOnInit() {
  }

  onSubmit(myForm: NgForm): void {
    console.log('form value:', myForm);
  }

  reset(myForm: NgForm): void {
    console.log('reset called');
    myForm.resetForm();
  }


}
