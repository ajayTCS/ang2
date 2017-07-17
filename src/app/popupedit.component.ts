import { Component,Input, Output, EventEmitter} from '@angular/core';
import { User } from './user';
import { UpdateUserServicePopup } from './popupedit.service';
import {Observable} from "rxjs/Rx";
@Component({
  selector: 'update-popup',
  providers:[UpdateUserServicePopup],
  template: `<div id="_add_user_parent">
  	<div id="_add_user_child_1">
  		<div id="_d_flex">
  			<input type="text" id="_name_add_user" value="{{ud.name}}" [(ngModel)]="changename" />
  		</div>
  	</div>
  	<div id="_add_user_child_2">
  		<div id="_d_flex">
  			<input type="text" id="_project_add_user" value="{{ud.email}}" [(ngModel)]="changeemail" />
  		</div>
  	</div>
  	<div id="_add_user_child_3">
  		<div id="_d_flex">
  			<input type="text" id="_project_add_user" value="{{ud.project}}" [(ngModel)]="changeproject" />
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
export class UpdatePopupComponent  { 
	 ucv: Observable<User[]>=new Observable<User[]>();
  @Input("updateData") ud: User={name:"",email:"",project:""};
  changename: any =this.ud.name;
  changeproject: any =this.ud.project;
  changeemail: any =this.ud.email;
  
	constructor(private addService: UpdateUserServicePopup){

	}

	addUserSyncDb(evt: any){
    this.addService.updateUserSave(this.changename,this.changeemail,this.changeproject);
		//this.addService.addNewUser(this.addname,this.addemail,this.addproject);
		//console.log(this.addname);
		//console.log(this.addemail);
		//console.log(this.addproject);
	}
}
