import {Router, Request, Response, NextFunction} from "express";
import { EmployeeRepository } from "../../repository/EmployeeRepository";
import { MyException } from "../../core/exception/Exception";

const router = Router();

export default (app: Router, employeeRepo: EmployeeRepository) => {
    app.use('/employee', router);
    router.get('/', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const entities = await employeeRepo.get();

            if (entities == null || entities.length == 0){
                let { status, message } = new MyException(204, 'Employee not found')

                return res.status(204).json({status, message});
            }

            return res.status(200).json(entities)
        } catch (error: any) {
            console.log(error.message);

            let {status, message} = new MyException(500, 'Server internal error. Contact for support.')

            return res.status(500).json({status, message});
        }
    })
}