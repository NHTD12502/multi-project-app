import * as React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { Image, StyleSheet, Text, Pressable, View,TouchableOpacity, Button,StatusBar  } from "react-native";

import { Border, FontFamily } from "../utilities/GlobalStyles";
import { List, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import BottomBar from "./component/BottomBar";
import { useCallback } from 'react';
import serverApi from "../api/serverApi";



// const renderRectangleBox = () => {
//     return (
//       <View style={{
//         width: 200,
//         height: 200,
//         borderRadius: 10,
//         backgroundColor: "red",
//       }}>
//         {text.map((text, index) => (
//           <Text key={index} style={{
//             textAlign: "center",
//             fontSize: 20,
//             margin: 10,
//           }}>{text}</Text>
//         ))}
//       </View>
//     );
//   };


const DetailScreen = ({navigation,route}) => {
    const {   selectedDevices,item } = route.params;
    const { device_id, district, address } = item;
    const [ information, setInformation ] = React.useState({
        rain:"",
        temp:32,
        hummid:"",
        flood_level:0
    })
    const [encodeImage, setEncodeImage] = React.useState("")
    React.useEffect(() => {
        serverApi.get('/getDatas', {
           params: {
            device_id: device_id,
            latest: 1,
           }
        })
        .then((res) => {
            
            setInformation(res.data)
            serverApi.get('/getImage', {
                params: {
                 id: res.data.id
                }
             })
             .then((res) => {
             
                setEncodeImage(res.data.image)
             })
        })
    }, [item])
    

    const onPressHandler = () => {
       // navigation.navigate('SearchList',{selectedDevices: selectedDevices, setSelect: memoizedSetSelect})
        navigation.navigate('SearchList',{selectedDevices: selectedDevices})
    }
    // const district = route.params.district;
    // const information = route.params.information;
    // const name = route.params.name;
   
    const bgColor = '#9F4D00'
    const levelColor = [['#84807C', '#84807C', '#84807C','#FFFFFF'],['#00B112','#84807C','#84807C','#00FA64'],['#00B112','#FFE604', '#84807C','#F5FA00'], ['#00B112','#FFE604','#E10000','#FA0000']]
    const textColor = ["No Flood", "Low", "High", "Critical"]
    const stateIOT = ["Suspending", "Working"]
    // const floodLevel = information.flood_level;
    // let rectangleColor1;
    // let rectangleColor2;
    // let rectangleColor3;
    // let textcolor
    //  switch (floodLevel) {
    //         case 0:
    //             rectangleColor1 = '#84807C';
    //             rectangleColor2 = '#84807C';
    //             rectangleColor3 = '#84807C';
    //             textcolor = '#FFFFFF'
    //             break;
    //         case 1:
    //             rectangleColor1 = '#00B112';
    //             rectangleColor2 = '#84807C';
    //             rectangleColor3 = '#84807C';
    //             textcolor = '#00FA64'
    //             break;
    //         case 2:
    //             rectangleColor1 = '#00B112';
    //             rectangleColor2 = '#FFE604';
    //             rectangleColor3 = '#84807C';
    //             textcolor = '#F5FA00'
    //             break;
    //         case 3:
    //             rectangleColor1 = '#00B112';
    //             rectangleColor2 = '#FFE604';
    //             rectangleColor3 = '#E10000';
    //             textcolor = '#FA0000'

    //             break;
    //         }
 
    return(
    
    <LinearGradient
    
          style={styles.main}
          locations={[0, 1, 1, 1]}
          colors={["#eaa9a9", "#000", "#514e4e", "rgba(0, 0, 0, 0)"]}
        >
            <StatusBar style="auto" androidStatusBar="none" />
            <View style ={{flex:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'white',textShadowRadius:10}}>{address}</Text>
            </View>
            <View style ={{flex:20,justifyContent:'center',alignItems:'center'}}>

                {/* <View style={{flex:1,flexDirection:'row' , width :"80%", backgroundColor: "#F9B87E" , justifyContent: 'space-evenly'}}>
                    {/* <View style={{flex:1  }}></View>


                    <View style={{flex:1  }}></View> *

                    <Text style ={{textAlignVertical:"bottom", marginBottom:10, fontSize: 16, fontWeight: "regular"}} > Temparature </Text>
                    <View style={styles.verticleLine}></View>
                    <Text style ={{textAlignVertical:"bottom", marginBottom:10, fontSize: 16, fontWeight: "regular"}} > Humidity </Text>

                </View> */}
               
                    <View style={styles.container}>
                        <View style={[styles.box, styles.box1]}>
                            <Text style ={styles.text_value}>
                                {information.temp}&deg;C
                            </Text>

                            <Text style ={styles.text_category}>
                                Temparature
                            </Text>
                        </View>

                        <View style={styles.line}></View>
                        <View style={[styles.box,styles.box2]}>
                            <Text style ={styles.text_value}>
                                {information.hummid*100}%
                            </Text>

                            <Text style ={styles.text_category}>
                                Humidity
                            </Text>
                        
                        </View>
                    </View>
                    <View style={styles.horiz_line}></View>
                    <View style={styles.container}>
                        <View style={[styles.box, styles.box3]}>
                            <Text style ={styles.text_value}>
                                {information.rain ? 'Rainy' : 'Sunny'}
                            </Text>

                            <Text style ={styles.text_category}>
                                Weather
                            </Text>
                        </View>
                        <View style={styles.line}>
                            
                        </View>
                        <View style={[styles.box,styles.box4]}>
                            <Text style ={styles.text_value}>
                                {stateIOT[item.state]}
                            </Text>

                            <Text style ={styles.text_category}>
                                State
                            </Text>
                        </View>
                    </View>
        
            
                </View>
            <View style ={{flex:18,alignItems:'center'}}>

                <Text style={{fontSize:30,fontWeight:'bold',color:'white',justifyContent:'flex-start',textShadowRadius:10,}}>Flood Warning
                </Text>
                <View style={{flexDirection:'row'  }}>
                    {levelColor[information.flood_level].slice(0,3).map((ele, idx) => (
                        <View key={idx} style = {[styles.rectangle, { backgroundColor: ele }]} />    
                    ))}
                    
                    {/* <View style = {[styles.rectangle, { backgroundColor: rectangleColor2 }]} />  
                    <View style = {[styles.rectangle, { backgroundColor: rectangleColor3 }]} />   */}
                </View>

            </View>
            <View style ={{flex:25,justifyContent:'center',alignItems:'center'}}>
                <View style = {styles.imageBox} >
                    <View style={{justifyContent:'center',alignItems:'center'  }}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center',textShadowRadius:10,color: levelColor[information.flood_level].slice(-1)[0]}}>{textColor[information.flood_level]}</Text>
                        {encodeImage !== "" && 
                        <Image
                            style={styles.image}
                            source={{
                                uri:  `data:image/jpeg;base64,${encodeImage}`,
                             }}
                        /> || 
                        <Image
                            style={styles.image}
                            source={
                                 require('../assets/image/dailonguyenvanlinh.jpg')
                             }
                        />}
                    </View>
  
                </View>
            </View>
            <View style ={{flex:18}}>
                <Text style={{fontSize:21,fontWeight:'regular',color:'#FDA43C',textAlign: 'left',paddingHorizontal: 20, marginTop:20}} >Device in use
                    </Text>

                    {/* <LinearGradient
            style={styles.gradient}
            colors={['#FFFFFF', '#FF0000']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            /> */}
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1, alignItems: "center", justifyContent: "center", marginBottom: 20}}>
                    
                  
                 <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                        <View style={ styles.horizontal}></View>
                        <View style={ styles.vertical}></View>
                    </TouchableOpacity> 
                    </View>
                
                    <View style={{flex:5}}>

            <LinearGradient
              style={styles.box_list}
              locations={[0, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#fdfdfd", "#fda43c"]}>
                <View style = {{paddingHorizontal: 20}} >
                    <BottomBar selectedDevices={selectedDevices} screenName = {device_id} />
                </View>
                </LinearGradient>
                </View>    
             </View>           
            </View>

    </LinearGradient>

    // <Text>Hello</Text>
            )
}
export default DetailScreen;



const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    box_list: {
       // flex: 5,
        marginTop: 5,
        height: '75%',
       // width: '10%',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
       // alignSelf:"flex-end",
        justifyContent: "center",
        
      },
    list : {
        height: '50%',
        width: '40%',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
      },
      text_category: {
        fontSize: 16,
       // fontStyle: "Regular",
        fontFamily: "Roboto",
        marginTop: 5

      },
      text_value:{
        fontSize: 25,
        fontWeight: 'bold',
        
        fontFamily: "Roboto",
        marginTop: 15
      },
      box: {
        height: '100%',
        width: '40%',
        backgroundColor: '#F9B87E',
        alignItems: "center",
        justifyContent: "center"
      },
      box1: {
        borderTopLeftRadius: 15
      },
      box2: {
        borderTopRightRadius: 15
      },
      box3: {
        borderBottomLeftRadius: 15
      },
      box4: {
        borderBottomRightRadius: 15
      },
      line: {
        height: '100%',
        width: 1,
        backgroundColor: '#EA9939',
      },
      horiz_line:{
        width: "80%",
        height : 1,
        backgroundColor: '#EA9939'
      },
    verticleLine: {
        height: '100%',
    width: 1,
    backgroundColor: '#909090',
    },
    detailScreenFirstPageChild: {
        top: 568,
        left: 37,
        borderRadius: 67,
        width: 333,
        height: 80,
        position: "absolute",
      },
        rectangle: {
            width: 110,
            height: 83,
           // backgroundColor: '#84807C',
            borderColor: '#6F6D6A',
            borderWidth: 2


    },
    imageBox: {
        height: '100%',
        width: '80%',
        backgroundColor: '#F9B87E',
        borderRadius: 10
    },
    image: {
        height: '80%',
        width: '60%',
       
    },
    openRectangle: {
        height: 83,
        width: '100%',
        paddingHorizontal: 80
    },
    button: {
      //  flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#9F4D00',
        alignItems: 'center',
      },
      bar: {
        //margin:  auto,
       // position: absolute,
        backgroundcolor: "#FFFFFF",
      },
      
      horizontal: {
        position: "absolute",
        top: 18,
        width: '50%',
        height: 4,
        backgroundColor: '#FFFFFF',
      
      },
      
      vertical :{
        position: 'absolute',
        left: 18,
        width: 4,
        height: '50%',
        backgroundColor: '#FFFFFF',
      }

}
)
