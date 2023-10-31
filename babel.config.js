module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '@Auth': './src/modules/Auth/',
          '@Home': './src/modules/Home/',
          '@Sellers': './src/modules/Sellers/',
          '@Chats': './src/modules/Chats/',
          '@Profile': './src/modules/Profile/',
          '@Property': './src/modules/Property/',
          '@commons': './src/commons/',
          '@components': './src/components/',
          '@assets': './src/Assets/',
          '@baseUrl': './src/baseUrl.js',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
