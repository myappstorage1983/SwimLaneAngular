import { Component, OnInit, Directive } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { SmsComponent } from '../sms/sms.component';
import { WebComponent } from '../web/web.component';
import { VoiceComponent } from '../voice/voice.component';
import { SwimlaneService } from '../../Services/swimlane.service';
import { Email } from '../../Models/email';
import { LaneDetails } from '../../Models/lanedetails';
import { LaneList } from '../../Models/lanelist';
import { Voice } from '../../Models/voice';
import { Sms } from '../../Models/sms';
import { Web } from '../../Models/web';

@Component({
  selector: 'app-swimlane',
  templateUrl: './swimlane.component.html',
  styleUrls: ['./swimlane.component.css'],
  providers: [SwimlaneService]

})

export class SwimlaneComponent implements OnInit {

  private newColumn: any = {};
  private columnArray: Array<any> = ['Nr'];
  private newRow: any = {};
  private rowArray: Array<any> = [];
  private swimLaneList: LaneList = new LaneList();
  private selectedCell: SelectedCell = new SelectedCell();
  private displayEmailComponent: boolean = false;
  private displaySMSComponent: boolean = false;
  private displayWebComponent: boolean = false;
  private displayVoiceComponent: boolean = false;
  private email: Email = new Email();
  private sms: Sms = new Sms();
  private web: Web = new Web();
  private voice: Voice = new Voice();


  lanes: Lanes[] = [
    { name: 'Voice' },
    { name: 'Web' },
    { name: 'Email' },
    { name: 'SMS' },
  ];

  constructor(private swimLaneService: SwimlaneService) {
    this.selectedCell.Value = "  ";
  }

  ngOnInit() {
  }

  addRow() {
    this.rowArray.push(this.newRow)
    this.newRow = {};
  }

  addColumn() {
    this.columnArray.push(this.newColumn)
    this.newColumn = {};
  }

  change(event) {
    console.log(event);
    if (event != "0") {
      this.columnArray.push(event);
      this.newColumn = {};
    }

  }

  
  selectCell(tableCellEvent, row, col, coltype) {

    if (coltype != 'Nr') {

      var selectedLane = new LaneDetails();
      selectedLane.LaneId = row + "" + col;
      selectedLane.LaneType = coltype;

      if (!this.swimLaneService.SwimLaneList.Items.find(x => x.LaneId == selectedLane.LaneId)) {
        this.displayEmailComponent = false;
        this.displaySMSComponent = false;
        this.displayVoiceComponent = false;
        this.displayWebComponent = false;

        if (coltype == "Email") {
          this.createEmailObject(selectedLane);
        }
        if (coltype == "Voice") {
         this.createVoiceObject(selectedLane);
        }
        if (coltype == "SMS") {
          this.createSmsObject(selectedLane);
        }
        if (coltype == "Web") {
          this.createWebObject(selectedLane);
        }

        let elem: Element = document.getElementById(selectedLane.LaneId);
        elem.innerHTML = selectedLane.LaneId;
        console.log(JSON.stringify(this.swimLaneList));
        this.swimLaneService.SwimLaneList.Items.push(selectedLane);
      } 
      else {
        //data is populated
        //display the ng if
        //this can be dealt even more better with routing
        this.displayEmailComponent = selectedLane.LaneType == "Email" ? true : false;
        this.displaySMSComponent = selectedLane.LaneType == "SMS" ? true : false;
        this.displayVoiceComponent = selectedLane.LaneType == "Voice" ? true : false;
        this.displayWebComponent = selectedLane.LaneType == "Web" ? true : false;

        this.swimLaneService.SwimLaneList.Items.filter(x => {
          if (x.LaneId == selectedLane.LaneId) {
            if(selectedLane.LaneType == "Email")
            this.email = x.emailObj;
            if(selectedLane.LaneType == "SMS")
            this.sms = x.smsObj;
            if(selectedLane.LaneType == "Voice")
            this.voice = x.voiceObj;
            if(selectedLane.LaneType == "Web")
            this.web = x.webObj;
          }
        });
      }
    }
  }
  createEmailObject(selectedLane){
    selectedLane.emailObj = new Email();
    selectedLane.emailObj.Id = selectedLane.LaneId
    selectedLane.emailObj.LaneType = selectedLane.LaneType;
    selectedLane.emailObj.Description = "Description";
    selectedLane.emailObj.EmailAddress = "Email Address";
    selectedLane.emailObj.Subject = "Subject";
    selectedLane.emailObj.Body = "Body";
  }

  createVoiceObject(selectedLane){
    selectedLane.voiceObj = new Voice();
    selectedLane.voiceObj.Id = selectedLane.LaneId
    selectedLane.voiceObj.LaneType = selectedLane.LaneType;
    selectedLane.voiceObj.Description = "Description";
    selectedLane.voiceObj.PhoneNumber = "Phone Number";
    selectedLane.voiceObj.ExpectToHear = "Expect To Hear";
    selectedLane.voiceObj.Reply = "Reply";
  }

  createSmsObject(selectedLane){
    selectedLane.smsObj = new Sms();
    selectedLane.smsObj.Id = selectedLane.LaneId
    selectedLane.smsObj.LaneType = selectedLane.LaneType;
    selectedLane.smsObj.Description = "Description";
    selectedLane.smsObj.PhoneNumber = "Phone Number";
    selectedLane.smsObj.Expect = "Expect";
    selectedLane.smsObj.Reply = "Reply";
  }

  createWebObject(selectedLane){
    selectedLane.webObj = new Web();
    selectedLane.webObj.Id = selectedLane.LaneId
    selectedLane.webObj.LaneType = selectedLane.LaneType;
    selectedLane.webObj.Description = "Description";
    selectedLane.webObj.Url = "Url";
    selectedLane.webObj.Expect = "Expect";
    selectedLane.webObj.Action = "Action";
  }
}


export interface Lanes {
  name: string;
}

export class SelectedCell {
  Value: any;
}