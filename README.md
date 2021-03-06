# React Starter Baseweb

## Tech Stack

- **React / React Router**
- **Baseweb / Styletron**
- **Axios / React-Query**
- **React-i18next**
- **EsLint / Prettier**
- **Babel / Webpack**
- **Simple-git-hooks / Lint-staged**
- **Jest / Cypress / Rtl**

### Running the project

- Run `npx simple-git-hooks` to set all git hooks
- Run `npm i` to install dependencies

### Commonly used scripts

| `npm <script>` | Description                                               |
| -------------- | --------------------------------------------------------- |
| `dev`          | Serves app at `localhost:8080` with hot reloading enabled |
| `build`        | Builds the application to ./build                         |
| `test:unit`    | Runs all Unit tests                                       |
| `cypress`      | Opens Cypress                                             |
| `format`       | Runs Prettier                                             |
| `lint:js`      | Runs EsLint                                               |
| `deploy`       | Deploys to Github Pages                                   |

### CI jobs

- Install and Cache dependencies
- Run Format & Lint (Prettier, EsLint)
- Run e2e tests (Cypress)
- Run Unit tests (Jest)
- Build and Deploy (gh-pages)
