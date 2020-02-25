module.exports = function(eleventyConfig) {

  // Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('css');
  // Tell 11ty to ignore the .gitignore
  eleventyConfig.setUseGitIgnore('false');

  return {
    dir: {
      input: "./",
      output: "./_site"
    },
    passthroughFileCopy: true
  };
}
