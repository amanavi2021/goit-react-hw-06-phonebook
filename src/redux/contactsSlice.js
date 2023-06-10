import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
    value: []
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.value = [...state.value, action.payload]
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name, 
                        number,                 
                    },
                };
            },
        },     
        
        deleteContact(state, action) {
        state.value = state.value.filter(contact => contact.name !== action.payload)
        }
    }
});

const persistConfig = {
    key: 'root',
    storage
    
};

export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.value;