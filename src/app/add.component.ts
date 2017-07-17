import { Component } from '@angular/core';

import { AddUserService } from './add.service';

@Component({
  selector: 'add-user',
  providers:[AddUserService],
  template: `<div id="_add_user_parent">
  	<div id="_add_user_child_1">
  		<div id="_d_flex">
  			<input type="text" id="_name_add_user" placeholder="enter name" [(ngModel)]="addname" />
  		</div>
  	</div>
  	<div id="_add_user_child_2">
  		<div id="_d_flex">
  			<input type="text" id="_email_add_user" placeholder="enter email" [(ngModel)]="addemail" />
  		</div>
  	</div>
  	<div id="_add_user_child_3">
  		<div id="_d_flex">
  			<input type="text" id="_project_add_user" placeholder="enter project" [(ngModel)]="addproject" />
  		</div>
  	</div>
  	<div id="_add_user_child_4">
  		<div id="_d_flex_start">
  			<input type="button" value="Sync Db" (click)="addUserSyncDb($event)" />
  		</div>
  	</div>
  </div>`,
  styles: ['#_project_add_user { width:60%;height:50%;border-radius:4px;border:1px solid lightgrey }','#_email_add_user { width:60%;height:50%;border-radius:4px;border:1px solid lightgrey }','#_name_add_user { width:60%;height:50%;border-radius:4px;border:1px solid lightgrey }','#_add_user_parent { width:80%;height:50px; }','#_add_user_child_1 { width:25%;height:100%;display:inline;float:left }','#_add_user_child_2 { width:25%;height:100%;display:inline;float:left }','#_add_user_child_3 { width:25%;height:100%;display:inline;float:left }','#_add_user_child_4 { width:25%;height:100%;display:inline;float:left }','#_d_flex { width:100%;height:100%;display:flex;justify-content:center;align-items:center }','#_d_flex_start { width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center }']
})
export class AddUserComponent  { 
	addname: any;
	addemail: any;
	addproject: any;
	constructor(private addService: AddUserService){

	}
	addUserSyncDb(evt: any){
		this.addService.addNewUser(this.addname,this.addemail,this.addproject);
		//console.log(this.addname);
		//console.log(this.addemail);
		//console.log(this.addproject);
	}
}
