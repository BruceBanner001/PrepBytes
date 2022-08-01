// Question 1.What is JavaScript ?

// JavaScript is an Scripting Language that allows us to implement complex features on web page. 
// JavaScript is an single threaded synchronous Language.
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

// Execution context is the concept for describing the internal working of a code.
// In JavaScript, the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context. 
// It is the execution context that decides which code section has access to the functions, variables, and objects used in the code.

// Global Execution Context is also called the base/default execution. Any JavaScript code which does not reside in any function will be present in the global execution context.
// Functional Execution Code is that type of context which is created by the JavaScript engine when any function call is found.

// The Execution context mainly contain memory allocation and code execution phase. 


// Question.4) What is Run-time Environment in JS.

// The runtime environment is the environment in which a program or application is executed. 
// It's the hardware and software infrastructure that supports the running of a particular codebase in real time.


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