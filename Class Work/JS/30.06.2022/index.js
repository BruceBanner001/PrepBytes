//30.06.2022

//Scope

let f = 10;
function one(){
    console.log(f);//10
    two();
    function two(){
        let g = 20;
        console.log(f,g);//10,20

        three();
        function three(){
            let h = 30;
            console.log(f,g,h);//10,20,30
        }
    }
}
one();

console.log('-----------');

let a = 10;
function four(){
    let a =14;
    function five(){
        let b = 20;
        function six(){
            let c = 30;
            console.log(a, b, c);
        }
        six();
    }
    five()
}
four();

/// End of Scope

console.log('End of Scope');
console.log('------------------');
console.log('Starting Array')