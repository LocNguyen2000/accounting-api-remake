interface IEmployeeRepository {
    filterData(pageIndex: Number, pageSize: Number, filter?: String): Object; 
}