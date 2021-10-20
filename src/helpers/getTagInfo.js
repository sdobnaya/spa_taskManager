// @ts-nocheck

export const getTagInfo = (tagid, tagarr) => {
    let result;

    tagarr.forEach((tag) => {
        if (tag.id === tagid) {
            result = {
                id:    tag.id,
                name:  tag.name,
                color: tag.color,
                bg:    tag.bg,
            };
        }
    });

    return result;
};
