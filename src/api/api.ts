// @ts-nocheck
// Core
import axios from 'axios';
import { setInLocalStorage } from '../helpers/setInLocalStorage';

export const TODO_API_URL = 'https://lab.lectrum.io/rtx/api/v2/todos';

export const api = Object.freeze({
    async deleteTodo(token, id) {
        const { data } = await axios.delete(
            `${TODO_API_URL}/tasks/${id}`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        return data;
    },
    async changeTodo(token, id, body) {
        const { data } = await axios.put(
            `${TODO_API_URL}/tasks/${id}`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
            body,
        );

        return data;
    },
    async getTodoById(token, id) {
        const { data } = await axios.get(
            `${TODO_API_URL}/tasks/${id}`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        return data;
    },
    async createTodo(token, body) {
        const { data } = await axios.post(
            `${TODO_API_URL}/tasks`,
            body,
            {
                headers:
                {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        return data;
    },
    async allTodos(token) {
        const data = await axios.get(
            `${TODO_API_URL}/tasks`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        return data;
    },
    async profile(token) {
        const { data } = await axios.get(
            `${TODO_API_URL}/auth/profile`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        return data;
    },
    async logout(token) {
        const { data } = await axios.get(
            `${TODO_API_URL}/auth/logout`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );

        return data;
    },
    async signup(credentials) {
        const { confirmPassword, ...body } = credentials;
        const { data } = await axios.post(
            `${TODO_API_URL}/auth/registration`,
            body,
        );

        setInLocalStorage(data.data);

        return data;
    },
    async getTags() {
        const data = await axios.get(`${TODO_API_URL}/tags`);
        console.log('apiii', data.data);

        return data.data;
    },
    async login(credentials) {
        const { email, password } = credentials;
        const { data } = await axios.get(
            `${TODO_API_URL}/auth/login`,
            {
                headers: {
                    authorization: `Basic ${btoa(`${email}:${password}`)}`,
                },
            },
        );

        setInLocalStorage(data.data);

        return data.data;
    },
});

