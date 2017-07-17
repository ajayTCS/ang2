import { Component } from '@angular/core';
import { DeleteUserService } from './deleteuser.service';
@Component({
  selector: 'delete-user',
  providers:[DeleteUserService],
  template: `<div id="_add_user_parent_ser">
  	<div id="_tere_liye_duniya">
      <input type="search" id="_del_box_rxjs" placeholder="type user email to delete user" [(ngModel)]="delModel" /><input type="button" value="Delete" (click)="myOfferClick($event)" />
    </div>
  </div>`,
  styles: ['#_add_user_parent_ser { width:100%; }','#_tere_liye_duniya {width:100%;height:50px}','#_del_box_rxjs {width:300px;height:30px;border:1px solid lightgrey;border-radius:4px;vertical-align:center;}']
})
export class DeleteUserComponent  { 
	delModel: string = '';
	constructor(private nabiya: DeleteUserService){

	}
	myOfferClick(evt: any){
		evt.preventDefault();
		evt.stopPropagation();
		this.nabiya.updateUser(this.delModel);
	}
}
