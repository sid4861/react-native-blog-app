import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../Context/BlogContext';
import Form from '../Components/Form';

const EditScreen = ({ navigation }) => {

    const { state, editBlogpost } = useContext(Context);
    console.log(state);
    console.log(`id - ${navigation.getParam('id')}`);
    const blogPost = state.find((post) => {
        return post.id === navigation.getParam('id')
    });

    console.log(blogPost);

    return (
        <Form
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => { editBlogpost(navigation.getParam('id'), title, content, () => navigation.pop() ) }}

        />
    );
}



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

export default EditScreen;