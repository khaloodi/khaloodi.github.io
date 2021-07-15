---
layout: post
title: React Lifecycle Events
subtitle: `render()` Is For Rendering, Only!
---


I just mentioned this in the video, but I want to stress it again - **data should not be fetched in the render method!** A component's `render()` method should *only* be used to render that component; it should not make any HTTP requests, fetch data that's used to display the content, or alter the DOM. The render() method also shouldn't call any other functions that do any of these things, either.

So if render() is only used for displaying content, we put the code that should handle things like Ajax requests in what React calls **lifecycle events**.

## Lifecycle Events
Lifecycle events are specially named methods in a component. These methods are automatically bound to the component instance, and React will call these methods naturally at certain times during the life of a component. There are a number of different lifecycle events, but here are the most commonly used ones.

`componentDidMount()`

- invoked immediately after the component is inserted into the DOM

`componentWillUnmount()`

- invoked immediately before a component is removed from the DOM

`getDerivedStateFromProps()`

- invoked after a component is instantiated as well as when it receives brand new props

To use one of these, you'd just create a method in your component with the name and React will call it. It's an easy way to hook into different parts of the lifecycle of React components.

The lifecycle event that we'll be looking at (and will be using a lot in our app!) is the `componentDidMount()` lifecycle event.

You'll sometimes see `shouldComponentUpdate()` in React apps as well. It returns `true` by default. This means that whenever a component's state (or its parent's state) is updated, the component re-renders.

The [React documentation](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) provides the following guidance for using this lifecycle event:

- The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
- Do not rely on it to “prevent” a rendering, as this can lead to bugs.
- Consider using the built-in `PureComponent` instead of writing `shouldComponentUpdate()` by hand.
- We do not recommend doing deep equality checks or using `JSON.stringify()` in `shouldComponentUpdate()`. It is very inefficient and will harm performance.
