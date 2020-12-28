// Action creator

// named export
export const selectTheme = (theme) => {
    return {
        type: 'THEME_SELECT',
        payload: theme
    };
};

export const addNewMessage = (message) => {
    return {
        type: 'NEW_MESSAGE',
        payload: message
    };
};

export const setChatActive = (isActive) => {
    return {
        type: 'CHAT_ACTIVE',
        payload: isActive
    };
};