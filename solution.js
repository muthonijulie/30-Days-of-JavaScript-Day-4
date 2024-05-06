//Counter II
// function syntax,objects,postfix notation,prefix notation
//simplified version
const createCounter=function(init){
   let x=init;
    const increment = () => ++x;
    const decrement=()=> --x;
    
    const reset=()=>(x=init);
    
    return {
        increment,
        decrement,
        reset,

    };
};

const counter=createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
