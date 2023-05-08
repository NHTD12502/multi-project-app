/**
 * @format
 */

import React from 'react';
//import {AppRegistry,Text,View} from 'react-native';

import { StatusBar } from 'react-native';
import {name as appName} from './app.json';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Mainscreen from './screen/MainScreen';
import RecommendScreen from './screen/RecommendScreen'
import DetailScreen from './screen/DetailScreen'
import SearchList from './screen/SearchList'

const Stack = createNativeStackNavigator();
const app = (props) =>{
  React.useEffect(() => {
    StatusBar.setBackgroundColor('#eaa9a9'); 
    // StatusBar.setTranslucent(true);
   }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name ="MainScreen"
                    component ={Mainscreen}
                    options={{headerShown:false}}
                />

                <Stack.Screen
                    name ="RecommendScreen"
                    component ={RecommendScreen}
                    options={{
                     // headerLeft: null, // add this line
                      //headerBackImage: null,
                        title: 'Recommend device',
                        headerStyle: {
                          backgroundColor: '#EAA9A9',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          
                        },
                        
                      }}
                    />

                <Stack.Screen
                    name ="DetailScreen"
                    component ={DetailScreen}
                    options={{
                        headerShown:false,
                        }
                      }
                    />

                  <Stack.Screen
                    name ="SearchList"
                    component ={SearchList}
                    options={{
                      headerTintColor: '#fff',
                      title: 'Add new',
                      headerStyle: {
                        backgroundColor: '#EAA9A9',
                      },
                        }
                      }
                    />


            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default app;
//AppRegistry.registerComponent(appName, () => app);