var PostBuild = require('./post-build');

describe('post-build', function () {
  var brunchConfig;

  beforeEach(function () {
    brunchConfig = {
      plugins: {
        postbuild: {
          test: jasmine.createSpy('postBuildAction')
        }
      }
    };
  });

  it('should be defined', function () {
    expect(PostBuild).toBeDefined();
  });

  it('should be a plugin', function () {
    expect(new PostBuild(brunchConfig)).toBeDefined();
  });

  describe('onCompile', function () {
    var plugin;

    beforeEach(function () {
      plugin = new PostBuild(brunchConfig);
    });

    it('should transform json into an angular module', function () {
      plugin.onCompile();

      expect(brunchConfig.plugins.postbuild.test).toHaveBeenCalledWith(brunchConfig);

    });
  });
});
