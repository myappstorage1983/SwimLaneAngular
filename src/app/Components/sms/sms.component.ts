import { Component, OnInit,Input } from '@angular/core';
import {SwimlaneService} from '../../Services/swimlane.service';
import {Sms} from '../../Models/sms';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css'],
  providers:[SwimlaneService]
})
export class SmsComponent implements OnInit {
  // @Input() master:string;
  @Input() smsObjInput: Sms;
  
  
  constructor(private swimlaneService:SwimlaneService) { 
  }

  ngOnInit() {
  }

  saveDetails(){
    
    this.swimlaneService.SwimLaneList.Items.filter(x=>{
      if(x.LaneId==this.smsObjInput.Id){
        x.smsObj = this.smsObjInput;
      }
    })
  }


}
