import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {Context} from '../Context/BlogContext';

const IndexScreen = () => {
    const { state, addBlogpost } = useContext(Context);
    return(
        <View>
            <Text> Index Screen </Text>
            <Button  title='add post' onPress={() => {addBlogpost()}} />
            <FlatList 
                data={state}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => {
                    return <Text> {item.title} </Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;