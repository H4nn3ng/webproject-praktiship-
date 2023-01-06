# medienprojekt-frontend

## formatting

we'll use prettier for most files, configuration is provided in `package.json`:
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

for our view files we'll use ESLint:
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

prettier is disabled for all files ending with `.vue`. there are many possibilities on how to use ESLint, the easiest are:

- right click -> Format With -> ESLint
- F1 -> ESLint Fix ...
- npm run lint

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
