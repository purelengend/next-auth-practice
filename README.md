# Next.js 15+ Boilerplate

This is a [Next.js](https://nextjs.org/) boilerplate built with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

### Features

This boilerplate includes:

- ⚡ [Next.js](https://nextjs.org/) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org/)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com/)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) for efficiently merge Tailwind CSS classes without style conflicts
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org/)
- 💖 Code Formatter with [Prettier](https://prettier.io/)
- 🦊 [Husky](https://github.com/typicode/husky) for Git Hooks
- 🚫 [Lint-staged](https://github.com/lint-staged/lint-staged) for running linters on Git staged files
- 🦺 Unit Testing with Jest and React Testing Library
- ☂️ Code coverage with [V8](https://v8.dev/blog/javascript-code-coverage)
- 🎉 Storybook for UI development

## How to run

### Prerequisites

Make sure you install packages with correct version below:

- [node v18.19.0](https://nodejs.org/en/download/package-manager)
- [pnpm 9.12.3](https://pnpm.io/installation)

- **Note:**:
  - Please add `.env` into root of project source code, refer `.env.sample`.

Check and update config image hosting on `next.config.mjs` file follow [Next.js document](https://nextjs.org/docs/messages/next-image-unconfigured-host)

### Get source code

| Command                                                                    | Action                    |
| :------------------------------------------------------------------------- | :------------------------ |
| `git clone https://gitlab.asoft-python.com/giang.nguyen/next-training.git` | Clone Repository with SSH |
| `$ cd next-training`                                                       | Redirect to folder        |

### Build and Run app

| Command            | Action                                     | Port                  |
| :----------------- | :----------------------------------------- | :-------------------- |
| `$ pnpm install`   | Install packages dependencies              | N/A                   |
| `$ pnpm build`     | Build app with optimized production mode   | N/A                   |
| `$ pnpm start`     | Starts the application in production mode. | http://localhost:3000 |
| `$ pnpm dev`       | Run the app in development mode            | http://localhost:3000 |
| `$ pnpm storybook` | Run Storybook.                             | http://localhost:6006 |
| `$ pnpm test`      | Run Unit Test                              | N/A                   |
| `$ pnpm coverage`  | Generate code coverage                     | N/A                   |

### Project structure

````shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── public                          # Public assets folder
├── src
│   ├── api                         # Handle data with API: GET, POST, PUT, DELETE
│   ├── app                         # Next.js App (App Router)
│   ├── components                  # React components
│   ├── constants                   # App constants
│   ├── icons                       # Icons folder
│   ├── layouts                     # React components for app layout
│   ├── models                      # Model type definitions
│   ├── types                       # Type definitions
│   ├── ui                          # React components by feature
│   ├── utils                       # Utilities folder
├── .editorconfig                   # Editor configuration
├── .eslintrc.json                  # ESLint configuration
├── .lintstagedrc                   # Lint-stage
├── .prettierrc                     # Prettier configuration
├── .commitlint.config.js           # Commitlint configuration
├── jest.config.ts                  # Jest configuration
├── jest.setup.ts                   # Jest setup configuration
├── next.config.mjs                 # Next.js configuration
├── postcss.config.mjs              # Post CSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration

```ESLint
- Reviewing and merging pull requests.
- Managing and responding to issues.
- Updating project documentation.
- Ensuring the project is up-to-date with the latest standards and practices.

````
