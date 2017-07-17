import { Component,Input } from '@angular/core';

import { AddUserComponent } from './add.component';

import { UpdateUserComponent } from './update.component';

import { SearchUserComponent } from './search.component';

import { DeleteUserComponent } from './delete.component';

import { User } from './user';

@Component({
  selector: 'clickable-list',
  template: `<ul>
  <li id="litypeof"><div id="add_u_unq_id" (click)="addUserClk($event)">{{crud1[0]}}</div><div id="hello" *ngIf=isLoadedAddUser ><add-user></add-user></div></li>
  <li id="litypeof"><div id="add_u_unq_id_u" (click)="updateUserClk($event)">{{crud1[1]}}</div><div id="hello_1" *ngIf=isLoadedUpdateUser ><update-user></update-user> </div></li>
  <li id="litypeof"><div id="add_u_unq_id_s" (click)="searchUserClk($event)">{{crud1[2]}}</div><div id="hello_2" *ngIf=isLoadedSearchUser ><search-user></search-user></div></li>
  <li id="litypeof"><div id="add_u_unq_id_d" (click)="deleteUserClk($event)">{{crud1[3]}}</div><div id="hello_3" *ngIf=isLoadedDeleteUser><delete-user></delete-user></div></li>
  </ul>`,
  styles: ['#hello { color: red; }','#litypeof { font-size:30px; }','#add_u_unq_id { cursor:pointer; }','#add_u_unq_id_d { cursor:pointer; }','#add_u_unq_id_u { cursor:pointer; }','#add_u_unq_id_s { cursor:pointer; }']
})
export class ClickablelistComponent  { 
	message: string='Please click on following links to take appropriate action';
	binderAlu: User[]=[];
	@Input("crud") crud1:string[];
	isLoadedAddUser: boolean =false;
	isLoadedUpdateUser: boolean =false;
	isLoadedSearchUser: boolean =false;
	isLoadedDeleteUser: boolean =false;
	addUserClk(evt: any){
		evt.preventDefault();
		this.isLoadedAddUser=!this.isLoadedAddUser;
	}
	updateUserClk(evt: any){
		evt.preventDefault();
		this.isLoadedUpdateUser=!this.isLoadedUpdateUser;
	}
	searchUserClk(evt: any){
		evt.preventDefault();
		this.isLoadedSearchUser=!this.isLoadedSearchUser;
	}
	deleteUserClk(evt: any){
		evt.preventDefault();
		this.isLoadedDeleteUser=!this.isLoadedDeleteUser;
	}
}
