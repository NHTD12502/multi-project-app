import {AppRegistry,Text,View} from 'react-native';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import app from './App.js';


AppRegistry.registerComponent(appName, () => app);