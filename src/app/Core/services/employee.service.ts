import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, LoginModel } from '../models/API.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/Constants';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  login(data: LoginModel) : Observable<any>{
    return this._http.post<APIResponse>(environment.API_URL + Constant.API_END_POINTS.LOGIN, data)
  }
  
}
