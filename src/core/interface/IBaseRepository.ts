interface IBaseRepository<T> {
  /*
   <summary>
   Thêm mới entity trong DB
   </summary>
   <param name="entity">dữ liệu thêm mới</param>
   <returns >Số lượng dòng được thêm mới</returns>
    */
  get(): Promise<Array<T>>;
  /* 
   <summary>
   Thêm mới entity trong DB
   </summary>
   <param name="entity">dữ liệu thêm mới</param>
   <returns >Số lượng dòng được thêm mới</returns>
  */
  getOne(): Promise<T>;
  /* 
    Thêm mới entity trong DB
    <param name="entity">dữ liệu thêm mới</param>
    <returns >Số lượng dòng được thêm mới</returns>
  */
  create(entity: T): Promise<Number>;
  /* 
    Cập nhật mới entity trong DB
    <param name="entity">dữ liệu mới</param>
    <param name="entityId">Cập nhật theo khóa chính</param>
    <returns >Số lượng dòng được cập nhật mới</returns>
  */
  update(entityId: Number, entity: T): Promise<Number>;
  /* 
    Xóa entity trong DB
    <param name="entityId">Xóa theo khóa chính</param>
    <returns >Số lượng dòng được Xóa</returns>
  */
  delete(entityId: Number): Promise<Number>;
}
