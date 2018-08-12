import { Component, OnInit,Input } from '@angular/core';
import {SwimlaneService} from '../../Services/swimlane.service';
import {Voice} from '../../Models/voice';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css'],
  providers:[SwimlaneService]
})
export class VoiceComponent implements OnInit {
  // @Input() master:string;
  @Input() voiceObjInput: Voice;
  
  
  constructor(private swimlaneService:SwimlaneService) { 
  }

  ngOnInit() {
  }

  saveDetails(){
    this.swimlaneService.SwimLaneList.Items.filter(x=>{
      if(x.LaneId==this.voiceObjInput.Id){
        x.voiceObj = this.voiceObjInput;
      }
    })
  }
}
