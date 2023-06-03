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

```shell
pnpm run dev
pnpm run test
pnpm run format
pnpm run build
```

## Deployment

This template includes some config to deploy into [Netlify](https://netlify.com). To configure,
link your Github account to Netlify and link your project into it, they will take care of the
rest.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn React testing, go to [RTL docs](https://testing-library.com/docs/react-testing-library/intro/)
