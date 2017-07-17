import { Component,Input,OnInit,ElementRef } from '@angular/core';
import {User} from './user';
import {UpdateUserService} from './update.service';
import {Observable} from "rxjs/Rx";
import {UpdatePopupComponent} from './popupedit.component';

@Component({
  selector: 'update-user',
  providers:[UpdateUserService],
  template: `<div *ngIf = flagType ><update-popup [updateData]="us"></update-popup></div><div id="_add_user_parent" *ngFor="let user of (ux | async)">
  	<div id="_add_user_child_1" >
  		<div id="_d_flex" >
  			<font contenteditable="true">{{user.name}}</font>
        <input type="hidden" value="{{user.name}}" />
  		</div>
  	</div>
  	<div id="_add_user_child_2">
  		<div id="_d_flex">
  			<font contenteditable="true">{{user.email}}</font>
        <input id="_maulaya_email" type="hidden" value="{{user.email}}" />
  		</div>
  	</div>
  	<div id="_add_user_child_3">
  		<div id="_d_flex">
  			<font contenteditable="true" (blur)="myFirstBlur($event)">{{user.project}}</font>
        <input type="hidden" value="{{user.project}}" />
  		</div>
  	</div>
  	<div id="_add_user_child_4">
  		<div id="_d_flex_start">
        <input type="button" value="Sync Db" (click)="myClicking($event)" />
  		</div>
  	</div>
  </div>`,
  styles: ['#_project_add_user { width:60%;height:50%;border-radius:4px;border:1px solid lightgrey }','#_email_add_user { width:60%;height:50%;border-radius:4px;border:1px solid lightgrey }','#_name_add_user { width:60%;height:50%;border-radius:4px;border:1px solid lightgrey }','#_add_user_parent { width:80%;height:60px; }','#_add_user_child_1 { width:25%;height:100%;display:inline;float:left }','#_add_user_child_2 { width:25%;height:100%;display:inline;float:left }','#_add_user_child_3 { width:25%;height:100%;display:inline;float:left }','#_add_user_child_4 { width:25%;height:100%;display:inline;float:left }','#_d_flex { width:100%;height:100%;display:flex;justify-content:center;align-items:center }','#_d_flex_start { width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center }']
})
export class UpdateUserComponent implements OnInit  { 
	//@Input("allU") allu:User[];
  //;
  us: User={name:"",email:"",project:""};
  flagType: boolean =false;
  nameModel: string ='';
  ux: Observable<User[]>=new Observable<User[]>();
  constructor(private updateService: UpdateUserService){
  }

  ngOnInit(){
    this.ux=this.updateService.updateUser();
  }

  myFirstBlur(evt: any){
    evt.preventDefault();
    alert(evt.target.textContent)
  }

  myClicking(evt: any){
    evt.preventDefault();
    evt.stopPropagation();
    this.flagType = !this.flagType;
  }
}
