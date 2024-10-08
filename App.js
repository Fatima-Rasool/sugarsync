import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

// Import screens
import HomeScreen from './screens/HomeScreen';
import InfoHubScreen from './screens/InfoHubScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import FoodScanningScreen from './screens/FoodScanningScreen';
import BMIScreen from './screens/BMIScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import HeightScreen from './screens/HeightScreen';
import LogoutScreen from './screens/LogoutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Define the bottom tabs
function Tabs({ navigation }) {
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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Menu')}
              style={{ marginRight: 15 }}
            >
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Info Hub" component={InfoHubScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Food Scanning" component={FoodScanningScreen} />
    </Tab.Navigator>
  );
}

// Define the stack navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }} // Remove default header
        />
        <Stack.Screen name="BMI" component={BMIScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Height" component={HeightScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: 'Menu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Define a simple Menu screen
function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('BMI')}>
        <Text style={{ fontSize: 18, marginVertical: 10 }}>BMI</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
        <Text style={{ fontSize: 18, marginVertical: 10 }}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Height')}>
        <Text style={{ fontSize: 18, marginVertical: 10 }}>Height</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
        <Text style={{ fontSize: 18, marginVertical: 10 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
