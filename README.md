## Chat Interface

This is a simple web chat interface project designed to showcase frontend engineering experience.

### Live Demo

You can check the app live demo at [https://chat-interface-xsantanax.vercel.app](https://chat-interface-xsantanax.vercel.app).

You can also run it in your machine. First, run the development server. (`npm run dev` or `yarn dev`)

<!-- ```bash
npm run dev
# or
yarn dev
``` -->

Then, open [http://localhost:3000](http://localhost:3000) in your web browser to see the result.

<!--
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
-->

## Architecture

The architecture is comprehensive and utilizes modern technologies and best practices for building robust and scalable web applications. Here's a summary and elaboration on each component of the architecture:

### 1. Client-Side (Frontend) Architecture:

- [React](https://react.dev/) - Chosen as the base frontend framework due to its component-based architecture, where each component encapsulates its own logic, state, and rendering behavior. This makes building user interfaces simple, manageable and efficient.

- [Next.js](https://nextjs.org/docs) - Chosen as the React framework because it is designed specifically for serving web applications. It adds server-side rendering and routing capabilities, improving performance and SEO. It is also recommended by React.
  [`(See React recommended frameworks)`](https://react.dev/learn/start-a-new-react-project)

- **TypeScript** - Enhances code quality and developer productivity by adding static typing to JavaScript, catching errors during development.

- **ContextAPI** - Chosen for state management because it provides a centralized way to manage state in React applications using native functions, making data sharing between components more manageable and efficient.

- **SASS** - A CSS preprocessor that adds features like variables, mixins, and nesting, making styling more organized and maintainable.

### 2. Server-Side (Backend) Architecture:

- Node.js: A runtime environment for executing JavaScript code on the server side, enabling scalable and efficient backend development.

- MongoDB: A NoSQL database that offers scalability, flexibility, and compatibility with Node.js, suitable for storing and managing application data.

### 3. Testing and Quality Assurance:

- Jest and React Testing Library: Tools for writing and executing unit tests and integration tests for frontend components, ensuring code reliability and correctness.

<!-- - API Testing: Additional frameworks or tools can be used to test backend API endpoints and functionality, ensuring robustness and stability. -->

### 4. Deployment and Scalability:

<!-- - Docker and Kubernetes: Containerization using Docker and orchestration with Kubernetes facilitate deployment and scalability of containerized applications, improving efficiency and management. -->

- CI/CD Pipelines: Continuous Integration and Continuous Deployment pipelines automate testing, building, and deployment processes, reducing manual errors and improving deployment speed.

### 5. Security:

- HTTPS: Ensures secure communication between clients and servers, preventing data interception and manipulation.

- Data Validation: Validates user input client-side and server-side to prevent malicious data from entering the system, enhancing security and data integrity.

- Authentication and Authorization: Implements mechanisms to authenticate users and authorize access to resources based on roles and permissions, protecting sensitive data.

- MongoDB Security Features: Utilizes access control, authentication mechanisms, and encryption options provided by MongoDB to secure the database and prevent unauthorized access.

This architecture combines frontend and backend technologies effectively, incorporates testing, deployment, and security practices, and focuses on scalability and maintainability, making it well-suited for developing modern web applications.

### More

The frontend architecture can easily be upgraded to a microfrontend structure as business scales.

Next 14 is used (https://nextjs.org/blog/next-14), which enables features

The automated tests written are requirement driven, preventing future code changes from affecting business requirements.

The app is 100% responsive for any screen with 360 horizontal pixels or more. [`(Which are all)`](https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide)
