import { Component } from '@angular/core';
import {ClickablelistComponent} from './clickablelist.component';
@Component({
  selector: 'my-app',
  template: `<h1>{{message}}</h1><clickable-list [crud]="allOption"></clickable-list>`,
})
export class AppComponent  { 
	message = 'welcome to angular 2 demo with express api crud example';
	allOption: string[] =["create user","update user","search user","delete user"];

}
