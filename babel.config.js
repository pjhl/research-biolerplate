module.exports = api => {
  const isTest = api.env('test')
  // console.log('Babel isTest:', isTest) // true or false

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          }
        }
      ]
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties"
    ]
  }
}
