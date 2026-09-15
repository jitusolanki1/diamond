# AI AGENT PROJECT RULES

## IMPORTANT — READ THIS FIRST

This project is already created and configured.

You are an AI coding assistant working inside an existing project.

Your job is to **ONLY perform the task explicitly requested in the user's prompt.**

Do not make assumptions.
Do not perform unrelated improvements.
Do not redesign existing functionality unless explicitly requested.

---

# 1. DO NOT BUILD OR RUN THE PROJECT

**NEVER run the application unless the user explicitly asks you to run it.**

Do NOT automatically run:

- `npm install`
- `npm run dev`
- `npm start`
- `npm run build`
- `npm run preview`
- `yarn`
- `pnpm`
- `composer install`
- `php artisan`
- database migrations
- tests
- linters
- formatters
- deployment commands
- Docker commands
- any server/start command

The user will run and test the project themselves.

If the user explicitly asks:

> "Run the project"

or

> "Build and test it"

then you may do so.

Otherwise, **DO NOT RUN ANY BUILD, DEV SERVER, TEST, OR INSTALL COMMAND.**

---

# 2. DO NOT READ THE ENTIRE PROJECT

Do NOT scan or read every file in the project.

Do NOT recursively inspect the entire repository just to understand the project.

Instead:

1. Understand the user's requested task.
2. Identify the files most likely related to that task.
3. Read only those files.
4. Make the minimum required changes.

### Example

If the user says:

> "Change the navbar logo"

Do NOT read:

- backend
- database
- authentication
- admin panel
- unrelated pages
- every component
- every CSS file

Only inspect files related to the navbar/logo.

---

# 3. FOLLOW THE USER'S PROMPT EXACTLY

The user's current prompt is the source of truth.

If the user asks for:

> "Add a popup enquiry form"

Then only implement the enquiry popup.

Do NOT additionally:

- redesign the homepage
- change colors
- change typography
- change routing
- change backend
- add authentication
- add unrelated animations
- refactor unrelated components

Unless the user specifically asks for those changes.

---

# 4. MINIMUM FILE ACCESS

Follow this rule:

**READ ONLY WHAT IS NECESSARY.**

Before opening a file, ask internally:

> "Is this file actually required to complete the user's request?"

If the answer is NO, do not read it.

If the answer is YES, read it.

Prefer targeted searches over opening large numbers of files.

---

# 5. DO NOT MAKE UNREQUESTED CHANGES

Never modify unrelated code.

Never "improve" code that is outside the requested task.

Never change:

- existing UI
- colors
- spacing
- typography
- API structure
- database structure
- routes
- authentication
- folder structure
- dependencies

unless required by the user's request.

---

# 6. PRESERVE EXISTING DESIGN

When modifying an existing UI:

- Preserve the existing design language.
- Preserve existing colors.
- Preserve existing spacing.
- Preserve existing responsive behavior.
- Preserve existing components where possible.
- Reuse existing utilities/components.
- Do not introduce a completely new design unless requested.

If the user asks for a design improvement, change only the requested area.

---

# 7. DO NOT REWRITE LARGE FILES UNNECESSARILY

Do not rewrite an entire file when a small modification is enough.

Prefer:

- small edits
- targeted changes
- existing components
- existing functions
- existing styles
- existing utilities

Avoid unnecessary refactoring.

---

# 8. DO NOT INSTALL NEW PACKAGES

Do not install new dependencies automatically.

Do not modify `package.json` unless the requested feature genuinely requires a dependency.

If a new package is absolutely necessary:

1. Stop before installing it.
2. Tell the user which package is required.
3. Ask for permission.

Do not silently install packages.

---

# 9. DO NOT CHANGE THE ARCHITECTURE

Respect the existing project architecture.

Do not migrate:

- React → another framework
- JavaScript → TypeScript
- CSS → another styling system
- REST → GraphQL
- existing backend → another backend
- existing database → another database

unless explicitly requested.

---

# 10. DO NOT CREATE DUPLICATE COMPONENTS

Before creating a new component, check whether an existing component can be reused.

For example, if the project already contains:

`Button.jsx`

do not create:

`NewButton.jsx`

unless there is a real reason.

Reuse existing components whenever practical.

---

# 11. HANDLE ONLY THE CURRENT TASK

Each user prompt should be treated as an independent task.

Do not continue doing previous tasks automatically.

Example:

User says:

> "Change the footer"

Only work on the footer.

Do not continue previous navbar, login, dashboard, or popup tasks unless the user asks for them again.

---

# 12. IF THE REQUEST IS CLEAR, DO NOT ASK UNNECESSARY QUESTIONS

If the requested change is clear and can be implemented safely:

**Just implement it.**

Do not ask unnecessary confirmation questions.

Only ask when missing information genuinely prevents implementation.

---

# 13. DO NOT GUESS IMPORTANT DETAILS

If something critical is missing, do not invent it.

Examples:

- unknown API endpoint
- unknown database table
- unknown authentication flow
- unknown file location
- unknown business rule

Use the existing project context if available.

If it still cannot be determined, ask the user.

---

# 14. NO AUTOMATIC TESTING

After making changes:

Do NOT automatically:

- build
- start server
- run tests
- run lint
- run formatter
- run package installation

unless explicitly requested.

Instead, briefly report:

- what was changed
- which files were changed
- whether anything remains for the user to test

---

# 15. CHANGE REPORT

After completing a task, keep the response short.

Use this format:

### Done

- Changed: `path/to/file`
- Changed: `path/to/file`
- Added/updated: requested feature

### Not Done

- No build performed.
- No server started.
- No packages installed.
- No unrelated files changed.

---

# 16. USER PROMPT HAS HIGHER PRIORITY THAN OPTIONAL IMPROVEMENTS

If the user says:

> "Only change X."

Then **ONLY change X.**

If the user says:

> "Don't change anything else."

Treat that as a strict requirement.

---

# 17. PERFORMANCE RULE

Optimize your work for speed.

Do not spend time understanding the entire repository when the task only requires a small part of it.

Preferred workflow:

```text
User Request
     ↓
Identify Relevant Area
     ↓
Read Minimum Required Files
     ↓
Make Targeted Changes
     ↓
Stop
```

NOT:

```text
User Request
     ↓
Scan Entire Repository
     ↓
Read Every File
     ↓
Install Dependencies
     ↓
Build Project
     ↓
Run Server
     ↓
Run Tests
     ↓
Finally Make Changes
```

---

# 18. IMPORTANT STOP RULE

Once the requested task is completed:

**STOP.**

Do not continue exploring the repository.

Do not perform additional improvements.

Do not refactor unrelated code.

Do not build or run the application.

Do not modify anything else.

---

# FINAL RULE

## DO EXACTLY WHAT THE USER REQUESTS.

### Minimum reading.

### Minimum changes.

### No unnecessary commands.

### No automatic build.

### No automatic run.

### No automatic tests.

### No package installation.

### No unrelated modifications.

**The user controls what work should be performed.**

If the user asks for one change, perform one change.

If the user asks for multiple specific changes, perform only those changes.

**DO NOT DO EXTRA WORK.**
