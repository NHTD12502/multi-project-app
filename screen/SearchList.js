import * as React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { Image, StyleSheet, Text, Pressable, View,TouchableOpacity, TextInput,StatusBar } from "react-native";

import { FontFamily } from "../utilities/GlobalStyles";
import { List, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchList =({navigation,route}) => {

   // const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState("");
    const handleSearch = (query) => setSearchQuery(query);
    const {  selectedDevices } = route.params;

    const [Items, setItems] = React.useState([
        { 
            device_id: 'IOT 1',
            district: 'District 1',
            location : '930 Ly Thuong Kiet ',
            information : {temp: '23°C', humid : '25%', weather: "Rain", state: 'Working', flood: "Low" }

        
        },
        { 
            device_id: 'IOT 2',
            district: 'District 1',
            location : '330 3/2 ' ,
            information : {temp: '22°C', humid : '25%', weather: "Rain", state: 'Working', flood: "Critical" }
        
        },
        { 
            device_id: 'IOT 3',
            district: 'District 1',
            location : '650 Le Duan ' ,
            information : {temp: '21°C', humid : '25%', weather: "Rain", state: 'Working', flood: "High" }},
        { 
            device_id: 'IOT 4',
            district: 'District 1',
            location : '975 To Hien Thanh ',
            information : {temp: '20°C', humid : '25%', weather: "Rain", state: 'Working', flood: "No flood" }
        }
    ])
    
   

    const ItemView = ({item}) => {
        //const isSelected = selectedDevices.includes(item);
        const isSelected = selectedDevices.some((selectedItem) => selectedItem.device_id === item.device_id);

        const onPressHandler = () => {
            const newSelectedDevices = isSelected
              ? selectedDevices.filter((selectedItem) => selectedItem !== item)
              : [item, ...selectedDevices];
          
            //setSelect(newSelectedDevices);
          
            navigation.navigate("DetailScreen", {
              selectedDevices: newSelectedDevices, // Use the updated array here
             // setSelect: setSelect,
              item: item,
            });
          };
        return (
            <TouchableOpacity onPress={onPressHandler}>
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
                
                <TextInput
                    style={{...styles.searchBar, paddingLeft: 60}}
                    value={searchQuery}
                    onChangeText={handleSearch}
                    placeholder="Enter the device_id of IOT device ..."
                    placeholderTextColor="#ccc"
                    />
                    <Image
                        source={require('../assets/image/search-interface-symbol.png')} 
                        style={{width: 20, height: 20, top: 20, left: 20, position: "absolute"}}
                    />

                    
                

                <View>
                    <FlatList
                        data = {Items.filter(item => item.device_id.toLowerCase().includes(searchQuery.toLowerCase()))}
                        renderItem={ItemView}
                        keyExtractor={(item,index) => index.toString()}
                        ItemSeparatorComponent={Itemseparator}
                    />

                        
                </View>
               
        </LinearGradient>
    )

}
export default SearchList

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    searchBar: {
        height: 40,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        color: "#333",
        fontFamily: "Roboto",
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