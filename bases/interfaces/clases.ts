(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutanPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    constructor(public age: number, public name: string, public realName: string) {}

    mutanPower(): string {
      return `${this.name} ${this.realName}`;
    }
  }
})();
