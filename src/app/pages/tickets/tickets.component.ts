import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { APIResponse, Department } from 'src/app/Core/models/API.model';
import { DepartmentService } from 'src/app/Core/services/department.service';
import { EmployeeService } from 'src/app/Core/services/employee.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit{

  deptList$: Observable<Department[]> | undefined;
  initialDeptId: any;
  addTicketPopup: boolean = false;
  ticketForm! : FormGroup
  constructor(private _deptService: DepartmentService, private _employeeService: EmployeeService){
    this.deptList$ = this._deptService.getDeptList();
    this.deptList$.subscribe((res: any) =>{
      console.log(res, "asdfghjkl;");
      this.initialDeptId = res[0].deptId;
      this.ticketForm.patchValue({deptId: this.initialDeptId})
    });


    this.ticketForm = new FormGroup({
     
      deptId: new FormControl(""),
      severity: new FormControl(""),
      requestDetails: new FormControl("")

    })
  }
  
  ngOnInit() {

  }
  addTicketForm(){
    this.addTicketPopup = !this.addTicketPopup
  }
  closePopup(){
    this.addTicketPopup = false;
  }

  addTicket(){
    // console.log(this.ticketForm.value);
    this._employeeService.createNewTickets(this.ticketForm.value).subscribe((res: APIResponse) =>{
      console.log(res, "asdfghjkl");
    })
  }

}
