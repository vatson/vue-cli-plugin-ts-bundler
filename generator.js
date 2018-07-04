module.exports = (api, options) => {
  let bundleDtsCommand = 'vue-cli-service bundle-dts';
  if (options.name) {
    bundleDtsCommand += ` --name ${options.name}`;
  }
  if (options.baseDir) {
    bundleDtsCommand += ` --baseDir ${options.baseDir}`;
  }
  if (options.main) {
    bundleDtsCommand += ` --main ${options.baseDir}`;
  }
  if (options.removeSource) {
    bundleDtsCommand += ' --removeSource';
  }

  let buildCommand = 'vue-cli-service build';

  if (options.lib || options.mode === 'awesome') {
    buildCommand += ' --target lib';
  }

  if (options.incl || options.mode === 'awesome') {
    buildCommand += ' && npm run bundleDts';
  }

  api.extendPackage({
    scripts: {
      'build': buildCommand,
      'bundleDts': bundleDtsCommand,
    }
  });
}
