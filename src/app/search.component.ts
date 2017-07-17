import { Component } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {User} from './user';
import {SearchUserService} from './searchuser.service';

@Component({
  selector: 'search-user',
  providers:[SearchUserService],
  template: `<div id="_add_user_parent_ser">
  	<div id="_tere_liye_duniya">
      <input type="search" id="_search_box_rxjs" [(ngModel)]="searchUserModel" (ngModelChange)="myOwnModel()"  />
    </div>
    <div id="_add_user_parent" *ngFor="let user of (ux | async)">
    <div id="_add_user_child_1" >
      <div id="_d_flex" >
        <font contenteditable="true">{{user.name}}</font>
        <input type="hidden" value="{{user.name}}" />
      </div>
    </div>
    <div id="_add_user_child_2">
      <div id="_d_flex">
        
      </div>
    </div>
    <div id="_add_user_child_3">
      <div id="_d_flex">
        
      </div>
    </div>
    <div id="_add_user_child_4">
      <div id="_d_flex_start">
        
      </div>
    </div>
  </div>
  </div>`,
  styles: ['#_add_user_parent_ser { width:100%; }','#_tere_liye_duniya {width:100%;height:50px}','#_search_box_rxjs {width:300px;height:30px;border:1px solid lightgrey;border-radius:4px;}']
})
export class SearchUserComponent  { 
  searchUserModel: string = 'a';
  ux: Observable<User[]>=new Observable<User[]>();
  constructor(private updateService: SearchUserService){
  }
	 ngOnInit(){
    this.ux=this.updateService.updateUser(this.searchUserModel);
  }
  myOwnModel(){
    this.ux=this.updateService.updateUser(this.searchUserModel);
  }
}
