import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BasicFormComponent} from './basic-form/basic-form.component';
import {FormValidationComponent} from './form-validation/form-validation.component';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'basic-form', component: BasicFormComponent},
  {path: 'form-validation', component: FormValidationComponent},
  {path: 'form-reactive', component: FormReactiveComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    FormValidationComponent,
    HomeComponent,
    FormReactiveComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
