import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        // return this.http.post("http://mentors4me-api-env.364ypmurik.eu-central-1.elasticbeanstalk.com/api/sessions",
        //                       JSON.stringify({ email: username, password: password }));
        let body = JSON.stringify({ email: username, password: password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post("http://mentors4me-api-env.364ypmurik.eu-central-1.elasticbeanstalk.com/api/sessions", body, options);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
