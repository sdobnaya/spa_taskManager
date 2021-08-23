// @ts-nocheck

export const getTagInfo = (tagid, tagarr) => {
    let result;

    tagarr.forEach((tag) => {
        tag.id === tagid
            ? result = {
                id: tag.id,
                name: tag.name,
                color: tag.color,
                bg: tag.bg,
            } : null;
    });

    return result;
};
