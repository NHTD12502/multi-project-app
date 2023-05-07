import * as React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { Image, StyleSheet, Text, Pressable, View ,TouchableOpacity, TouchableWithoutFeedback,StatusBar } from "react-native";


import { useNavigation } from "@react-navigation/native";
import { FontFamily } from "../utilities/GlobalStyles";

const MainScreen = () => {
  const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate('RecommendScreen')
    }
  
    return (
        <LinearGradient
          style={styles.detailScreenFirstPage}
          locations={[0, 1, 1, 1]}
          colors={["#eaa9a9", "#000", "#514e4e", "rgba(0, 0, 0, 0)"]}
        >
          <StatusBar style="auto" androidStatusBar="none" />
         <View style = {{flex : 50,  alignItems: "center", justifyContent: "center"}}>
              <Text style={[styles.floodWarningSystem, styles.startFlexBox]}>
                 Flood Warning System
              </Text>
          
          </View>

          <View style = {{flex : 20, alignItems: "center", justifyContent: "center" }}>
            
                <LinearGradient
              style={[styles.box]}
              locations={[0, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#fdfdfd", "#fda43c"]}
            >
              <Pressable>
              <TouchableOpacity onPress={onPressHandler}>
                <View style={[{  alignItems:"center",justifyContent: "center" }]}>
                  <Text style={[styles.start]}>Start</Text>
                </View>
              </TouchableOpacity>
              </Pressable>

                </LinearGradient>
          
          </View>

          <View style = {{flex : 20,  justifyContent:"flex-end"}}>
          <Text style={styles.byPressingStartContainer}>
            By pressing Start, you agree to our {'\n'}
            <Text style={styles.termAndCondition}>Term and Condition</Text>
             <Text> and </Text>
            <Text style={styles.termAndCondition}>Privacy Statement</Text> 
          </Text>
            
          </View>
          
        
          
          
        </LinearGradient>
      );
    };
export default MainScreen;  

    const styles = StyleSheet.create({
      box: {
        height: '50%',
        width: '80%',
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center"
      },
        
        pressableBg: {
            backgroundColor: "transparent",
            width: "100%",
          },
        pressable: {
            borderRadius: 67,
            height: "100%",
            flexDirection: "row",
            padding: 10,
          },
        
      startFlexBox: {
        textAlign: "center",
        position: "absolute",
      },
      detailScreenFirstPageChild: {
        top: 568,
        left: 37,
        borderRadius: 67,
        width: 333,
        height: 80,
        position: "absolute",
      },
      termAndCondition: {
        textDecorationLine: "underline",
      },
      byPressingStartContainer: {
        marginLeft: 20,
        paddingBottom: 20,
        fontSize: 21,
        fontWeight: "500",
       // fontFamily: FontFamily.robotoMedium
       //fontWeight: 'bold',
        
        fontFamily: "Roboto",
        color: "#fda43c",
        textAlign: "left",
        
        position: "absolute",
      },
      floodWarningSystem: {
        
        
        fontSize: 52,
        fontWeight: "800",
        //ffontWeight: 'bold',
        
        fontFamily: "Roboto",
        color: "#ffe7e7",
        
      },
      start: {
        fontSize: 36,
        fontWeight: "700",
       // fontFamily: FontFamily.robotoBold,
      // fontWeight: 'bold',
        
        fontFamily: "Roboto",
        color: "#000",
      //  display: "flex",
        //alignItems: "center",
       // justifyContent: "center",
       // width: 323,
       // height: 60,
        //textAlign: "center",
      },
      detailScreenFirstPage: {
        //borderRadius: Border.br_6xl,
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden",
        backgroundColor: "transparent",
      },
    },);
  
  

