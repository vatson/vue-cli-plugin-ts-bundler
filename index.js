const dts = require('dts-bundle');
const path = require('path');

module.exports = (api, options) => {

  api.chainWebpack(config => {
    //Disable thread-loader, cache-loader
    const tsRule = config.module.rule('ts').test(/\.ts$/);
    const tsxRule = config.module.rule('tsx').test(/\.tsx$/);

    tsRule.uses.delete('cache-loader');
    tsxRule.uses.delete('cache-loader');
    tsRule.uses.delete('thread-loader');
    tsxRule.uses.delete('thread-loader');

    //Enable the generating of declaration files 
    tsRule
      .use('ts-loader')
      .loader('ts-loader')
      .tap(opts => {
        opts.compilerOptions = { declaration: true };
        opts.transpileOnly = false;
        opts.happyPackMode = false;
        return opts;
      });
  });

  //Bundle command
  api.registerCommand('bundle-dts', {
    description: 'Bundle generated declaration files to a single file',
    usage: 'vue-cli-service bundle-dts [options]',
  }, async (args) => {
    const config = api.resolveWebpackConfig();

    const baseDir = config.output.path;
    const entry = path.parse(config.entry.app[0]);
    const main = path.resolve(baseDir, entry.dir, entry.name + '.d.ts');
    const name = require(api.resolve('package.json')).name;

    delete args['_'];

    dts.bundle({
      ...{ baseDir, main, name },
      ...args
    });
  });
}
