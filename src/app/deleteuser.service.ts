import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from './user';

@Injectable() export class DeleteUserService {
    constructor(private http: Http) { }

    updateUser(term :string): Observable<User[]>{
       let ar: any =[];
        this.http
            .get(`http://www.linkedface.in/angular2?l_v=match (ee:Angular2User) where ee.email='${term}' delete ee return null`)
            .subscribe(response => {
                alert("user deleted")
                
            },error=>{alert(error)});
            return Observable.of(ar);
    }
}