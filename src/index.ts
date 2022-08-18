export class MySet<T> implements Set<T> {
  map: Map<T, T> = new Map();

  constructor(iterable: Iterable<T>);
  constructor();
  constructor(iterable: null);
  constructor(iterable?: null | Iterable<T>) {
    if (!iterable) {
      return;
    }
    for (const value of iterable) {
      this.add(value);
    }
  }
  public get size(): number {
    return this.map.size;
  }
  add(value: T): this {
    this.map.set(value, value);
    return this;
  }
  clear(): void {
    this.map.clear();
  }
  delete(value: T): boolean {
    return this.map.delete(value);
  }
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: any
  ): void {
    this.map.forEach((value, key, map) => {
      callbackfn(key, key, this);
    }, thisArg);
  }
  has(value: T): boolean {
    return !!this.map.get(value);
  }
  entries(): IterableIterator<[T, T]> {
    return new SetEntries(this.map);
  }
  keys(): IterableIterator<T> {
    return this.map.keys();
  }
  values(): IterableIterator<T> {
    return this.map.keys();
  }
  [Symbol.iterator](): IterableIterator<T> {
    return this.keys();
  }
  [Symbol.toStringTag]: string = "Set";
}
class SetEntries<T> implements IterableIterator<[T, T]> {
  private mapEntries: IterableIterator<[T, T]>;
  constructor(map: Map<T, T>) {
    this.mapEntries = map.entries();
  }
  [Symbol.iterator](): IterableIterator<[T, T]> {
    return this.mapEntries;
  }
  next(...args: [] | [undefined]): IteratorResult<[T, T], any> {
    return this.mapEntries.next(...args);
  }
}
