import { deepMerge } from "./index";
describe("测试合并", () => {
  test("deepMerge 对象与对象的合并 target为空的情况", () => {
    const target = {};
    const data = {
      funcModal: ["work", "tjpz", "detail", "history"],
      title: "塔机实时状态",
    };
    expect(deepMerge(target, data)).toEqual({
      funcModal: ["work", "tjpz", "detail", "history"],
      title: "塔机实时状态",
    });
  });

  test("deepMerge 对象与对象的合并 合入对象为空的情况", () => {
    const target = {
      funcModal: ["work", "tjpz", "detail", "history"],
      title: "塔机实时状态",
    };
    const data = {};
    expect(deepMerge(target, data)).toEqual({
      funcModal: ["work", "tjpz", "detail", "history"],
      title: "塔机实时状态",
    });
  });

  test("deepMerge 对象与对象的合并 对象中包含数组的话 直接替换", () => {
    const target = {
      funcModal: ["work", "tjpz", "detail", "history"],
      title: "塔机实时状态",
    };
    const data = {
      funcModal: ["apple", "222"],
      title: "塔机实时状态",
    };
    expect(deepMerge(target, data)).toEqual({
      funcModal: ["apple", "222"],
      title: "塔机实时状态",
    });
  });
});
