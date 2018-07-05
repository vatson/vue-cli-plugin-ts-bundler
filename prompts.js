module.exports = [
  {
    type: 'confirm',
    name: 'lib',
    message: 'Build project as library?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'incl',
    message: 'Add dts bundling in build?',
    default: true,
  },
  {
    type: 'input',
    name: 'name',
    message: 'Bundle name [default name from package.json]',
  },
  {
    type: 'input',
    name: 'baseDir',
    message: 'Base directory to be used for discovering type declarations [default autodiscovered]',
  },
  {
    type: 'input',
    name: 'main',
    message: 'Path to entry-point [default from webpack]',
  },
  {
    type: 'confirm',
    name: 'removeSource',
    message: 'Delete all source typings (i.e. "<baseDir>/**/*.d.ts")?',
    default: false,
  }
]