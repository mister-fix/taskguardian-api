# <img src="./logo.svg#gh-light-mode-only" alt="taskguardian-api logo light" width="175" /><img src="./logo-light.svg#gh-dark-mode-only" alt="taskguardian-api logo light" width="175" />

![license](https://img.shields.io/github/license/mister-fix/taskguardian-api)
![version](https://img.shields.io/github/v/tag/mister-fix/taskguardian-api?label=version)
![contributors](https://img.shields.io/static/v1?label=contributors&message=1&color=success)
![repo size](https://img.shields.io/github/repo-size/mister-fix/taskguardian-api?color=yellow)
![code size](https://img.shields.io/github/languages/code-size/mister-fix/taskguardian-api?color=red)
![files](https://img.shields.io/github/directory-file-count/mister-fix/taskguardian-api?color=skyblue)
![stars](https://img.shields.io/github/stars/mister-fix/taskguardian-api?style=social)
![watchers](https://img.shields.io/github/watchers/mister-fix/taskguardian-api?style=social)

TaskGuardian API is a powerful backend service designed to manage tasks, users, and projects for the TaskGuardian platform. This Node.js-based API provides endpoints for task management, user authentication, and other essential features required for efficient task handling and project tracking. It is built with modern web technologies and adheres to best practices for performance, security, and maintainability.

## Features

- User Authentication: Secure login, registration, and session management using JWT (JSON Web Tokens).
- Task Management: Full CRUD operations (Create, Read, Update, Delete) for tasks, projects, and user assignments.
- Project Organization: Create and manage projects, assign tasks to users, and track progress.
- Robust Error Handling: Centralized error handling for consistent responses.
- Database Connectivity: Built-in support for MongoDB using Mongoose, with automatic retries on failed database connections.
- Logging: Comprehensive logging using a custom logger for tracking API events, errors, and database connections.
- Rate Limiting & Security: API security is enhanced with request rate limiting and HTTP header protection (via Helmet).
- Modular Design: Clean and modular architecture with clear separation between routes, controllers, services, and utilities.
- Scheduled Task Retry: Utility to handle retries for failed tasks with countdown mechanisms.

## Quick Start

Quick start instructions are coming soon.

## API Documentation

API documentation is coming soon.

## Project Structure

```ASCII
taskguardian-api/
├─ .cspell/               # Spellcheck files
├─ .github/               # GitHub CI/CD workflows and issue templates
├─ .husky/                # Git hooks for commit checks
├─ .vscode/               # VSCode settings and extensions
├─ docs/                  # GitHub supporting documents and templates
├─ plop-templates/        # Code generation templates (e.g., controllers, services)
├─ src/                   # Main source code directory
│  ├─ config/             # Configuration files (e.g., database, environment)
│  ├─ controllers/        # API route handlers
│  ├─ middleware/         # Express middleware functions
│  ├─ routes/             # API routes (e.g., tasks, users)
│  ├─ utils/              # Utility functions (e.g., retry mechanisms, logger)
│  ├─ app.js              # Express app setup
├─ tests/                 # API Integration tests directory
├─ .commitlintrc.js       # Commit message linting configuration
├─ .editorconfig          # Editor configuration for consistent coding styles
├─ .env.example           # Example .env file
├─ .eslintignore          # Files and directories to ignore for ESLint
├─ .eslintrc.js           # ESLint configuration for code linting
├─ .gitattributes         # Git attributes for the project
├─ .gitignore             # Git ignore rules for the project
├─ .prettierignore        # Files and directories to ignore for Prettier
├─ .prettierrc            # Prettier configuration for code formatting
├─ CHANGELOG.md           # Changelog for project updates
├─ cspell.json            # Configuration for spellcheck
├─ index.js               # Application entry point
├─ jsconfig.json          # JavaScript project configuration (aliases)
├─ jsdoc.config.json      # JSDoc configuration
├─ LICENSE                # Project license
├─ logo-light.svg         # Light mode logo for the project
├─ logo.svg               # Primary logo for the project
├─ nodemon.json           # Nodemon configuration for automatic server restarts
├─ package-lock.json      # Locked versions of dependencies
├─ package.json           # Project metadata and dependencies
├─ plopfile.js            # Plop.js configuration for code generation
├─ README.md              # Project documentation
```

## Installation

Project installation instructions are currently being prepared.

## Built With

- [ESLint](https://eslint.org/) - Tool for identifying and reporting on patterns found in code.
- [Prettier](https://prettier.io/) - Code formatter.
- [Husky](https://typicode.github.io/husky/) - Manage Git hooks.
- [GitHub Actions](https://docs.github.com/en/actions) - CI/CD workflows.

## Author

Created and maintained by [@mister-fix].

## Contributing

Contributions are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](./docs/CONTRIBUTING.md) file for details on how to contribute.

## Code of Conduct

Please adhere to our [Code of Conduct](./docs/CODE_OF_CONDUCT.md) when participating in the community.

## Contributors

[@mister-fix] 🐉

## Contact

For any technical project questions or inquiries, send an email [here](mailto:hellostephenwm@gmail.com).

## License

This project is available under [MIT License](./LICENSE). You can learn more about open-source licenses here: [choosealicense.com]

## Acknowledgements

- Inspired by modern web application architectures.
- Built with best practices for security and performance in mind.
- Special thanks to the open-source community for their valuable contributions.

## Miscellaneous

- Emojis used in the project markdown files are provided by [@rxaviers], you can [check them out here].
- Badges and shields used in the project markdown files are generated by [img.shields.io].

[@mister-fix]: https://github.com/mister-fix/
[choosealicense.com]: https://choosealicense.com
[@rxaviers]: https://github.com/rxaviers
[check them out here]: https://gist.github.com/rxaviers/7360908
[img.shields.io]: https://img.shields.io/
