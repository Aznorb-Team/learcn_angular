import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  buyTicketForm: FormGroup

  constructor() {
    this._createForm()
  }

  private _createForm() {
    this.buyTicketForm = new FormGroup({
      passenger: new FormControl(null),
      passengerAge: new FormControl(null),

      passengerContacts: new FormGroup({
        telegram: new FormControl(null),
        whatsapp: new FormControl(null),
      }),
    })
  }

  ngOnInit(): void {
  }

}
