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
- [swc](https://swc.rs/) - A speedy JS bundler using Rust.
- [ESLint](https://eslint.org/) using the [AirBnB ruleset](https://github.com/airbnb/javascript) and [Prettier](https://prettier.io/)
  for code formatting.
- [Vitest](https://vitest.dev/) for running unit tests with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- [msw](https://mswjs.io/) to fake a service worker request to intercept API calls.
- [GitHub Actions](https://github.com/features/actions) pipeline to deploy into [GitHub Pages](https://pages.github.com/).

## Side note

- **`pnpm` by default**: This template assumes you're using `pnpm` as your installer and script runner. Feel free to sub it with `npm` or `yarn` as you wish.
- **`swc` by default**: This template will enable `swc` by default. But there are some caveats (https://github.com/vitejs/vite-plugin-react-swc#caveats). If your project breaks in some way, you can toggle it off in `vite.config.ts`.

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

This template includes some [GitHub Actions](https://github.com/features/actions) pipeline to deploy into [GitHub Pages](https://pages.github.com/).

To configure this, first [enable GH Actions in your repo](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository) then [configure publishing from an Action workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).
If you don't want to use GitHub Pages, feel free to delete the `.github` folder, and see the [deployment](https://vitejs.dev/guide/static-deploy.html) section on Vite Docs
for more information.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).
