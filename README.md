This is a simple web chat interface project designed to showcase frontend engineering experience.

### Live Demo

You can check the app live demo at [https://chat-interface-xsantanax.vercel.app](https://chat-interface-xsantanax.vercel.app).

You can also run it in your machine. First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Stack Choices

The following tools have been chosen due to their robustness, simplicity, maintenance, performance, security and scalability.

- [Javascript] - Chosen as language for its compatibility with other chosen frameworks and its widespread use in web development.

- [React](https://react.dev/) - Chosen as the base frontend framework due to its component-based architecture, where each component encapsulates its own logic, state, and rendering behavior. This makes building user interfaces simple, manageable and efficient.

- [Next.js](https://nextjs.org/docs) - Chosen as the React framework because it is designed specifically for serving web applications. It adds server-side rendering and routing capabilities, improving performance and SEO. It is also recommended by React.
  [`(See React recommended frameworks)`](https://react.dev/learn/start-a-new-react-project)

- [TypeScript](https://www.typescriptlang.org/) - Chosen for type safety, which helps catch errors during development and improves code quality and maintainability.

- [ContextAPI](https://react.dev/reference/react/createContext) - Chosen for state management.

- [SASS](https://sass-lang.com) - Chosen for styling due to its features like variables, mixins, nesting, and simpler indentation syntax, which make styling more organized and maintainable.

- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Chosen for testing the application, with Jest as the testing framework (test runner) and React Testing Library for testing React components.

- [Node] - Chosen for creating the API, since it allows for building scalable and efficient server-side applications using JavaScript.

- [MongoDB] - Chosen for database management due to its robustness and scalability, providing efficient handling of complex data structures and seamless integration with Node.js for a streamlined development process.

### More

The app simple architecture can easily be upgraded to a microfrontend structure as business scales.

The automated tests written are requirement driven, preventing future code changes from affecting business requirements.

The app is 100% responsive for any screen with 360 horizontal pixels or more. [`(Which are all)`](https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide)
