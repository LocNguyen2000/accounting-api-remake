import { Employee } from "../entity/Employee";

interface IEmployeeRepository extends IBaseRepository<Employee> {
    filterData(pageIndex: Number, pageSize: Number, filter?: String): Promise<Object>; 
}