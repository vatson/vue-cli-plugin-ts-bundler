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
If yon don't have a project created with Vue CLI 3:

```sh
vue create my-vue-app
```

Install the plugin into your project:

```sh
cd my-vue-app
vue add dts-bundler
```

## CLI Commands

The plugin adds one command `bundnle-dts` to bundle the generated declaration files during build process. 

```sh
npx vue-cli-service bundle-dts [options]
```

All supported options you can find here [https://github.com/TypeStrong/dts-bundle](https://github.com/TypeStrong/dts-bundle#options)


## Known caveats

In order for everything to work correctly, there was a need to disable some webpack's loaders:

- `thread-loader` - doesn't allow to write dts files on filesystem;
- `cache-loader` - incorrectly caches __compilerOptions__ passed to `ts-loader`

## License 

MIT