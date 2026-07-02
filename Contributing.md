# Contributing
Appreciate your help around here!

Before we start, please first discuss the changes that you want to contribute to the team via Github issues.

These are the guidelines to follow when contributing to this project:
- [Commit Convention](#commit-convention)
- [Setup](#setup)
- [Development](#setup-quick-start)
- [Tests](#running-tests)
- [Environment](#environment-configuration)
- [DBOps](#database-operations)
- [Pull Request](#pull-request)
- [Important Considerations](#important-considerations-for-pull-requests)

## Commit Convention

Before you create a Pull Request, please make sure your commit message follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **chore**: Other changes that don't modify `src` or `test` files
- **revert**: Reverts a previous commit

Example:

```
feat: add new feature
```

## Setup Quick Start

### Using Docker (Recommended)

```bash
# Clone and navigate to project
cd expense_system_rails

# Start all services
docker compose up

# Access the application
# Frontend: http://localhost:5173
# Backend API: http://localhost:3000/api
```

### Manual Setup

#### Backend

```bash
cd backend
bundle install
rails db:create db:migrate db:seed
rails server  # Starts on port 3000
```

#### Frontend

```bash
cd frontend
npm install
npm run dev  # Starts on port 5173
```

## Running Tests

### Backend Tests

```bash
cd backend
bundle exec rspec
bundle exec rubocop
```

## Database Operations

### Using Docker

```bash
docker compose exec backend rails db:migrate
docker compose exec backend rails db:reset
docker compose exec backend rails console
```

### Without Docker

```bash
cd backend
rails db:migrate
rails db:reset
rails console
```

## Environment Configuration

### Backend Environment Variables (Production)

```bash
DATABASE_HOST=your-db-host
DATABASE_USERNAME=your-db-user
DATABASE_PASSWORD=your-password
RAILS_ENV=production
SECRET_KEY_BASE=$(rails secret)
```

## Pull Request
- The `main` branch is the source of truth and should always be the basis for the latest stable release.
- Follow Rails and React best practices
- Create a new branch for EACH feature or bug fix.
- Write tests for new features
- Run code quality tools prior to commits
  - Backend: `bundle exec rubocop`

