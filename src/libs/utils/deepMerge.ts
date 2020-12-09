import { deepClone } from "./deepClone";
import { isArray } from "../type/index";
/**
 * 合并
 * @param {*} target 合并的目标
 * @param {*} merged 被合并的
 */
function deepMerge(target: Object, merged: Object): Object {
  for (let key in merged) {
    if (
      target[key] &&
      typeof target[key] === "object" &&
      !isArray(target[key])
    ) {
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

export { deepMerge };
