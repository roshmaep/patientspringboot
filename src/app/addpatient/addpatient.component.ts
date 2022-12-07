import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {
  pid=""
  pname=""
  address=""
  mobileno=""
  doap=""
  dname=""
  constructor(private api:ApiService){}
  readValues=()=>{
    let data:any={"pid":this.pid,"pname":this.pname,"address":this.address,"mobileno":this.mobileno,"doap":this.doap,"dname":this.dname}
    console.log(data)
    this.api.addpatient(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status == "success") {

          alert("Patient added successfully")

          this.pid=""

          this.pname=""

          this.address=""

          this.mobileno=""

          this.doap=""

          this.dname=""

         

        }else{

          alert("Something went wrong")

        }
      }
    )
  }

  }

