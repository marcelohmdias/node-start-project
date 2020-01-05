module.exports = {
  presets: [
    ['@babel/preset-typescript'],
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        targets: {
          node: process.versions.node
        }
      }
    ]
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./dist/'],
        alias: {
          '@': './dist/',
          '@interfaces': './dist/interfaces/',
          '@libs': './dist/libs/',
          '@domains': './dist/domains/',
          '@server': './dist/server/',
          '@helpers': './dist/helpers/'
        }
      }
    ]
  ]
}
