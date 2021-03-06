import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from './user';

@Injectable() export class SearchUserService {
    constructor(private http: Http) { }

    updateUser(term :string): Observable<User[]>{
       let ar: any =[];
        this.http
            .get(`http://www.linkedface.in/angular2?l_v=match (ee:Angular2User) where ee.name=~'.*.${term}.*' return ee`)
            .subscribe(response => {
                let data: any=response.json().ob;
                console.log(data);
                data.map( (a: any,b: any) =>{
                    ar.push(a._fields[0].properties)
                } )
                
            },error=>{alert(error)});
            return Observable.of(ar);
    }
}