/**
 * A Custom and minified implementation of the Observer Design Pattern
 **/

export interface Subscription {
    unsubscribe: () => void ;
}

class Subject<T>{
    private observers: {(payload?: T): void}[];

    constructor(){
        this.observers = [];
    }

    next(payload: T){
      for(let fn of this.observers){
          fn(payload);
      }
    }

    subscribe(fn: (payload?: T) => void): Subscription{
       this.observers.push(fn)
       console.log(this.observers)
       return {
        unsubscribe : () => {
            this.observers = this.observers.filter((func: ()=> void) => {
                return func !== fn;
            });
        }
       }
    }

}

export {Subject};