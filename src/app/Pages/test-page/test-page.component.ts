import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  loginForm: any = {
    login: '',
    password: ''
  }
  printForm(){
      console.log(this.loginForm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
