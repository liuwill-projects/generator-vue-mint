// app/index.js
'use strict';

var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  client () {
    console.log('method clent just ran');
  }

  packageJSON () {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        includeSass: this.includeSass,
        includeBabel: this.options['babel']
      }
    );
  }

  client () {
    this.fs.copyTpl(
      this.templatePath('client/'),
      this.destinationPath('client/')
    );
  }

  src () {
    this.fs.copyTpl(
      this.templatePath('server/'),
      this.destinationPath('server/')
    );
  }

  makefile () {
    this.fs.copy(
      this.templatePath('Makefile'),
      this.destinationPath('Makefile')
    );
  }

  server () {
    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath('server.js')
    );
  }

  views () {
    this.fs.copy(
      this.templatePath('views/index.html'),
      this.destinationPath('views/index.html')
    );
  }

  babel () {
    this.fs.copy(
      this.templatePath('babelrc'),
      this.destinationPath('.babelrc')
    );
  }

  webpack () {
    this.fs.copy(
      this.templatePath('webpack.js'),
      this.destinationPath('webpack.config.js')
    );
  }

  gitignore () {
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
  }
}