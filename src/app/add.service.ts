import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable() export class AddUserService {
    constructor(private http: Http) { }

    addNewUser(name: any,email: any,project: any) {
        this.http
            .get(`http://www.linkedface.in/angular2?l_v=create (ee:Angular2User{name:'${name}',email:'${email}',project:'${project}'}) return ee`)
            .subscribe(response => {
            	let data=response.json().ob[0]._fields[0].properties;
            	console.log(response.json().ob[0]._fields[0].properties);
            	alert(`user is added with following data \n name: ${data.name} \n email: ${data.email} \n project: ${data.project}`);
            },error=>{alert(error)});
    }
}