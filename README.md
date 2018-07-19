# :rocket: vue-cli-plugin-ts-bundler

Zero configuration bundler for your TypeScript library 

## Use case

You create a library component that is compiled in a signle js file, and you want to left the support of TypeScript. 

The plugin allows to generate a single dts file to share your code as external module.

## Features

The plugin is basically a wrapper of [dts-bundle](https://github.com/TypeStrong/dts-bundle). All dts-bundle features are available when using the command. 

And additionally:

- generate the minimum configuration to build TypeScript library
- removes all conflicts with dts generating

## Getting Started

### A new project

If yon don't have a project, you can create it using the preset:

```sh
vue create --preset vatson/vue-ts-lib my-vue-lib
```

_More information you can find here https://github.com/vatson/vue-ts-lib_


### Adding to an existing project

Install the plugin into your project:

```sh
cd my-vue-app
vue add ts-bundler
```

Now you can run `build` or use CLI commands listed below. 


## CLI Commands

The plugin adds one command `bundle-dts` to bundle the declaration files generated during build process.

```sh
npx vue-cli-service bundle-dts [options]
```

or already configured npm command 

```sh
npm run bundleDts
```


All supported options you can find here [https://github.com/TypeStrong/dts-bundle](https://github.com/TypeStrong/dts-bundle#options)


## Example of use

- [https://github.com/vatson/vue-anchored-menu](https://github.com/vatson/vue-anchored-menu)

_Feel free to create an issue if you want to add your project to the list and help others solve their problems on good examples_


## Known caveats

In order for everything to work correctly, there was a need to disable some webpack's loaders:

- `thread-loader` - doesn't allow to write dts files on filesystem;
- `cache-loader` - incorrectly caches __compilerOptions__ passed to `ts-loader`


## Potentially useful

- [https://github.com/vatson/vue-cli-plugin-ts-paths](https://github.com/vatson/vue-cli-plugin-ts-paths) helps to avoid duplication of configurations for your path aliases


## TODO

- Add an ability to replace default HelloWorld with a base component;


## License 

MIT