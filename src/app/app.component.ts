
import { Component } from '@angular/core';
import { ApiDataService } from './services/api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-api-call';
  details:any;
  det :any;
  users:any;
  constructor(private apidata:ApiDataService){
    
                                  //get data from the api
    this.apidata.memberData()
    .subscribe((dataVar) => 
    {
     this.details = dataVar;
      console.log(this.details); 
    }); 
// local data inside service.ts file 
    //console.log(data.userData());
    this.users= apidata.userData();
    
  }
  //post data with saveUsers() fxn to api
  getFormData(data1 :any){
    //console.log(data1);
    this.apidata.saveUsers(data1).subscribe((result) => {
      this.det = result
      console.log(this.det);
    });
    
  }
}
