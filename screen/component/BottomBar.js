import React from 'react';
import { FlatList, Text, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const BottomBar = ({ selectedDevices,screenName }) => {
    const navigation = useNavigation();
    const handleSelectDevice = (item) => {
        navigation.navigate('DetailScreen', {
            selectedDevices: selectedDevices,
            item: item
    })
    }
  return (
    <View>
      <FlatList
        horizontal
        data={selectedDevices}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => {
            const backgroundColor = item.device_id === screenName ? '#C2771E' : 'transparent';
            return <TouchableOpacity style={{ alignItems: 'center'  }} onPress={() => handleSelectDevice(item)}>
                <View style={{
                      width: 60,
                      height: 60,
                      borderRadius: 40,
                      padding:10,
                      marginTop:5,
                      marginHorizontal: 10,
                      backgroundColor, 
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}>
                      <Image 
                          style ={{
                              width: 50,
                              height: 50,
                              borderRadius: 25,
                          }}
                          source={require('../../assets/image/enapter-power-supply-unit-2.png')}
                      />
                  </View>
                    <Text style={{fontWeight:"600",color:'black',fontSize: 11}}>{item.device_id}</Text>

            </TouchableOpacity>
        }}
      />
    </View>
  );
};

export default BottomBar;