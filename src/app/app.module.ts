import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwimlaneComponent } from './Components/swimlane/swimlane.component';
import { VoiceComponent } from './Components/voice/voice.component';
import { SmsComponent } from './Components/sms/sms.component';
import { EmailComponent } from './Components/email/email.component';
import { WebComponent } from './Components/web/web.component';


@NgModule({
  declarations: [
    AppComponent,
    SwimlaneComponent,
    VoiceComponent,
    SmsComponent,
    EmailComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
