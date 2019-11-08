// import React, {Component, useContext} from 'react';
// import {View, Button, Text} from 'react-native';
// import {ThemeProvider} from './src/context/ThemeContext';
// import ThemeContext from './src/context/ThemeContext';

// const Home = () => {
//   const [theme, dark, toggle] = useContext(ThemeContext);
//   return (
//     <View
//       style={{
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: theme,
//         flex: 1,
//       }}>
//       <Text>{theme}</Text>
//       <Button title="change theme" onPress={() => toggle()} />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <ThemeProvider>
//       <Home />
//     </ThemeProvider>
//   );
// };

// export default App;

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './src/screens/Main';
import SettingScreen from './src/screens/Settings';

const TabNavigator = createStackNavigator({
  Main: MainScreen,
  Settings: SettingScreen,
});

const Tabs = createBottomTabNavigator(TabNavigator);

const AppContainer = createAppContainer(Tabs);

export default AppContainer;
