# todo-list - Introduction

This application demonstrates the React, TypeScript, Redux based dashboard having list of todos, with add/update/delete/move to my list options, filters - by name, and completed. Also, basic navigation for all todo list and my list view.

# Technologies Used:

- React, TypeScript, HTML5, CSS.
- Plugins/Libraries:
  - Redux for stores and Thunk middleware.
  - JSON-Placeholder for mocking API (to fetch initial todos list)
  - TSLint, Prettier for development, verified and indented code.
  - LocalStorage for CRUD operations and storing selected list(my list).
- Stack: Create-react-app, Typescript, npm (node modules) etc.

## Live:

[Todo List App](http://mazzzy.github.io/todo-list/)

# Features / points covered:

It has been implemented with below aspects,

- Used create-react-app and typescript for implementation.
- Design patterns:
  - Rails design pattern for redux.
  - Atomic design for components.
- Dev tools:
  - Used TSLint for code verification, check and auto fixes.
  - Used prettier for indentation.
- Gh-pages for build and deploy over free Github pages.
- Check if list is present in LocalStorage otherwise fetched initial todolist gets from mock API provided by JSON Placeholder and store in LocalStorage for further operations.
- Client-side Pagination (items 5 per page) for todolist
- CRUD:
  - Operations on local stored data.
  - Create form in sidebar to create todo
  - Update & Delete modals for these operations.
- Complete todo option:
  - Check/Uncheck feature during edit/update of todo item
  - Completed badge gets added to completed todo item.
- Move item to mylist option, before that confirm message and add to selectedlist.
- Navigation to switch to all lists and my lists.
- Filters:
  - Filter todo items by name/title
  - Filter todo by completion status
- Modals:
  - Edit modal for update todo by title name and complete check option
  - Delete modal, confirm before and then delete accordingly.
  - Confirm modal before moving todo item to mylist from all-lists and vice-versa.
- Responsive:
  - Added media query styling and specific breakpoint considered to make it responsive across desktops, tablet and phone widths in respective modes.
  - Breakpoint added of “768px” and applications gets responsive across these devices.

# Folder Structure and Files:

- containers for redux main container that has Workspace.ts
- store for redux store, types for interface type, respective reducers and actions.
- config for API configuration.
- utils for utilities for datetime operations, localStorage, filters etc.
- components for all the components based on atomic design pattern – templates to organisms to molecules to atoms.

## How to use

Go to root directory "todolist-app" and Execute commands with `npm`

## Installing the application

- If node is not installed then Install [node] (https://nodejs.org/en/download/)
- Run the following command to load all the module dependencies for app:

```bash
npm install
```

## Dev mode

```bash
npm run tslint
```

It runs tslint and shows error within the application

```bash
npm run tslint:fix
```

It runs and auto-fixes errors including prettier indentation within the application.

## To run the application on dev mode

```bash
npm start
```

It runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.

## Deploy on GH-pages:

```bash
npm run build
```

It runs and make application build ready under build directory.

```bash
npm run deploy
```

It takes build code and deploy over specificed homepage url under package.json file. The app get deployed over specified url

# Screenshots

## Desktop views

### Landing page - All todos

<p align="center">
  <img src="screenshots/todolist-landing-page-all-todos.png" alt="todolist-landing-page-all-todos"/>
  <br/>
</p>

### Landing page - My todos

<p align="center">
  <img src="screenshots/todolist-landing-page-my-todos.png" alt="todolist-landing-page-my-todos"/>
  <br/>
</p>

### Create todo item

<p align="center">
  <img src="screenshots/todolist-create-todo-item.png" alt="todolist-create-todo-item"/>
  <br/>
</p>

### Confirm modal - To move todo item to respective list

<p align="center">
  <img src="screenshots/todolist-modal-confirm-to-move-in-lists.png" alt="todolist-modal-confirm-to-move-in-lists"/>
  <br/>
</p>

### Edit modal - To update todo item also mark as complete option

<p align="center">
  <img src="screenshots/todolist-modal-edit-todo-item.png" alt="todolist-modal-edit-todo-item"/>
  <br/>
</p>

### Delete modal - To delete todo item

<p align="center">
  <img src="screenshots/todolist-modal-delete-todo-item.png" alt="todolist-modal-delete-todo-item"/>
  <br/>
</p>

### Filters - by name & completed flag

<p align="center">
  <img src="screenshots/todolist-filterby.png" alt="todolist-filterby"/>
  <br/>
</p>

## Mobile views

### Mobile - Portrait view - 1

<p align="center">
  <img src="screenshots/todolist-mobile-portrait-mode-1.png" alt="todolist-mobile-portrait-mode-1"/>
  <br/>
</p>

### Mobile - Portrait view - 2

<p align="center">
  <img src="screenshots/todolist-mobile-portrait-mode-2.png" alt="todolist-mobile-portrait-mode-2"/>
  <br/>
</p>

### Mobile - Landscape view - 1

<p align="center">
  <img src="screenshots/todolist-mobile-landscape-mode-1.png" alt="todolist-mobile-landscape-mode-1"/>
  <br/>
</p>

### Mobile - Landscape view - 2

<p align="center">
  <img src="screenshots/todolist-mobile-landscape-mode-2.png" alt="todolist-mobile-landscape-mode-2"/>
  <br/>
</p>

## Tablet views

### Tablet - Portrait view

<p align="center">
  <img src="screenshots/todolist-tablet-portrait-mode.png" alt="todolist-tablet-portrait-mode"/>
  <br/>
</p>

### Tablet - Landscape view

<p align="center">
  <img src="screenshots/todolist-tablet-landscape-mode.png" alt="todolist-tablet-landscape-mode"/>
  <br/>
</p>
