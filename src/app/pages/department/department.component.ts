import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { APIResponse, EmployeeModel } from 'src/app/Core/models/API.model';
import { DepartmentService } from 'src/app/Core/services/department.service';
import { EmployeeService } from 'src/app/Core/services/employee.service';
import { NaPipe } from 'src/app/shared/pipes/na.pipe';
import { Constant } from 'src/app/Core/constant/Constants';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{
  allDepartmentData: any[] = [];
  employee$: Observable<EmployeeModel[]> | undefined; // used for th async pipe;
  departmentForm!: FormGroup;
  initialDepId:any;
  public Constant = Constant


  constructor(private _deptService: DepartmentService, private _empService: EmployeeService, private _fb: FormBuilder){
    this.employee$ = this._empService.EmployeeList();
    this.employee$.subscribe((res: any) =>{
      this.initialDepId = res[0].employeeId;
      this.departmentForm.patchValue({deptHeadEmpId: this.initialDepId})
    })

    // this.departmentForm = this._fb.group({
    //   deptName: [Validators.required],
    //   deptHead: [Validators.required]
    // }) // for the usig the formBuilder but here we are use the form group and form control;
    
    this.departmentForm = new FormGroup({
      deptName: new FormControl("", [Validators.required]),
      deptHeadEmpId: new FormControl("")
    })
  }

  ngOnInit(){
    this.getAllDeptData()
  }
  getAllDeptData(){
    this._deptService.getAllDepartment().subscribe((res: APIResponse) =>{
      if(res.result){
        this.allDepartmentData = res.data
        
      }else{
        alert(res.message)
      }
    }, error =>{
      alert(JSON.stringify(error))
    })
  }

  onSubmit(){
    console.log(this.departmentForm.value );
    if(this.formButon){
      // this._deptService.updateDepartment(this.deptId, this.departmentForm.value).subscribe((res: any) =>{
      //   this.departmentForm.reset({
      //     deptName: '',           // Reset to empty string
      //     deptHeadEmpId: this.initialDepId     // Reset to null or default employee ID
      //   });
      //   this.getAllDeptData();
      // })
    }else{
      this._deptService.createDepartment(this.departmentForm.value).subscribe((res: any) =>{
        if(res.result){
          alert("Created Successfully")
          this.getAllDeptData();
          this.departmentForm.reset({
            deptName: '',           // Reset to empty string
            deptHeadEmpId: this.initialDepId     // Reset to null or default employee ID
          });
        }else{
          alert(res.message)
        }
        console.log(res);
      }, error =>{
        alert(JSON.stringify(error))
      })
      
    }
  }

  

  deptId: any;
  formButon: boolean = false;
  editDepartment(dept: any){
    console.log(dept, "fghjkl");
    this.deptId = dept.deptId;
    this.formButon = true;
    this.departmentForm.patchValue({
      deptName: dept.deptName,
      deptHeadEmpId: dept.deptHeadEmpId
    })


  }

  removeDept(id: any){
    console.log(id);
   const isDelete = confirm("Are you want to delete");
   if(isDelete){
     this._deptService.deleteDepartment(id).subscribe((res: any) =>{
      if(res.result){
        alert("Department Delete Successfully");
        this.getAllDeptData();
      }else{
        alert(res.message)
      }
     })

   }
  }

}
