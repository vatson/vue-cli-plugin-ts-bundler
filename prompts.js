module.exports = [
  {
    type: 'confirm',
    name: 'buildAsLib',
    message: 'Build project as library? [Yes]',
    default: true,
  },
  {
    type: 'confirm',
    name: 'addExternals',
    message: 'Add vue and vue-property-decorator in externals? [No]',
    description: '!EXPEREMENTAL! It overwrites your vue.config.js and everything outside export will be missed',
    default: false,
    when: answers => answers.lib,
  },
  {
    type: 'confirm',
    name: 'bundleAfterBuild',
    message: 'Bundle after build? [Yes] ',
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
    message: 'Path to entry-point [default src/main.ts]',
  },
  {
    type: 'confirm',
    name: 'removeSource',
    message: 'Delete all source typings (i.e. "<baseDir>/**/*.d.ts")? [No]',
    default: false,
  }
]