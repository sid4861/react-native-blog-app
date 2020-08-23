import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../Context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogpost, getBlogposts } = useContext(Context);

    useEffect(() => {
        getBlogposts();
        const listener =  navigation.addListener('didFocus', () => {
            getBlogposts();
        });
        return () => {
            listener.remove();
        }
    }, []);

    return (
        <View>
            <Text> Index Screen </Text>
            <FlatList
                data={state}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('ShowScreen', { id: item.id }) }} >
                            <View style={styles.postStyle} >
                                <Text style={styles.titleStyle} >   {item.title} {item.id} </Text>
                                <TouchableOpacity onPress={() => deleteBlogpost(item.id)}>
                                    <MaterialIcons name="delete" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    );
};


IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('CreateScreen')}>
                <FontAwesome name="plus-circle" size={24} color="black" />
            </TouchableOpacity>
        )
    };
};

// navigationOptions = ({navigation}) => {
//     return {
//         headerRight: () => (
//             <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//               <FontAwesome sytle={{marginRight: 40}} name="plus-circle" size={24} color="black" />
//             </TouchableOpacity>
//           )
//     }
// };

const styles = StyleSheet.create({
    postStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1
    },
    titleStyle: {
        fontSize: 18,
    }
});

export default IndexScreen;