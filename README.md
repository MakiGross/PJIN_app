# WayAround app

Navigation app for indoor spaces.

### configuration file

.txt file with graph of your indoor space (every room is one node)
in file 'data' is example of our faculty (not all floors for now)

test data or our data in folder 'data'

### starting app

app is on local host only for now
- Terminal - be in app folder (> PJIN_APP)
   > npm run dev

### picture/plan of the space

- you can change the picture to your's plan of indoor space that you want to navigate or just get here some nice picture of your building 
- change it in App.tsx (line 68)

## Sources
- Vite.js
- Chakra UI



App is made for CTU Prague, faculty of civil engineering, PJIN


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
