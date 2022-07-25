import {configureStore} from '@reduxjs/toolkit'
import AddMangaReducer from './MangaReducers/mangaReducers'
import thunk from 'redux-thunk'


const store = configureStore({
    reducer : {addManga : AddMangaReducer},
    middleware : [thunk]
});


export default store;