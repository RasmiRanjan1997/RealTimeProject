export interface APIResponse{
    message: string;
    result: boolean;
    data: any;
}

export class Department{
    deptId: number;
    deptName: string;
    deptHeadEmpId: number;
    createdDate: Date    
     
    constructor(){
        this.deptId = 0,
        this.deptHeadEmpId = 0,
        this.deptName = "",
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