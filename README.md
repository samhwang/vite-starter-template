# Getting Started with Vite - React starter template

This project was bootstrapped with [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), and was created
to be very similar to Create-React-App, but faster and with batteries included!

## Using this template

There are 3 ways that you can adopt this template.

- Click the `Use this template` button on this repo, or click on [this link](https://github.com/samhwang/vite-starter-template/generate).
- Clone this repo, delete the .git folder and re-init the Git tree.
- Use `degit`: `npx degit samhwang/vite-starter-template project-name`

## Batteries included

- [Vite](https://vitejs.dev/), [React](https://reactjs.org) and [TypeScript](https://www.typescriptlang.org/) - The core of this template.
- [React Router](https://reactrouter.com/) - To handle app client side routing
- [React Hook Form](https://react-hook-form.com/) - To handle form creation and validation.
- [swc](https://swc.rs/) - A speedy JS bundler using Rust.
- [Rome](https://https://rome.tools/) for code formatting.
- [Vitest](https://vitest.dev/) for running unit tests with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- [msw](https://mswjs.io/) to fake a service worker request to intercept API calls.
- [Netlify](https://netlify.com) hosting config

## Side note

- **`pnpm` by default**: This template assumes you're using `pnpm` as your installer and script runner. Feel free to sub it with `npm` or `yarn` as you wish.
- **`swc` by default**: This template will enable `swc` by default. But there are some [caveats](https://github.com/vitejs/vite-plugin-react-swc#caveats). If your project breaks in some way, you can toggle it off in `vite.config.ts`.

## Available Scripts

In the project directory, you can run:

### `pnpm run dev`

Runs the app in the development mode.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `pnpm run test`

Launches the test runner for unit testing with React Testing Library.
For more information, go to [RTL docs](https://testing-library.com/docs/react-testing-library/intro/)

### `pnpm run format`

Launches the ESLint and Prettier runner to lint the code against AirBnb ruleset and reformat it
with Prettier.

### `pnpm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Deployment

This template includes some config to deploy into [Netlify](https://netlify.com). To configure,
link your Github account to Netlify and link your project into it, they will take care of the
rest.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).
