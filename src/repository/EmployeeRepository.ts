import { Employee } from "../core/entity/Employee";
import { BaseRepository } from "./BaseRepository";



export class EmployeeRepository extends BaseRepository<Employee>{
    filterData(pageIndex: Number, pageSize: Number, filter?: String | undefined): Object {
        throw new Error("Method not implemented.");
    }
    
}