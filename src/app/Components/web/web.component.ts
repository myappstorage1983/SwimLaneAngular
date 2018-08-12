import { Component, OnInit,Input } from '@angular/core';
import {SwimlaneService} from '../../Services/swimlane.service';
import {Web} from '../../Models/web';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
  providers:[SwimlaneService]
})
export class WebComponent implements OnInit {
  // @Input() master:string;
  @Input() webObjInput: Web;
  
  
  constructor(private swimlaneService:SwimlaneService) { 
    //var test = this.emailObjInput.Id;
  }

  ngOnInit() {
    //this.emailObjInput= new Email()
  }

  saveDetails(){
    
    this.swimlaneService.SwimLaneList.Items.filter(x=>{
      if(x.LaneId==this.webObjInput.Id){
        x.webObj = this.webObjInput;
      }
    })
  }


}
