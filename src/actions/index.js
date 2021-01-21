// Action creator

// named export
export const selectTheme = theme => {
    return {
        type: 'THEME_SELECT',
        payload: theme
    };
};

export const setChatActive = isActive => {
    return {
        type: 'CHAT_ACTIVE',
        payload: isActive
    };
};

export const setProfile = profile => {
    return {
        type: 'PROFILE_INFO',
        payload: profile
    };
};

export const setConnectionStatus = connectionStatus => {
    return {
        type: 'CONNECTION_STATUS',
        payload: connectionStatus
    };
};

export const setKeyMeeting = key => {
    return {
        type: 'KEY',
        payload: key
    };
};

export const setMeetingSession = meetingSession => {
    return {
        type: 'CONNECTION_INFO',
        payload: meetingSession
    };
};

export const addNewMessage = message => {
    return {
        type: 'NEW_MESSAGE',
        payload: message
    };
};

export const addProfileConnected = profile => {
    return {
        type: 'PROFILE_CONNECT',
        payload: profile
    };
};

export const removeProfileDisconnected = profile => {
    return {
        type: 'PROFILE_DISCONNECT',
        payload: profile
    };
};
