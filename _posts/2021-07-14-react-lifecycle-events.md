---
layout: post
title: React Lifecycle Events
subtitle: render() Is For Rendering, Only!
---
### 📅 Schedule A Meeting:
- [Consultation & Project Scoping](https://calendly.com/kadad1312/1-on-1?back=1&month=2024-01)

**Data should not be fetched in the render method!** A component's `render()` method should *only* be used to render that component; it should not make any HTTP requests, fetch data that's used to display the content, or alter the DOM. The render() method also shouldn't call any other functions that do any of these things, either.

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

### Make 💰 By Learning Programming:
- [Tesla](https://ts.la/khaled835973)
- [Liquid I.V. Hydration Multiplier 30 Stick, 16.93 Ounce](https://amzn.to/3ZFDjDq)
- [Xeela Pre workout](https://amzn.to/3NXWwMD)
- [Sour Strips](https://amzn.to/3EDWUM7)
- [Impractical Python Projects](https://amzn.to/3JpCpWH)
- [Designing Data-Intensive Applications](https://amzn.to/3Hgh5Sj)
- [Python for Data Analysis](https://amzn.to/3D0C8pl)
- [Python for Data Science Handbook](https://amzn.to/3XnZ1ez)
- [Hands-On Machine Learning w/Scikit-Learn & Tensorflow](https://amzn.to/3QTWoyt)

<br>