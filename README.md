#Excited To Learn React 🚀

I'll be updating my knowledge acquired in theory here!!

#Episode - 1:

1.What is Emmet?

- Emmet is a set of plugins for text editors that allows for high-speed coding and editing in HTML,XML,XSLT and other structured code format via content assist.

2. Difference between Framework and Library?

- Framework : Framework is a set of pre-written code that provides a structure for developing software applications.
- Library : Library is a collection of pre-written code that can be used to perform specific tasks.

3. What is CDN?

- Content Delivery Network(CDN), It improves your website's speed by placing your content in different edge servers around the globe and delivering it to your visitors from the nearest server.

4. Why React is known as React?

- React is known as React because it is designed to react to changes in data and update the user interface accordingly.
  In simple words, it's like a responsive friend who quickly responds and adapts to any new information or changes in a website or app, making it a popular choice for building dynamic and interactive web applications.

5. What is Cross-Origin in Script tag?

- The cross-origin sets the mode of the request to an HTTP CORS (Cross-Origin Resource Sharing) request.
- Web pages often makes requests to load resources on other servers.
- A Cross-Origin request is a request for a resource (eg: Style sheets, Iframes, images, fonts or scripts) from another domain.

6. What is the difference between React and ReactDOM?

- React library is responsible for creating views.
- ReactDOM library is responsible to actually render UI in the browser.

7. What is the difference between react.development.js and react.production.js files via CDN?

- In development mode, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code.
- In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode.
  Performance will be much faster in production mode when compared to development mode.

8. Difference between Async and Defer?

- Async allows your script to run as soon as it's loaded, without blocking other elements on the page.
- Defer means your script will only execute after the page has finished loading.

#Episode - 2:

1. What is 'npm'?

- It is everything but not 'Node Package Manager'.
- A 'npm' manages packages but it does not abbreviated as 'Node Package Manager'.

2. What is 'Parcel / WebPack'? Why do we need it?

- A 'Parcel / WebPack' is know to be a bundlers in React.
- A bundler in React is a tool that allows developers to package their code into a single file or bundle.

3. What is .parcel-cache?

- It is a file created to cache memory of our project when parcel builds it.
- So that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch.

4. What is 'npx'?

- A 'npx' is used to execute the packages using Parcel.
- ( Ex: npx parcel index.html ) This command creates a server and host our index.html file in localhost:1234.

5. What is Tree Shaking?

- Tree Shaking is a term used by Parcel and other web tools.
- The process of removing unused code from a module automatically is known as Tree Shaking.

6. What is Hot Module Replacement?

- HMR( Hot Module Replacement) is also a feature used by Parcel, It help us to see code changes in browser without refreshing it.

7. What is '.gitignore'? What should we add and not add to it?

- A '.gitignore' is a file which is used to hide files from committing your project to GitHub repository.
- We should only add essential files to our GitHub. Files which can be regenerated should not be added to our GitHub repository.,

8. What is 'browserlists'?

- 'browserlist' is used to run our app in older versions of the browser's, browser's such as Google Chrome, Firefox etc...
- We can set 'browserlist' inside "package.jason".
- Eg : "browserlist" : ["last 2 chrome versions", "last 2 firefox versions"].

#Episode - 3:

1. JSX : JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

2. React.createElement Vs JSX : React.createElement is a core method of creating a HTML element . Whereas, JSX is a simpler way to create an element in React.

3. Benefits of JSX : The JSX in React.js makes code easy to read and write. It is developer friendly. JSX has HTML like syntax.

4. Babel & Parcel role in JSX : JSX is transpiled before reaching to JS machine, This work is done by Parcel using Babel.

5. Components : There are two types of components in React they are Class Based Components and Functional Components.

6. Functional Components : It is a normal function which returns a React Element. ( Eg : const Parent = () => <h1>I am your Parent</h1>)

#Episode - 4:

1. Is JSX mandatory for React?

- JSX is not a requirement for using React.
- We use JSX because it's syntax is easy to understand and it is developer friendly.

2. Is ES6 is mandatory for React?

- ES6 is the standardization of javascript for making code more readable and more accessible.
- If we don't use ES6 in react, there is an alternative to perform. We use create-react-class instead of ES6.

3. How can I write comments in JSX?

- If you want to comment a single line then you can use Double Forward Slash(//) but it can only be used outside of the render block.
- If you want to comment something in JSX you need to use JavaScript comments inside of Curly braces like {/_write your comments here _/}.

4. What is Virtual DOM?

- The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

5. Can we use index as Keys in React?

- Using index as a Key is not a good practice, since it could impact performance negatively and could lead to some unstable component behaviour.
- Even React, recommends that you do not use indexes as keys.

6. Why we need Keys in React? When do we need Keys in React?

- Keys is used to uniquely identify which items in the list are changed, updated, or deleted.
- A “key” is a special string attribute you need to include when creating lists of elements in React.

7. What is props in React?

- Props are Properties, It is just like a argument in a function. We use it to pass attributes to a component.
- When you want to dynamically pass the data to the component we pass in as a prop.

#Episode - 5:

1. What is difference between "Named Export" , "Default Export" and " \* as Export"?

- Named exports allow you to export multiple values (variables, functions, classes, objects, etc.) from a module by giving them names. (Eg: export const name = "Nadeem";)

- Default exports allow you to export a single value as the default export from a module. (Eg: const name = "Nadeem"; export default name; )

- The " _ as " syntax allows you to import all the exports from a module and assign them to a single object. (Eg: export name = "Nadeem"; export age = 25;) if we want to import these both data from their respective file then we use " import _ as person from './module';

  2.What is the importance of config.js file?

- A config.js file is important in software development for centralizing and managing configuration settings. It provides a single place to store variables like API keys, database URLs, and environment-specific values.
- This enhances security by preventing sensitive data from being hard-coded and simplifies configuration changes across an application.

3. What are React Hooks?

- React Hooks is a normal JS utility function.
- Most commonly used React Hooks are 'useState()', 'useEffect()'.

4. Why do we need a useState Hook?

- The useState Hook in React is used to introduce and manage state in functional components.

#Extras:

- Reconciliation Algorithm is also known as ReactFiber. - Hooks was introduced in React-16. - Diff-Algorith : It finds difference between two virtual DOM. - React is fast because it has virtual DOM, Virtual DOM uses Diff-Algorithm so that it can manupulate DOM very efficiently.
