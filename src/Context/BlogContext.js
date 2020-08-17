import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_post': return [...state, { title: `post #${state.length + 1}` }]
        default:
            return state
    }
};


const addBlogpost = (dispatch) => {
    return () => {
        dispatch({type: 'add_post'});
    };
    
};



export const { Context, Provider } = createDataContext(blogReducer, {addBlogpost: addBlogpost}, []);