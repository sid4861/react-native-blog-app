import React, { useContext } from 'react';
import {  StyleSheet } from 'react-native';
import { Context } from '../Context/BlogContext';
import Form from '../Components/Form';

const CreateScreen = ({ navigation }) => {

    const {addBlogpost} = useContext(Context);

    return(
        <Form  onSubmit={(title, content) => {
            addBlogpost(title, content, () => {
                navigation.navigate('IndexScreen')
            })
        }} />
    );

   
}

const styles = StyleSheet.create({
   
});

export default CreateScreen;