// Question 1.What is JavaScript ?

// JavaScript is an Scripting Language that allows us to implement complex features on web page. 
// JavaScript is an single threaded synchronous Language.This means that the JavaScript engine has only one call stack.
// Single Threaded --> One code will be executed at a time.
// Synchronous --> After executing the first line and it will moved to another line. 
// JavaScript is an interpreter language that means where our code is going to run line by line.
// JavaScript code executed Line by Line.
// Its a combination of both Compiler and interpreter is knowns as JIT (Just In Time) Compilation.

// What is API ?

// An "application programming interface" is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.


// Question.2) Difference between compiler and interpreter

// Interpreter-   
    // Translates program one statement at a time.      
    // Interpreters usually take less amount of time to analyze the source code. However, the overall execution time is comparatively slower than compilers.          
    // Programming languages like JavaScript, Python, Ruby use interpreters.

// Compiler -   
    // Scans the entire program and translates it as a whole into machine code.
    // Compilers usually take a large amount of time to analyze the source code. However, the overall execution time is comparatively faster than interpreters.
    // Programming languages like C, C++, Java use compilers.


// Question.3) Explain Execution context

//All JavaScript code needs to be hosted and run in some kind of environment. In most cases, that environment would be a web browser.

// How JavaScript Code Gets Executed ?
    // the browser doesn't natively understand the high-level JavaScript code that we write in our applications. It needs to be converted into a format that the browser and our computers can understand – machine code.

    // While reading through HTML, if the browser encounters JavaScript code to run via a <script> tag or an attribute that contains JavaScript code like onClick, it sends it to its JavaScript engine.

    // The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the "Execution Context".
    // The Execution Context contains the code that's currently running, and everything that aids in its execution.
    // During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.

// There are two kinds of Execution Context in JavaScript:

//     Global Execution Context (GEC)
//     Function Execution Context (FEC)

    // Global Execution Context (GEC)

        // Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).

        // The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.

        //     For every JavaScript file, there can only be one GEC.

    // Function Execution Context (FEC)

        // Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.

        // Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

    // How are Execution Contexts Created?

    // The creation of an Execution Context (GEC or FEC) happens in two phases:

    //     Creation Phase
    //     Execution Phase

    // The Creation Phase
        // It called Creation Phase or Memory Allocation Phase.
        //This Phase Create Memory allocation for Variables and functions. 
        
    // The Execution Phase

        // Finally, right after the creation phase of an Execution Context comes the execution phase. This is the stage where the actual code execution begins.
        // Then the code is parsed by a parser, gets transpired to executable byte code, and finally gets executed.
        // JavaScript is a single-threaded language, which means that it is capable of only executing a single task at a time. Thus, when other actions, functions, and events occur, an Execution Context is created for each of these events. Due to the single-threaded nature of JavaScript, a stack of piled-up execution contexts to be executed is created, known as the Execution Stack.

        // When scripts load in the browser, the Global context is created as the default context where the JS engine starts executing code and is placed at the bottom of the execution stack.

//https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/

// Question.4) What is Run-time Environment in JS.

// The runtime environment is the environment in which a program or application is executed. 
//Js Engine.
    // 1.Parser
    // 2.AST(Abstract Syntax Tree)
    // 3.Compilation
    // 4.Execution


// Question.5) JavaScript Engine

// JavaScript engines are inbuilt in all the modern browsers today. When the JavaScript file is loaded in the browser, 
// JavaScript engine will execute each line of the file from top to bottom (to simplify the explanation we are avoiding hoisting in JS). 
// JavaScript engine will parse the code line by line, convert it into machine code and then execute it.

// Ex.  Google - V8   Mozilla firefox - Spider Monkey    Microsoft  -  Chakra

// Google chrome’s JavaScript V8 engine: Firstly, raw JavaScript file goes into the Parser. 

// Parser: It checks for syntax and semantics. Parser is nothing but a lexical analysis that results into the breaking of code into tokens 
// in order to understand their meanings and these tokens gets converted into Abstract Syntax Tree(AST).

// Abstract Syntax tree: It is a hierarchical tree like structure of program representation which allows interpreter to understand the program. This AST is initially goes to the Interpreter.

// Interpreter: It lets the AST to get converted into Byte code. In V8 engine, this process is known as Ignition but when some code gets repeated again and again.

// Profiler: It will check for the repeating code that can be optimized. As soon as, it gets the repeating code, it basically moves the code into compiler.

// Compiler: It spits out the most optimized byte code. In the above case, it will see the repeating code and optimize the code by replacing the addition(14, 36) as 40, 

// since it gets repeated again and again and it will produce the optimized byte-code which gets replaced with the slower byte code produced by the Interpreter. In V8 Engine, This compiler is called as TurboFan.

// This process gets repeated again and again which means that JavaScript Engine’s speed gets improved since profiler and compiler will be producing and updating the optimized byte code.