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

The following tools have been chosen due to their robustness, simplicity, and scalability.

- [ReactJS](https://react.dev/) was chosen as the base frontend framework.

- [NextJS](https://nextjs.org/docs) was chosen as the React framework since it is degined for serving web applications, which is this project case.
  [`(See react recommended frameworks)`](https://react.dev/learn/start-a-new-react-project)

- [TypeScript](https://www.typescriptlang.org/) was chosen for type safety.

- [ContextAPI](https://react.dev/reference/react/createContext) was chosen for state management.

- [SASS](https://sass-lang.com) was chosen for styling.

- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) were chosen for testing.

### More

The simple architecture can easily be upgraded to a microfrontend structure as business scales.

The automated tests written are requirement driven, preventing future code changes from affecting business requirements.

The app is 100% responsive for any screen with 360 horizontal pixels or more. [(which are all)](https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide)
