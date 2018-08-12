import { Component, OnInit,Input } from '@angular/core';
import {SwimlaneService} from '../../Services/swimlane.service';
import {Email} from '../../Models/email';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers:[SwimlaneService]
})

export class EmailComponent implements OnInit {
  @Input() emailObjInput: Email;
  
  
  constructor(private swimlaneService:SwimlaneService) { 
  }

  ngOnInit() {
  }

  saveDetails(){
    this.swimlaneService.SwimLaneList.Items.filter(x=>{
      if(x.LaneId==this.emailObjInput.Id){
        x.emailObj = this.emailObjInput;
      }
    })
  }


}
