import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input() title: string;
  @Output() dataChanged: EventEmitter<any> = new EventEmitter<any>();

  label: string = 'Send message';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
      this.dataChanged.emit({
          msg: 'Message from ChildExample',
      });
  }

}
