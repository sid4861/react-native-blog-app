import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const Form = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.titleStyle} > Enter Title </Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={(text) => setTitle(text)} />

            <Text style={styles.titleStyle} > Enter Content </Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={(text) => setContent(text)} />

            <Button title="Add blog post" onPress={() => {onSubmit(title, content)}} />
        </View>
    );
};

Form.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'black',
        margin: 16
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 16
    }
});

export default Form;