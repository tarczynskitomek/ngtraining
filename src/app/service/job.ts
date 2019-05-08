export class Job {

  constructor(public readonly id: number,
              public readonly code: string,
              public readonly name: string,
              public readonly description: string,
              public readonly validFrom: string) {}
}
