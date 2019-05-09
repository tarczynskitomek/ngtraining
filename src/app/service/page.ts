export class Page<T> {

  constructor(public readonly items: T[],
              public readonly number: number,
              public readonly size: number,
              public readonly totalElements: number) {}
}
