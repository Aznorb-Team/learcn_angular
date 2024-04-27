import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HostListenerDirective } from './Directives/host-listener.directive';
import { HostListener2Directive } from './Directives/host-listener2.directive';
import { TestPageComponent } from './Pages/test-page/test-page.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildrenComponent } from './Components/children/children.component';
import { ZoomDirective } from './Directives/zoom.directive';
import { DublicateDirective } from './Directives/dublicate.directive';
import { CutTextPipe } from './Pipes/cut-text.pipe';
import { BooksListComponent } from './Components/Books/books-list/books-list.component';
import { BooksItemComponent } from './Components/Books/books-item/books-item.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    MainPageComponent,
    HostListenerDirective,
    HostListener2Directive,
    TestPageComponent,
    ParentComponent,
    ChildrenComponent,
    ZoomDirective,
    DublicateDirective,
    CutTextPipe,
    BooksListComponent,
    BooksItemComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
