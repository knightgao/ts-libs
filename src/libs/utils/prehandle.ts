/**
 * 将对象转为formData对象，注意这里没有处理文件，请自行添加
 * const params = Obj2Formdata(paramsObj);
 * params.append('file',file);
 * 
 * @param object
 */
function Obj2Formdata(object): FormData {
  const result = new FormData();
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.append(key, object[key]);
    }
  }
  return result;
}

export { Obj2Formdata };
