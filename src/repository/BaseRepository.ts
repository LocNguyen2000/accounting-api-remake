

export class BaseRepository<T> implements IBaseRepository<T>{
    protected _connectionString: string;
    protected _tableName: string;

    constructor(entity: T){
        this._connectionString = "";
        this._tableName = typeof entity;
    }
    get(): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    getOne(): Promise<T> {
        throw new Error("Method not implemented.");
    }
    create(entity: T): Promise<Number> {
        throw new Error("Method not implemented.");
    }
    update(entityId: Number, entity: T): Promise<Number> {
        throw new Error("Method not implemented.");
    }
    delete(entityId: Number): Promise<Number> {
        throw new Error("Method not implemented.");
    }
   
}