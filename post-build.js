"use strict";

function PostBuild(config) {
  this.brunchConfig = config || {};
  this.config = (this.brunchConfig.plugins || {}).postbuild || {};
}

PostBuild.prototype.brunchPlugin = true;
PostBuild.prototype.onCompile = onCompile;

function onCompile(files) {
  for(var key in this.config) {
    this.config[key](this.brunchConfig);
  }
}

module.exports = PostBuild;
