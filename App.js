// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// // Import screens
// import HomeScreen from './screens/HomeScreen';
// import InfoHubScreen from './screens/InfoHubScreen';
// import AnalyticsScreen from './screens/AnalyticsScreen';
// import FoodScanningScreen from './screens/FoodScanningScreen';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             switch (route.name) {
//               case 'Home':
//                 iconName = focused ? 'home' : 'home-outline';
//                 break;
//               case 'Info Hub':
//                 iconName = focused ? 'information-circle' : 'information-circle-outline';
//                 break;
//               case 'Analytics':
//                 iconName = focused ? 'analytics' : 'analytics-outline';
//                 break;
//               case 'Food Scanning':
//                 iconName = focused ? 'camera' : 'camera-outline';
//                 break;
//               default:
//                 iconName = 'home'; // Fallback icon
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Info Hub" component={InfoHubScreen} />
//         <Tab.Screen name="Analytics" component={AnalyticsScreen} />
//         <Tab.Screen name="Food Scanning" component={FoodScanningScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }





// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import { Menu, Provider } from 'react-native-paper';

// // Import screens
// import HomeScreen from './screens/HomeScreen';
// import InfoHubScreen from './screens/InfoHubScreen';
// import AnalyticsScreen from './screens/AnalyticsScreen';
// import FoodScanningScreen from './screens/FoodScanningScreen';

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <Provider>
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={({ route, navigation }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
//               if (route.name === 'Home') {
//                 iconName = focused ? 'home' : 'home-outline';
//               } else if (route.name === 'Info Hub') {
//                 iconName = focused ? 'information-circle' : 'information-circle-outline';
//               } else if (route.name === 'Analytics') {
//                 iconName = focused ? 'analytics' : 'analytics-outline';
//               } else if (route.name === 'Food Scanning') {
//                 iconName = focused ? 'camera' : 'camera-outline';
//               }

//               return <Ionicons name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: 'tomato',
//             tabBarInactiveTintColor: 'gray',
//             headerRight: () => <MenuButton navigation={navigation} />, // Adding the Menu Button in the header
//           })}
//         >
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Info Hub" component={InfoHubScreen} />
//           <Tab.Screen name="Analytics" component={AnalyticsScreen} />
//           <Tab.Screen name="Food Scanning" component={FoodScanningScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// const MenuButton = ({ navigation }) => {
//   const [visible, setVisible] = useState(false);

//   const openMenu = () => setVisible(true);
//   const closeMenu = () => setVisible(false);

//   return (
//     <Menu
//       visible={visible}
//       onDismiss={closeMenu}
//       anchor={
//         <TouchableOpacity onPress={openMenu} style={{ marginRight: 15 }}>
//           <Ionicons name="menu" size={30} color="black" />
//         </TouchableOpacity>
//       }
//     >
//       <Menu.Item onPress={() => navigation.navigate('Height')} title="Height" />
//       <Menu.Item onPress={() => navigation.navigate('BMI')} title="BMI" />
//       <Menu.Item onPress={() => navigation.navigate('ChangePassword')} title="Change Password" />
//       <Menu.Item onPress={() => navigation.navigate('Logout')} title="Logout" />
//     </Menu>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Ionicons } from '@expo/vector-icons';
// import { Provider, Menu } from 'react-native-paper';

// // Import your screens
// import HomeScreen from './screens/HomeScreen';
// import HeightScreen from './screens/HeightScreen';
// import BMIScreen from './screens/BMIScreen';
// import ChangePasswordScreen from './screens/ChangePasswordScreen';
// import LogoutScreen from './screens/LogoutScreen';
// import InfoHubScreen from './screens/InfoHubScreen';
// import AnalyticsScreen from './screens/AnalyticsScreen';
// import FoodScanningScreen from './screens/FoodScanningScreen';

// // Create a Tab Navigator and a Stack Navigator
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// // Create the Tabs Component for Bottom Tab Navigation
// const Tabs = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === 'Home') {
//           iconName = focused ? 'home' : 'home-outline';
//         } else if (route.name === 'Info Hub') {
//           iconName = focused ? 'information-circle' : 'information-circle-outline';
//         } else if (route.name === 'Analytics') {
//           iconName = focused ? 'analytics' : 'analytics-outline';
//         } else if (route.name === 'Food Scanning') {
//           iconName = focused ? 'camera' : 'camera-outline';
//         }

//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//       tabBarActiveTintColor: 'tomato',
//       tabBarInactiveTintColor: 'gray',
//     })}
//   >
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Info Hub" component={InfoHubScreen} />
//     <Tab.Screen name="Analytics" component={AnalyticsScreen} />
//     <Tab.Screen name="Food Scanning" component={FoodScanningScreen} />
//   </Tab.Navigator>
// );

// // Create the App Component with Stack Navigator
// export default function App() {
//   return (
//     <Provider>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={({ navigation }) => ({
//             headerRight: () => <MenuButton navigation={navigation} />, // Add menu button to every screen
//           })}
//         >
//           <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
//           <Stack.Screen name="Height" component={HeightScreen} />
//           <Stack.Screen name="BMI" component={BMIScreen} />
//           <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
//           <Stack.Screen name="Logout" component={LogoutScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// // Menu Button Component
// const MenuButton = ({ navigation }) => {
//   const [visible, setVisible] = useState(false);

//   const openMenu = () => setVisible(true);
//   const closeMenu = () => setVisible(false);

//   return (
//     <Menu
//       visible={visible}
//       onDismiss={closeMenu}
//       anchor={
//         <TouchableOpacity onPress={openMenu} style={{ marginRight: 15 }}>
//           <Ionicons name="menu" size={30} color="black" />
//         </TouchableOpacity>
//       }
//     >
//       <Menu.Item onPress={() => navigation.navigate('Height')} title="Height" />
//       <Menu.Item onPress={() => navigation.navigate('BMI')} title="BMI" />
//       <Menu.Item onPress={() => navigation.navigate('ChangePassword')} title="Change Password" />
//       <Menu.Item onPress={() => navigation.navigate('Logout')} title="Logout" />
//     </Menu>
//   );
// };


// screens/HeightScreen.js
// App.js
// App.js
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import InfoHubScreen from './screens/InfoHubScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import FoodScanningScreen from './screens/FoodScanningScreen';
// import HeightScreen from './screens/HeightScreen';
import BMIScreen from './screens/BMIScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import LogoutScreen from './screens/LogoutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Info Hub') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === 'Food Scanning') {
            iconName = focused ? 'camera' : 'camera-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Info Hub" component={InfoHubScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Food Scanning" component={FoodScanningScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Height" component={HeightScreen} /> */}
        <Stack.Screen name="BMI" component={BMIScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


