/**
 * Terminar la implementación de la clase PriorityStack 
 * en Javascript donde dice //TODO finish method.
 * 
 * Como toda pila el último elemento en entrar es el primero en salir.
 * 
 * Pero en una pila de prioridad los elementos con valor de prioridad 
 * más bajo salen primero. Y en los elementos con igual prioridad, 
 * el último elemento en entrar es el primero en salir.
 * 
 * Internamente la informacion se almacena en items doblemente enlazados, 
 * con este formato:  [ key, priority, prev, next ]
 * 
 * La propiedad “top” es el item que está en la cima de la pila, 
 * el primero que se consumirá.
 * 
 * La propiedad “items” se usa para tener acceso directo a cada 
 * uno de los items, para poder eliminar o actualizar elementos 
 * con mayor facilidad.
 */

class PriorityStack {
  constructor() {
    this.top = null;
    this.items = {};
    this.stack = [];
  }

  Empty() {
    // return this.top === null;
    return this.stack.length === 0;
  }

  /**
   *
   * @returns {array}
   */
  Peek() {
    return [this.top[0], this.top[1]];
  }

  /**
   * Rremoves from the top of de stak
   * @returns {array}
   */
  Pop() {
    // var top = this.top;
    // this.top = this.top[3];
    // if (this.top) {
    //   this.top[2] = null;
    // }
    // return [top[0], top[1]];
    const [...item] = this.stack[0];
    this.Remove(item[0]);
    return [item[0], item[1]];
  }

  /**
   *
   * @param {string} key
   * @returns {array}
   */
  Remove(key) {
    //TODO finish method
    const { [key]: removedKey, ...items } = this.items;
    this.items = items;
    this.stack = this.stack.filter((item) => item[0] !== key);
  }

  /**
   * adds or updates priority on the stack by "key"
   *
   * @param {string} key
   * @param {int} priority
   * @returns {undefined}
   */
  Push(key, priority) {
    //if exists
    if (this.items[key]) {
      if (this.items[key][1] !== priority) {
        //if diferent priority, remove and add with new priority
        this.Remove(key);
        this.Push(key, priority);
      }
      return;
    }
    //if new
    //          key, priority, prev, next
    var item = [key, priority, null, null];
    this.items[key] = item;

    //TODO finish method
    let contain = false;

    for (var i = 0; i < this.stack.length; i++) {
      if (this.stack[i][1] >= item[1]) {  // queue: > - stack: >=
        this.stack.splice(i, 0, item);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.stack.push(item);
    }
  }
}

var pstack = new PriorityStack();
//
pstack.Push("A", 2);
pstack.Push("B", 3);
pstack.Push("C", 2);
pstack.Push("D", 4);
pstack.Push("C", 3);
pstack.Push("56 2", 56);
pstack.Push("34", 34);
pstack.Push("56 1", 56);
pstack.Push("1 3", 1);
pstack.Push("1 2", 1);
pstack.Push("1 1", 1);
pstack.Push("187 2", 187);
pstack.Push("187 1", 187);
//
var result = [];
while (!pstack.Empty()) {
  result.push(JSON.stringify(pstack.Pop()));
}
console.log(result.join(","));
//["A",2],["C",3],["B",3],["D",4]
