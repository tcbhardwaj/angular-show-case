import {Component, OnInit} from '@angular/core';
import {DEPARTMENTS} from '../../mock-data/mock-department';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  departments = DEPARTMENTS;
  constructor() {}

  ngOnInit() {
  }

  onSubmit(myForm: NgForm): void {
    console.log('form value:', myForm.value.dept);
  }

}
