export interface APIResponse{
    message: string;
    result: boolean;
    data: any;
}

export class Department{
    deptId: number;
    deptName: string;
    deptHeadEmpId: number;
    deptHeadNae: string;
    createdDate: Date    
     
    constructor(){
        this.deptId = 0,
        this.deptHeadEmpId = 0,
        this.deptName = "",
        this.deptHeadNae = "",
        this.createdDate = new Date()
    }
}

export class LoginModel{
    emailId: string;
    password: string;

    constructor(){
        this.emailId = "";
        this.password = ""
    }
}

export class EmployeeModel{
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    deptName: string;
    password: string;
    gender: string;
    role: string;
    constructor(){
        this.employeeId = 0;
        this.employeeName = "";
        this.contactNo = "";
        this.emailId = "";
        this.deptId = 0;
        this.deptName = ""
        this.password = "";
        this.gender = "";
        this.role = "";
    }
}

// export class NewTicket{
//     ticketId: number
//     ticketNo: string;
//     employeeId: number;
//     createdDate: Date;
//     expectedEndDate: Date;
//     severity: string;
//     deptId: number;
//     completeDate: Date;
//     assignedTo: number;
//     state: string;
//     requestDetails: string;

//     constructor(){
//         this.ticketId = 0;
//         this.ticketNo = "";
//         this.employeeId = 0;
//         this.createdDate = new Date();
//         this.expectedEndDate = new Date();
//         this.severity = '';
//         this.deptId = 0;
//         this.completeDate = new Date();
//         this.assignedTo = 0;
//         this.state = "";
//         this.requestDetails = "";
//     }
// }

export class NewTicketObject{
  employeeId: number;
  severity: string;
  deptId: number;
  state: string;
  requestDetails: string;

  constructor(){
    this.employeeId = 0;
    this.severity = "";
    this.deptId = 0;
    this.state = "";
    this.requestDetails = "";
  }

}