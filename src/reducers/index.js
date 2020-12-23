import { combineReducers } from "redux";
import {act} from "@testing-library/react";

const selectThemeReducer = (selectedTheme = "light", action) => {
   if (action.type === 'THEME_SELECT')
       return action.payload;

   return selectedTheme;
}

const messagesReducer = (messages = [], action) => {
    if (action.type === 'NEW_MESSAGE') {
        return [...messages, action.payload];
    }

    return messages;
};

const chatActiveReducer = (isChatActive = false, action) => {
    if (action.type === 'CHAT_ACTIVE')
        return action.payload;

    return isChatActive;
};

export default combineReducers({
    selectedTheme: selectThemeReducer,
    messages: messagesReducer,
    isChatActive: chatActiveReducer
});
