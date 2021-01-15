import {combineReducers} from "redux";

const selectThemeReducer = (selectedTheme = "dark", action) => {
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

const chatActiveReducer = (isChatActive = 'FALSE', action) => {
    if (action.type === 'CHAT_ACTIVE')
        return action.payload;

    return isChatActive;
};

const profileReducer = (profile = {}, action) => {
    console.log("FROM REDUCER: " + action)
    if (action.type === 'PROFILE_INFO')
        return action.payload;

    return profile;
};

export default combineReducers({
    selectedTheme: selectThemeReducer,
    messages: messagesReducer,
    isChatActive: chatActiveReducer,
    profile: profileReducer
});
