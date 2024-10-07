import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/Constants';
import { map, Observable } from 'rxjs';
import { APIResponse, Department } from '../models/API.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService implements OnInit{

  constructor(private _http: HttpClient) {}
  ngOnInit(){
   
  }

  getAllDepartment() : Observable<APIResponse>{
    return this._http.get<APIResponse>(environment.API_URL + Constant.API_END_POINTS.GET_DEPARTMENTS);
  }

  getDeptList() : Observable<Department[]>{
    return this._http.get<Department[]>(environment.API_URL + Constant.API_END_POINTS.GET_DEPARTMENTS).pipe(map((res: any) =>{
      return res.data;
    }));
  }

  createDepartment(data: any) : Observable<APIResponse>{
    return this._http.post<APIResponse>(environment.API_URL + Constant.API_END_POINTS.CRAETE_DEPARTMENTS, data);
  }


  updateDepartment(id: any,data: Department) : Observable<APIResponse>{
    return this._http.put<APIResponse>(environment.API_URL + Constant.API_END_POINTS.UPDATE_DEPARTMENTS + "/" + id, data);
  }

  deleteDepartment(id: number) : Observable<APIResponse>{
    return this._http.delete<APIResponse>(environment.API_URL + Constant.API_END_POINTS.DELETE_DEPARTMENTS + id)
  }

  

}
