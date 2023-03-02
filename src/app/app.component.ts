import { Component } from '@angular/core';
import { ApiDataService } from './services/api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-api-call';
  details :any;
  det :any;
  constructor(private data:ApiDataService){
    //get data from the api
    data.memberData().subscribe((dataXY) => {
      this.details = dataXY
      //console.log(this.details);
    });
  }
  //post data with saveUsers() fxn to api
  getFormData(data1 :any){
    //console.log(data1);
    this.data.saveUsers(data1).subscribe((result) => {
      this.det = result
      console.log(this.det);
    });
    
  }
}
