## Projects Management App

The Project Management App is a web-based application that allows users to manage their projects easily. It was built using React & Typescript.

### Features

- Add new project
- Delete existing project
- View all projects

### Technologies

- React
- TypeScript
- CSS Modules
- Jest

### Installation

To run this app on your local machine, follow these steps:

1. Clone the repo
   ```sh
   git clone https://github.com/petrokss/projects-manager.git
   ```
2. Install the packages
   ```sh
   npm i
   ```
3. Run in dev mode

   ```sh
   npm run dev
   ```

4. Open the app in your browser
5. Use the plus button to add a new pjoject, fill the title
6. View your projects in the list below
7. Click on the edit button to update the title
8. Click the delete button to remove a project

### Testing

This app has unit tests written using Jest. To run the tests, use the command

```sh
npm run test
```

### Additional features

if I had more time, I could have implemented the additional features. Here are some of them that I had in mind and how I would have approached them.

- Responsive and mobile friendly: use more media queries for `ProjectItem` and `ProjectInput` components;
- Drag and drop project: I would use react-dnd or react-beautiful-dnd to implement this functionality. I would use `onDragStart`, `onDragEnd`, `onDragEnter`, `onDragOver`, `onDragLeave`, and `onDrop` events to handle the drag and drop behavior.
- State management (Redux): I would define a store that holds the information about projects and focused project, and use reducers to update the state based on actions.
- Testing: make more tests for components not only for the hook;

### Contact

Oksana Petrenko - [@linkedIn](https://www.linkedin.com/in/petroks/) - [petrokss9@gmail.com](mailto:petrokss9@gmail.com)
