import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild(ChildrenComponent) viewChild: ChildrenComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
      console.log(this.viewChild);
  }

  dataChangeHandler(data: any) {
      console.log(data);
  }

}
