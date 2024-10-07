import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { APIResponse, Department, EmployeeModel } from 'src/app/Core/models/API.model';
import { DepartmentService } from 'src/app/Core/services/department.service';
import { EmployeeService } from 'src/app/Core/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  deptList$: Observable<Department[]> | undefined;
  employeelist: EmployeeModel[] = [];
  empForm: boolean = false;

  // employee form
  employeeForm!: FormGroup;
  initialDeptId: any;
  updateBtn: boolean = false;

  constructor(private _deptService: DepartmentService, private _empService: EmployeeService){
    // using the async pipe for the emit the data contineously.
    this.deptList$ = this._deptService.getDeptList();
    this.deptList$.subscribe((res: any) =>{
      this.initialDeptId = res[0].deptId;
      this.employeeForm.patchValue({deptId: this.initialDeptId})
    });

    this.employeeForm = new FormGroup({
      employeeName: new FormControl("", [Validators.required]),
      contactNo: new FormControl("", [Validators.required]),
      emailId: new FormControl("", [Validators.required, Validators.email]),
      gender: new FormControl("Male", [Validators.required]),
      deptId: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      role: new FormControl("admin", [Validators.required]),

    })
  }

  ngOnInit(){
    this.getEmpAllData();
  }

  getEmpAllData(){
    this._empService.getAllEmployee().subscribe((res: APIResponse) =>{
      this.employeelist = res.data;
    })
  }

  openEmpFrm(){
    this.empForm = true;
  }
  close(){
    this.empForm = false;
  }

  empFormSubmit(){

    try {
      if(this.updateBtn){
        this._empService.updateEmpData(this.employeeForm.value).subscribe((res: APIResponse) =>{
          alert("Update Successfull");
          this.empForm = false;
          this.getEmpAllData();
        })
      }else{
        this._empService.createEmployee(this.employeeForm.value).subscribe((res: APIResponse) =>{
          console.log(res, "save");
          const createPopup = confirm("Employee Added Successfully");
          if(createPopup){
            this.employeeForm.reset({
              employeeName: "",
              contactNo: "",
              emailId: "",
              gender: "",
              deptId: this.initialDeptId,
              password: "",
              role: "Admin", 
            })
            this.empForm = false;
            this.getEmpAllData();
          }else{
            alert(res.message)
          }
        })
      }
    } catch (error) {
      
    }


    console.log(this.employeeForm.value, "lkjhg");
    
  }

  empId: any;
  editEmp(data:EmployeeModel){
    console.log(data, "83, employee");
    this.empForm = true;
    this.updateBtn = true;
    this.empId = data.employeeId;
    this.employeeForm.patchValue({
      employeeName: data.employeeName,
      contactNo: data.contactNo,
      emailId: data.emailId,
      gender: data.gender || '',  // Handle missing gender gracefully
      deptId: data.deptId,
      password: '', // Don't populate the password, leave it blank for updating
      role: data.role,   
    });
  }

  deleteEmp(id: any){
    console.log(id);
    const delPopup = confirm("Are You Sure Want to delete");
    if(delPopup){
      this._empService.deleteEmployee(id).subscribe((res: any) =>{
        if(res.result){
          alert("Employee Deleted Successfully")
        }else{
          alert(res.message);
        }
      })
    }
  }

}
