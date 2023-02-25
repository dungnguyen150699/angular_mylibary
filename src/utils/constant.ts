import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { Oauth2RedirectComponent } from '../app/oauth2-redirect/oauth2-redirect.component';
import { HttpHeaders } from "@angular/common/http";

const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
}

export const HEADER_COMON = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
};  

export const ACCESS_TOKEN:string = 'accessToken';

export class API_URL{
    static API_LOGIN : string  = "http://localhost:8083/auth/login";
    
}