/**
 * 深拷贝，默认parse stringify
 * @param object 对象
 * @param recursion 标识符
 */
function deepClone(object: Object, recursion = false): Object {
  if (!object) return object;

  const { parse, stringify } = JSON;

  if (!recursion) return parse(stringify(object));

  const clonedObj = object instanceof Array ? [] : {};

  if (object && typeof object === "object") {
    for (let key in object) {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(key)) {
        if (object[key] && typeof object[key] === "object") {
          clonedObj[key] = deepClone(object[key], true);
        } else {
          clonedObj[key] = object[key];
        }
      }
    }
  }

  return clonedObj;
}

/**
 * 合并
 * @param {*} target 合并的目标
 * @param {*} merged 被合并的
 */
function deepMerge(target: Object, merged: Object): Object {
  for (let key in merged) {
    if (target[key] && typeof target[key] === "object") {
      deepMerge(target[key], merged[key]);

      continue;
    }

    if (typeof merged[key] === "object") {
      target[key] = deepClone(merged[key], true);

      continue;
    }

    target[key] = merged[key];
  }

  return target;
}

export { deepMerge, deepClone };
