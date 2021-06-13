interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

class InMemoryDatabase implements Database {

}
