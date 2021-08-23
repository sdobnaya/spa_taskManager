// @ts-nocheck
import { getFromLocalStorage } from "./getFromLocalStorage";
import { api } from "../api";

export const deleteTodo = (tagId) => {
    const token = getFromLocalStorage('token');
    api.deleteTodo(token, tagId);
};
