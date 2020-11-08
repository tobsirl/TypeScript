class Sorter {
  constructor(public collection: number[]) {

    sort(): void {

    }

    print(): number[] {
      return this.collection
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
