import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from './user';

@Injectable() export class UpdateUserServicePopup {
    constructor(private http: Http) { }

    updateUserSave(name: any,email: any,project: any){
       let ur: User=new User();
        this.http
            .get(`http://www.linkedface.in/angular2?l_v=match (ee:Angular2User) where ee.email="${email}" set ee.name="${name}",ee.project="${project}" return ee`)
            .subscribe(response => {
                let data=response.json().ob[0]._fields[0].properties;
                console.log(response.json().ob[0]._fields[0].properties);
                alert(`user is updated with following data \n name: ${data.name} \n email: ${data.email} \n project: ${data.project}`);
                
            },error=>{alert(error)});
    }
}