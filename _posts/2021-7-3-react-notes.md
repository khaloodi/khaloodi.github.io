---
layout: post
title: React Notes
subtitle: Some notes from learning React
---

React Notes

Handling Form Input React (steps)

- initialize state for the value of the input

- listen for changes on the input to detect when value is updated

- create an event handler that updates the value state

Component Lifecycle

- every component instance follows a cycle: it’s mounted onto the DOM, it’s updated with changes in data, and it’s unmounted from the DOM 

React Lifecycle Methods:

- built-in methods that get called at each point in the life cycle

- hooks that run code at key times in a component’s life cycle

- give the ability to control what happens when a component mounts, updates, and unmounts

React Component Patterns

- destructure props

- validate props

- access DOM nodes with refs

- practice creating React components

- use PureComponent

(Shift + Cmd + L) -keyboard shortcut to select all of same item

Updating State

- Without a function (use if state doesn’t depend on previous state)

this.setState({
	username: ‘Tyler’
})

- With a functions (use if state does depend on previous state)

this.setState( (prevState)=>({
	count: prevState.count + 1
}))
