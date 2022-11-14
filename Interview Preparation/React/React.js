// What is Component ?
// Components are independent and reusable bits of code.
// They serve the same purpose as JavaScript functions.
// Components come in two types, Class components and Function components.

// What is BoilerPlate ?
// Boilerplate refers to blocks of code that you can reuse for various projects.
// A boilerplate works like a template you can use with little or no alteration.

//What is React ?
// React is a JavaScript-based UI development library.
// Facebook and an open-source developer community run it.
//The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.

//What are its Features ?

//Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality.
// Reusable components: Components are independent and reusable blocks of code.
//It can be used for the development of both web and mobile apps: We already know that React is used for the development of web applications, but that’s not all it can do. There is a framework called React Native, derived from React itself, that is hugely popular and is used for creating beautiful mobile applications. So, in reality, React can be used for making both web and mobile applications.
// Improved performance: React uses Virtual DOM, thereby creating web applications faster.

//Virutual DOM ?
// The virtual DOM is only a virtual representation of the DOM.
//Virtual DOM compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again.

//State Vs Prpos and Prop Drilling ?

// State

// To Manage Data Within Components.
//Data can be modified within the Component. But cannot be accessed from outside.
//Needs an initial value, can get inital value from parent component.
// Permission: Read and Write.
//Mutablity: Mutable.
// Component Type: Dynamic, Interactive.

//Props

// To Pass the Data between different Components.
//Data from props are read-only, cannot be modified.
//Passed from parent component,inital value can be empty.
// Permission: Read Only.
//Mutablity: Immutable.
// Component Type: Static, Non-Interactive.

// Prop Drilling ?

// Prop Drilling (Threading) is a concept that refers to the process you pass the data from the parent component to the exact child Component BUT in between, other components owning the props just to pass it down the chain.
// Simply, Prop drilling is a situation when the same data is being sent at almost every level due to requirements in the final level.
//To avoid prop drilling we can use Context API or Redux.

// Context API ?

// Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app.
// The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

// Redux ?

// Redux is a state management tool for Javascript applications.
// It can be used by React, Angular, Vue, etc.
//React-Redux:
//It is a library which is used to bind React components with the Redux store.
// It allows React components to read data from the store and dispatch actions to update state in store.

//useEffect Hook ?
//By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 2000)
  })

  return <h1>{message}</h1>
}

// export default UseEffectHook;

//useState Implementation

// The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

// Syntax: The first element is the initial state and the second one is a function that is used for updating the state.

// const [state, setState] = useState(initialstate)

import React, { useState } from 'react'

const UseStateHook = () => {
  const [state,setState] = useState(1)
  return (
    <div className='useState'>
      <h4>{state}</h4>
      <button onClick={() => setState(state + 1)}>More</button>
      <button onClick={() => setState(state - 1)}>Less</button>
    </div>
  )
}

export default UseStateHook