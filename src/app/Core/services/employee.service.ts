import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, EmployeeModel, LoginModel } from '../models/API.model';
import { map, Observable, retry } from 'rxjs';
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

  EmployeeList() : Observable<EmployeeModel[]>{
    return this._http.get<EmployeeModel[]>(environment.API_URL + Constant.API_END_POINTS.GET_EMPLOYEES).pipe(map((res:any) =>{
      return res.data
    }));
  }

  getAllEmployee() : Observable<APIResponse>{
    return this._http.get<APIResponse>(environment.API_URL + Constant.API_END_POINTS.GET_EMPLOYEES);
  }

  createEmployee(data: EmployeeModel): Observable<APIResponse>{
    return this._http.post<APIResponse>(environment.API_URL + Constant.API_END_POINTS.CREATE_EMPLOYEE, data)
  }

  updateEmpData(data: EmployeeModel): Observable<APIResponse>{
    return this._http.put<APIResponse>(environment.API_URL + Constant.API_END_POINTS.UPDATE_EMPLOYEE, data);
  } 

  deleteEmployee(empId: any): Observable<APIResponse>{
    return this._http.delete<APIResponse>(environment.API_URL + Constant.API_END_POINTS.DELETE_EMPLOYEE + empId)
  }
  
}
