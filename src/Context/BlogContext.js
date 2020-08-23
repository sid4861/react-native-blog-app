import createDataContext from './createDataContext';
import axios from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_post': return state.filter((post) => post.id !== action.payload);
        case 'edit_post': return state.map((post) => {
            if (post.id === action.payload.id) {
                return action.payload
            } else {
                return post
            }
        });
        case 'get_posts': return action.payload;
        default:
            return state
    }
};

const getBlogposts = (dispatch) => {
    return async () => {
        const response = await axios.get('/blogposts');
        dispatch({ type: 'get_posts', payload: response.data });
    }
};

const addBlogpost = (dispatch) => {
    return async (title, content, callback) => {
        await axios.post('/blogposts', {title, content });
        callback();
    };

};

const deleteBlogpost = (dispatch) => {
    return async (id) => {
        await axios.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_post', payload: id });
    };
};

const editBlogpost = (dispatch) => {
    return async (id, title, content, callback) => {
        await axios.put(`/blogposts/${id}`, { title, content });
        dispatch({ type: 'edit_post', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    };
};


export const { Context, Provider } = createDataContext(blogReducer, { addBlogpost: addBlogpost, deleteBlogpost: deleteBlogpost, editBlogpost: editBlogpost, getBlogposts: getBlogposts }, []);