class Stack<T> {
    items: T[];
  
    constructor() {
      this.items = [];
    }
  
    push(value: T): void {
      this.items.push(value);
    }
  
    pop(): T | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items.pop();
    }
  
    isEmpty(): boolean {
      if(this.items.length === 0)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }
const s = new Stack();
s.push(5)
s.push(6)
console.log(s.isEmpty());
console.log(`${s.items}`);
const s2 = new Stack();
s2.push('A')
s2.push('B')
s2.pop()
console.log(`${s2.items}`);