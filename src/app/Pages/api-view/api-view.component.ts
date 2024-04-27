import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { Post } from 'src/app/Models/post.photos';

@Component({
  selector: 'app-api-view',
  templateUrl: './api-view.component.html',
  styleUrls: ['./api-view.component.css'],
  providers: [ApiServiceService]
})
export class ApiViewComponent implements OnInit {

    posts: Post[] | undefined;
    constructor(private apiService: ApiServiceService){
    }

    // addItem(name: string){

    //     this.apiService.addData(name);
    // }
    ngOnInit(){
        this.apiService.get().subscribe(value=>{
          this.posts = value;
          console.log(value)
        });
    }

}
