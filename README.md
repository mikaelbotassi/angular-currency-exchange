# angular-currency-exchange

Angular project to exchange some currencies for the Brazilian Real according to current exchange rates.<br>
Here, you will find information about the project structure and how to navigate its different components.<br><br>
Based On: https://www.figma.com/file/iJJ3KTyOKrjgYmL04qF8kr/Currency-Converter?type=design&node-id=0-1&mode=design&t=kug9MnvDK0SwuU16-0

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Installing Node.js

Before you can run the project, you'll need to have Node.js installed on your computer. Here's how to download Node.js based on your operating system:

### Windows

You can download Node.js for Windows from the official website: [Node.js for Windows](https://nodejs.org/)

### macOS

For macOS users, Node.js can be downloaded from the official website: [Node.js for macOS](https://nodejs.org/)

### Linux

Linux users can typically install Node.js using their package manager. For example, on Ubuntu, you can run the following command to install Node.js:

```bash
sudo apt-get install nodejs
```

## Installing Angular CLI (Command Line Interface)


Angular CLI is a powerful tool that simplifies various development tasks. To install Angular CLI for your project, follow these steps:

Open your terminal or command prompt.

Run the following command to install Angular CLI globally on your system:

```bash
npm install -g @angular/cli
```

Wait for the installation to complete. Once it's done, you can verify the installation by running:
```bash
ng version
```

This should display the installed Angular CLI version.

Now you're ready to use Angular CLI to simplify your development tasks, such as generating components, services, modules, and more.

## Getting Started

If you want to clone and run this project locally, follow these steps:

1. Clone this repository to your local machine using the `git clone` command.

2. Install project dependencies with `npm install`.

3. Run the project with `ng serve`.
   1. If you run `ng serve` and encounter the following error: `ng: The file 'file_path' cannot be loaded because running scripts is disabled on this system`
   2. Open a Shell as an administrator.
   3. Run the command `Get-ExecutionPolicy`; it should return `Restricted`.
   4. Run the command `Set-ExecutionPolicy RemoteSigned`.
   5. Finally, run `ng serve`.

4. Open your browser and go to `http://localhost:4200/` to see the application in action.

## Documentation using Storybook with Angular

This project uses [Storybook](https://storybook.js.org/) to provide a development environment for visualizing our angular components and services. Storybook allows you to build, test, and document your UI components separately from your application, making it easier to iterate on and share UI elements.

### Running Storybook

To get started with Storybook for this project, follow these steps:

1. If you haven't yet installed the project's dependencies with `npm install`, you need to do so to view the documentation.

2. Start Storybook by running:

   ```bash
   ng run angular-currency-exchange:storybook
   ```

3. Open your web browser and navigate to `http://localhost:6006/` to access the Storybook UI. You should see a list of your Angular components, and you can interact with them individually.

>
> For more information on how to write stories and configure Storybook, refer to the [Storybook documentation](https://storybook.js.org/docs/angular/get-started/introduction).
>

## Project Structure

The project has been organized to facilitate understanding and maintenance. The main structure is as follows:

- `src/`: The root directory of the project source code.
  - `assets/`: Contains static files such as images, styles, and fonts.
  - `app/`: The main application folder.
    - `pages/`: Contains the main pages of the application.
    - `shared/`: Includes shared components throughout the application.
    - `components/`: Contains reusable components throughout the application.
    - `models/`: Place for data model definitions.
    - `services/`: Stores services for business logic.
    - `app-routing.module.ts`: Application routing configuration.
    - `app.component.ts`: Root component of the application.
  
  - `app.module.ts`: Main application module configuration.

### Pages

Inside the `pages/` folder, you will find the main pages of the application. Each page may have its own folder structure, including specific components, services, and models.

### Components

The `components/` folder is where reusable components are stored. This promotes code reuse throughout the application.

### Services

The `services/` folder contains services for business logic. This helps maintain separation of concerns and makes the code more modular.

## Running unit tests
A good way to analyze what components and services should do is to check the unit tests. Use the command:
`ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contribution

Contributions are welcome! If you'd like to contribute to this project, follow the contribution guidelines and submit a pull request. We'll be happy to review and merge your contributions.

Enjoy using the application and exploring the source code!
