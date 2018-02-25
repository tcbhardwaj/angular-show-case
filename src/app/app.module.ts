import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    FormValidationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
