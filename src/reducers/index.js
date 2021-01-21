import {combineReducers} from "redux";

const selectThemeReducer = (selectedTheme = "dark", action) => {
    if (action.type === 'THEME_SELECT')
        return action.payload;

    return selectedTheme;
};

const chatActiveReducer = (isChatActive = 'FALSE', action) => {
    if (action.type === 'CHAT_ACTIVE')
        return action.payload;

    return isChatActive;
};

const profileReducer = (profile = null, action) => {
    if (action.type === 'PROFILE_INFO')
        return action.payload;

    return profile;
};

const connectionStatusReducer = (connectionStatus = null, action) => {
    if (action.type === 'CONNECTION_STATUS')
        return action.payload;

    return connectionStatus;
};

const keyReducer = (key = "", action) => {
    if (action.type === 'KEY')
        return action.payload;

    return key;
};

const meetingSessionReducer = (meetingSession = null, action) => {
    if (action.type === 'CONNECTION_INFO')
        return action.payload;

    return meetingSession;
};

const messagesReducer = (messages = [], action) => {
    if (action.type === 'NEW_MESSAGE')
        return [...messages, action.payload];

    return messages;
};

const profilesConnectedReducer = (profilesConnected = [], action) => {
  if (action.type === 'PROFILE_CONNECT')
      return [...profilesConnected, action.payload];
  else if (action.type === 'PROFILE_DISCONNECT')
      return profilesConnected.filter(guid => guid !== action.payload.guid);

    return profilesConnected;
};

export default combineReducers({
    selectedTheme: selectThemeReducer,
    isChatActive: chatActiveReducer,
    profile: profileReducer,
    connectionStatus: connectionStatusReducer,
    keyMeeting: keyReducer,
    meetingSession: meetingSessionReducer,
    messages: messagesReducer,
    profilesConnected: profilesConnectedReducer
});
