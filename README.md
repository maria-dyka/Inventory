# Inventory

### Setup project via 2 commands
To run the project locally clone this repo and run the `$ npm run setupDevEnv` command in the current directory.

To enable counting active tabs run the `$ node socket.js` in a new terminal.

### Setup project using separate commands
To install the project dependencies run the following command:
```
$ npm install
```

For local development (compile, hot-reloads) run the following command:
```
$ npm run serve
```

For enabling socket.io run the following command in a new terminal:
```
$ node socket.js
```

To compile and minify for production run the following command:
```
npm run build
```

To identify and report on errors and warnings found in the project code run the following command:
```
npm run lint
```
