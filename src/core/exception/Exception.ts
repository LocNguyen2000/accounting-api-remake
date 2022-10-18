export class MyException extends Error{
    data?: any
    status: Number

    constructor(_status: Number, _message: string, _data: any = null ){
        super(_message);
        
        this.data = _data;
        this.status = _status
    }
}