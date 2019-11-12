- [ ] Why would you use class component over function components (removing hooks from the question)?

Answer: functional components with hooks can't help in perf as class components does and class components can hold state or data. When state updates, render gets called, state gets passed around as props and changes when props change too.

- [ ] Name three lifecycle methods and their purposes.

Answer: The react lifecycle has three methods 1- Mounting which when the component is being built out from ground up, render method is invoked and as well as componentDidMount gets called. 2- Updating in this method setState can be used to change the component’s state data, forcing a call to render. 3- Un-mounting Component is removed from the screen and componentWillUnmount is called and can be used for any clean up you may need to do.

- [ ] What is the purpose of a custom hook?

Answer: Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated and as well as Custom hooks work by using JavaScript and pass initial values. These values are passed around through parameters. It is reusable, stateful logic.

- [ ] Why is it important to test our apps?

Answer: Testing application minimizes the risk of bugs into our production code and essential to software quality.