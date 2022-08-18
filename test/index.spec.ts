import { MySet } from "../src";
test("constructor", () => {
  const set = new MySet([1, 2, 3]);

  expect(set.has(1)).toBe(true);
});
test("size", () => {
  new Set();
  const set1 = new MySet();
  const object1 = {};

  set1.add(42);
  set1.add("forty two");
  set1.add("forty two");
  set1.add(object1);

  expect(set1.size).toBe(3);
});
//按F5调试错误
test("add", () => {
  const set = new MySet<number>();
  set.add(1);
  set.add(2);
  set.add(1);

  expect(set.has(1)).toBe(true);
  expect(set.has(2)).toBe(true);
});
test("clear", () => {
  const set = new MySet();
  set.add(1);
  set.add(2);
  set.add(1);

  set.clear();

  expect(set.has(1)).toBe(false);
  expect(set.has(2)).toBe(false);
});
test("delete", () => {
  const set = new MySet();
  set.add(1);
  set.add(2);

  set.delete(1);

  expect(set.has(1)).toBe(false);
  expect(set.has(2)).toBe(true);
});
test("foreach", () => {
  const vs1 = [1, 2, 2, 3, 2];
  const vs2 = [1, 2, 3];
  const set = new MySet(vs1);
  let index = 0;
  set.forEach((value, value1, set) => {
    if (index === 0) {
      expect(set).toBe(set);
    }
    expect(value).toBe(vs2[index]);
    expect(value1).toBe(vs2[index]);
    index++;
  });
});
test("has", () => {
  const set = new MySet([1, 2, 3]);
  expect(set.has(0)).toBe(false);
  expect(set.has(1)).toBe(true);
});
test("entries", () => {
  const vs1 = [1, 2];
  const mySet = new MySet(vs1);
  const entriesValue = mySet.entries();

  expect(entriesValue.next()).toStrictEqual({
    value: [1, 1],
    done: false,
  });
  expect(entriesValue.next()).toStrictEqual({
    value: [2, 2],
    done: false,
  });
  expect(entriesValue.next()).toStrictEqual({
    value: undefined,
    done: true,
  });
  expect(entriesValue.next()).toStrictEqual({
    value: undefined,
    done: true,
  });
});

test("keys", () => {
  const vs1 = [1, 2];
  const mySet = new MySet(vs1);
  const keysResult = mySet.keys();

  expect(keysResult.next()).toStrictEqual({
    value: 1,
    done: false,
  });
  expect(keysResult.next()).toStrictEqual({
    value: 2,
    done: false,
  });
  expect(keysResult.next()).toStrictEqual({
    value: undefined,
    done: true,
  });
});
test("values", () => {
  const vs1 = [1, 2];
  const mySet = new MySet(vs1);
  const valuesResult = mySet.values();

  expect(valuesResult.next()).toStrictEqual({
    value: 1,
    done: false,
  });
  expect(valuesResult.next()).toStrictEqual({
    value: 2,
    done: false,
  });
  expect(valuesResult.next()).toStrictEqual({
    value: undefined,
    done: true,
  });
});
test("iterator", () => {
  const vs1 = ["1", "2", 1, 2, "1"];

  const mySet = new MySet(vs1);

  const exVs2 = ["1", "2", 1, 2];
  expect([...mySet]).toStrictEqual(exVs2);
});
test("stringToTag", () => {
  expect(new MySet().toString()).toBe(new Set().toString());
});
