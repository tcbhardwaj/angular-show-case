import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BasicFormComponent} from './basic-form/basic-form.component';
import {FormValidationComponent} from './form-validation/form-validation.component';
import {Routes, RouterModule} from '@angular/router';

const ROUTES: Routes = [
  {path: 'basic-form', component: BasicFormComponent},
  {path: 'form-validation', component: FormValidationComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    FormValidationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
