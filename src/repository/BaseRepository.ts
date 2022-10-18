

export class BaseRepository<T> implements IBaseRepository<T>{
    protected _connectionString: string;
    protected _tableName: string;

    constructor(tableName: string){
        this._connectionString = "";
        this._tableName = tableName;
    }
    get(): T[] {
        throw new Error("Method not implemented.");
    }
    getOne(): T {
        throw new Error("Method not implemented.");
    }
    create(entity: T): Number {
        throw new Error("Method not implemented.");
    }
    update(entityId: Number, entity: T): Number {
        throw new Error("Method not implemented.");
    }
    delete(entityId: Number): Number {
        throw new Error("Method not implemented.");
    }

}