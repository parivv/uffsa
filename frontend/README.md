# UFFSA Website

http://uffsa.net

This is an open source project. We welcome contributions from UFFSA Web Interns!

## Get Started

1. Clone the repository

   `git clone https://github.com/jareuhmee/uffsa.git`

2. Navigate to the local project directory

   `cd uffsa`

3. Install node modules

   `npm install`

4. Run the app in development mode

   `npm run start`

## How to Contribute

We welcome contributions! Before starting work on any feature or fix, please follow these steps:

### 1. Find or Create an Issue

- Browse the [Issues](https://github.com/jareuhmee/uffsa/issues) page to find something you'd like to work on
- Comment on the issue expressing your interest in taking it on
- Wait for approval from a maintainer before proceeding

### 2. Fork and Clone the Repository

1. Fork the repository by clicking the "Fork" button at the top right of the repository page

2. Clone your forked repository

   `git clone https://github.com/<your-username>/uffsa.git`

3. Navigate to the local project directory

   `cd uffsa`

4. Add the original repository as an upstream remote

   `git remote add upstream https://github.com/jareuhmee/uffsa.git`

### 3. Set Up Your Development Environment

1. Install node modules

   `npm install`

2. Run the app in development mode

   `npm run start`

### 4. Make Your Changes

1. Create a new branch for your work (use a descriptive name related to the issue)

   `git checkout -b feature/your-feature-name`

2. Make your changes to the code!

3. Test your changes to ensure everything works as expected

### 5. Submit Your Changes

1. Stage your changes for commit

   `git add .`

2. Commit your changes with a descriptive message

   `git commit -m "Add feature: brief description of what you did"`

3. Push your changes to your fork

   `git push origin feature/your-feature-name`

4. Open a pull request on GitHub:

   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - **Important**: Make sure to set the base branch to the current sprint branch (e.g., `sprint-1`, `sprint-2`, etc.), NOT `main`
   - Fill out the pull request template with details about your changes
   - Reference the issue number in your PR description (e.g., "Closes #123")

5. Wait for a code review and address any feedback

### 6. Keep Your Fork Updated

Before starting new work, sync your fork with the upstream repository:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

**Note**: Always create pull requests against the active sprint branch, not the main branch. Check the repository or ask maintainers which sprint branch is currently active.

#### Created by:

<a href="https://github.com/jareuhmee/uffsa/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jareuhmee/uffsa" />
</a>
