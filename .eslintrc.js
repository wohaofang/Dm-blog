
  module.exports = {
    root: true,
  
    env: {
      node: true
    },
  
    extends: [
        "plugin:vue/essential",
        "@vue/airbnb"
    ],
    parserOptions: {
        parser: 'babel-eslint'
      },
    rules: {
       "no-console": [1],
      "no-underscore-dangle": [0],
      "no-param-reassign": [0],
      "camelcase": [1],
      "radix": [0],
      "linebreak-style": [0, "error", "windows"],
      "max-len": [0],
      "import/no-unresolved": [0],
      "import/extensions": [0],
      "import/no-cycle":[0],
      "comma-dangle": [0]
    },
  
  
  }
  