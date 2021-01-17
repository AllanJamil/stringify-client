import stringify from "../stringify";

export const createNewMeeting = async profile => {

    const response = await stringify.post("api/meetings/new-meeting", profile);

    return response;
};
