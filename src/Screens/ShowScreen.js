import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../Context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

let ID = null;

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    ID = navigation.getParam('id'); 
    const blogPost = state.find((post) => post.id === navigation.getParam('id'));

    return (
        <View>
            <Text> Show Screen </Text>
            <Text> {blogPost.title} </Text>
            <Text> {blogPost.content} </Text>
        </View>
    );
}


ShowScreen.navigationOptions  = ({ navigation }) =>  {
    return {
        headerRight: () => (
          <TouchableOpacity style={{marginRight: 24}} onPress={() => navigation.navigate('EditScreen', { id: ID })}>
            <FontAwesome  name="pencil" size={24} color="black" />
          </TouchableOpacity>
        )
      };
};


const styles = StyleSheet.create({});

export default ShowScreen;