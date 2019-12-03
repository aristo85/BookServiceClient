import axios from 'axios';

const url= `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;

export const createBook = ({ title, author, description, published })=>{
    return ((dispatch)=>{
        return axios.post(`${url}/create`, { title, author, description, published })
        .then(response=>{
            console.log(response.data);
          dispatch(createBookSuccess(response.data));
        });
    });
}

export const createBookSuccess= (data)=>{
    return {
        type: 'ADD_BOOK',
        payload: {
            id:data.id,
            title:data.title,
            author:data.author,
            description:data.description,
            published:data.published
        }
    }
}

export const getAllBooks = ()=>{
    return (dispatch)=>{
        return axios.get(url)
            .then(res=>{
               dispatch(getAllBooksSuccess(res.data));
            });
    }
}
export const getAllBooksSuccess =(books)=>{
    return{
        type:'GET_ALL',
        payload:books
    }
}

export const deleteBookSuccess = id=>{
    return{
        type:'DELETE_BOOK',
        payload:id
    }
}
export const deleteBook = id=>{
    return(dispatch)=>{
        return axios.delete(`${url}/${id}`)
            .then(res=>{
               dispatch(deleteBookSuccess(id));
            });
    }
}

export const editBook = id=>{
    return(dispatch)=>{
        dispatch({type:'EDIT_BOOK',id:id});
    }
}

export const updateBook = (id,data)=>{
    return(dispatch)=>{
        return axios.put(`${url}/${id}`,{
            title:data.newTitle,
            author:data.newAuthor,
            description:data.newDescription,
            published:data.newPublished
        })
            .then(res=>{
                dispatch(updateBookSuccess(id,data));
            });
    }
}

export const updateBookSuccess = (id,data)=>{
    return(dispatch)=>{
        dispatch({ type: 'UPDATE', id: id, data: data });
    }
}