import stringify from "../stringify";

export const createNewMeeting = async profile => {

    const response = await stringify.post("api/meetings/new-meeting", profile);

    return response;
};

export const findMeetingByKey = async key => {
    const response = await stringify.get("api/meetings/find-meeting?key="+key);

    return response;
}

export const findMeetingByChatId = async chatId => {
    const response = await stringify.get("api/meetings/find-meeting?chat-id="+chatId);

    return response;
}

export const getMessageHistory = async (chatId, page) => {
    const response = await stringify.get("api/messages/history?chat-id=" + chatId + "&page=" + page);

    return response;
}

export const getConnectedProfiles = async (chatId) => {
    return  await stringify.get("api/meetings/profiles-connected?chat-id=" + chatId);
}
