import { Component } from '@angular/core';

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
  readValues=()=>{
    let data:any={"pid":this.pid,"pname":this.pname,"address":this.address,"mobileno":this.mobileno,"doap":this.doap,"drname":this.dname}
    console.log}
}
