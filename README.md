## Portfolio Website
A personal portfolio website created using ReactJS, Material UI. Implementing third-party styling TailwindCSS.

### Create New React App
To create new React App <br>
Link: https://reactjs.org/docs/create-a-new-react-app.html

```
npx create-react-app my-app
cd my-app
npm start
```

### Project setup
- git clone https://github.com/OtterLab/react-portfolio-app.git
- place the project inside a folder
- npm install
- cd folder
- npm start

#### Using Material UI and TailwindCSS together
Install TailwindCSS to the project:

```
npm install -D tailwindcss
npx tailwindcss init
```

Add TailwindCSS path:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind directives to the CSS file:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Full installation https://tailwindcss.com/docs/installation

### Configure TailwindCSS in Material UI:
Add this code to index.js file

```
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material/styles';
```

Add injectFirst to the StyledEngineProvider tag
```
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
```
