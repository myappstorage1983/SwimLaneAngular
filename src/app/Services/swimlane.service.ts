import { Injectable } from '@angular/core';
import {LaneList} from '../Models/lanelist'

@Injectable({
  providedIn: 'root'
})
export class SwimlaneService {
 public SwimLaneList:LaneList ;
  
  constructor() {
   this.SwimLaneList = new LaneList();
   this.SwimLaneList.Items=[];
   }

  
}

