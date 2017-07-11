
Based on webpack2, support ejs and scss.

## Build
```sh
# install build and dev tools
npm install -g webpack webpack-dev-server

# install local dependencies
npm install

# to build (Development)
npm start

# to build (Production)
npm run prod
```

## Support ES6+ 
1. Run 
```sh
npm i -D babel-core babel-preset-latest babel-preset-stage-2 babel-runtime
npm i -D babel-plugin-transform-runtime babel-loader
``` 

2. Create ```.babelrc``` :
```
{
  "presets": ["latest", "stage-2"],
  "plugins": ["transform-runtime"]
}
```

3. Config ```webpack-config/base.js``` :
```
...
{
    test: /\.js$/,
    loader: 'babel-loader'
}
...
```

