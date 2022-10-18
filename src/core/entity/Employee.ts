import { BaseEntity } from "./BaseEntity";

export interface Employee extends BaseEntity{
    employeeId: Number;
    employeeCode: String;
    firstName?: String;
    lastName?: String;
    employeeName: String;
    dateOfBirth: Date;
    genderType?: Date;
    genderName?: Date;
    phoneNumber?: Date;
    email?: String;
    contactAdress?: String;
    workStatus?: Number;
    workStatusName? : String;
    
}