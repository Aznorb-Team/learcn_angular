import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { TestPageComponent } from './Pages/test-page/test-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'test',
    component: TestPageComponent
  },
  {
    path: "**",
    component: ErrorPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
