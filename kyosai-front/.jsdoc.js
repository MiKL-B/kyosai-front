module.exports = {
  plugins: [

      "node_modules/jsdoc-vuejs"
  ],
  source: {
    include: [
      'src/layouts',
      'src/pages',
      'README.md',
    ],
    includePattern: '\\.(vue|js)$',
  },
  opts: {
    encoding: 'utf8',
  },
};