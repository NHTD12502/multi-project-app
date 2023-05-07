import * as React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { Image, StyleSheet, Text, Pressable, View,TouchableOpacity ,StatusBar} from "react-native";

import { FontFamily } from "../utilities/GlobalStyles";
import { List, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const RecommendScreen =(props) => {
    
    const [Items, setItems] = React.useState([
        { 
            device_id: 'IOT 33',
            district: 'District 1',
            location : '930 Ly Thuong Kiet ',
            information : {temp: '27°C', humid : '25%', weather: "Rain", state: 'Working', flood: "No flood"}
         },
        { 
            device_id: 'IOT 12',
            district: 'District 1',
            location : '930 Ly Thuong Kiet ' ,
            information : {temp: '32°C', humid : '25%', weather: "Rain", state: 'Working', flood: "Low"}
        },
        { 
            device_id: 'IOT 14',
            district: 'District 1',
            location : '930 Ly Thuong Kiet ',
            information : {temp: '31°C', humid : '25%', weather: "Rain", state: 'Working', flood: "High"}
        },
        { 
            device_id: 'IOT 20',
            district: 'District 1',
            location : '930 Ly Thuong Kiet ',
            information : {temp: '30°C', humid : '25%', weather: "Rain", state: 'Working', flood: "Critical"}
        }
    ])


    const [selectedDevices, setSelectedDevices] = React.useState([]);

    const navigation = useNavigation();
    // const onPressHandler = (Items) => {
    //     navigation.navigate('DetailScreen', { information: Items.information, name: Items.name, district: Items.district })
    // }

    // const onPressHandler = () => {
    //     navigation.navigate('DetailScreen', {
    //       information: Items.information,
    //       name: Items.name,
    //       district: Items.district,
    //     });
    //   };

    
    const ItemView = ({item}) => {
        const isSelected = selectedDevices.some((selectedItem) => selectedItem.device_id === item.device_id);

        // goooooooooooooooood
        const handleSelectDevice = () => {
            const newSelectedDevices = isSelected 
              ? selectedDevices.filter((selectedItem) => selectedItem !== item)
              : [item, ...selectedDevices];
          
            setSelectedDevices(newSelectedDevices);
           
            navigation.navigate('DetailScreen', {
            
              selectedDevices: newSelectedDevices,
            //  setSelect: setSelectedDevices,
              item: item
            });
          }
        return (

           // <TouchableOpacity onPress={onPressHandler}>
        //    <TouchableOpacity onPress={() =>
        //     setSelectedDevices(
        //         isSelected
        //           ? selectedDevices.filter((selectedItem) => selectedItem !== item)
        //           : selectedDevices.includes(item)
        //             ? selectedDevices
        //             : [...selectedDevices, item]
        //       ) 
        //     // navigation.navigate('DetailScreen', item)}>
        //     navigation.navigate('DetailScreen', {
        //         selectedDevices: [...selectedDevices, item],
        //         item: item
        //     });

        

        <TouchableOpacity onPress={handleSelectDevice}>
          
                    <View style={{
                        height: 97, 
                        width: '100%',
                        backgroundColor: '#F4D6D6',
                        flexDirection: 'row',
                        paddingBottom: 10}}>
                            <View>
                            < Image source={require('../assets/image/enapter-power-supply-unit.png')} 
                                    style={{width: 50, height: 50, top: 20, left: 15, marginRight: 30}}/>
                            </View>

                            <View style={{flex: 1, top: 10}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Roboto'}}>{item.device_id}</Text>
                                <Text style={{fontSize: 15, fontFamily: 'Roboto'}}>{item.district}</Text>
                                <Text style={{fontSize: 15, fontFamily: 'Roboto'}}>{item.location}</Text>
                            </View>
                    </View>
                </TouchableOpacity>
        )
    }
   
    const Itemseparator = () => {
        return(
            <View
                style={{height: 0.5, width: '100%' , backgroundColor: '#c8c8c8'}}
            />
        )
    }
    return (
        <LinearGradient
          style={styles.main}
          locations={[0, 1, 1, 1]}
          colors={["#eaa9a9", "#000", "#514e4e", "rgba(0, 0, 0, 0)"]}
        >
            <StatusBar style="auto" androidStatusBar="none" />
            {/* <View style={styles.detailScreenFirstPageChild}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={Items}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                    refreshing={Refreshing}
                    onRefresh={onRefresh}
                    colors={['#ff00ff']}
                    />
                }
                />

                </View> */}

                <View>
                    <FlatList
                        data = {Items}
                        renderItem={ItemView}
                        keyExtractor={(item,index) => index.toString()}
                        ItemSeparatorComponent={Itemseparator}
                    />

                        
                </View>
               
        </LinearGradient>
    )

}
export default RecommendScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    detailScreenFirstPageChild: {
        top: 568,
        left: 37,
        borderRadius: 67,
        width: 333,
        height: 80,
        position: "absolute",
      }
    }
)