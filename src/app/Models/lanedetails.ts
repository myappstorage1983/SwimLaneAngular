import {Email} from '../Models/email'; 
import { Sms } from './sms';
import { Web } from './web';
import { Voice } from './voice';
export class LaneDetails {
    LaneId: string;
    LaneType: string;
    emailObj:Email;
    smsObj:Sms;
    webObj:Web
    voiceObj:Voice;
  }