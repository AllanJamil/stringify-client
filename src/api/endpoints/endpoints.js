import stringify from "../stringify";

export const createNewMeeting = async profile => {

    return await stringify.post("api/meetings/new-meeting", profile);
};

export const findMeetingByKey = async key => {
    return await stringify.get("api/meetings/find-meeting?key=" + key);
}

export const findMeetingByChatId = async chatId => {
    return await stringify.get("api/meetings/find-meeting?chat-id=" + chatId);
}

export const getMessageHistory = async (chatId, page) => {
    return await stringify.get(`api/messages/history?chat-id=${chatId}&page=${page}`);
}

export const getConnectedProfiles = async (chatId) => {
    return await stringify.get("api/meetings/profiles-connected?chat-id=" + chatId);
}

export const inviteByMail = async (email, name , chatId) => {
    return await stringify.post(`api/meetings/invite/${email}/by/${name}?chat-id=${chatId}`)
}

export const pingServer = async () => {
    return await stringify.get("api/ping");
}
