import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, HEADER_COMON } from 'src/utils/constant';

@Injectable({
    providedIn:'root',
})
export class LoginService {
    observer = {
        next: (val:any) => console.log(val),
        error: (err:any) => console.log(err),
        complete: () => console.log('complete'),
    };

    constructor(private http: HttpClient) { }

    auth = (user:any) =>{
        return this.http.post(API_URL.API_LOGIN,user,HEADER_COMON)
    }
}