/**
 * A Custom and minified implementation of the Observer Design Pattern
 **/

interface SubjectProps<T>{
    [key: string]: (payload?: T) => void;
}

class Subject<T>{
    private observers: SubjectProps<T>;

    constructor(){
        this.observers = {};
    }

    next(event: string, payload: T){
        if(!(event in this.observers)){
            throw new Error(`No such event: "${event}", your are not subscribed to that event`);
        }
        this.observers[event](payload);
    }

    subscribe(event: string, fn: (payload?: T) => void){
        if(event in this.observers){
            throw new Error(`You are already subscribed to this "${event}" event`);
        }

        this.observers[event] = fn;
    }

    unsubscribe(event: string){
        if(!(event in this.observers)){
            throw new Error(`No such event: "${event}", it's not possible to unsubscribe from inexistent event`);
        }
        delete this.observers[event];
    }
}

export {Subject};