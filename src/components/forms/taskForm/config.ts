import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup
        .string()
        .min(3, 'Название задачи - больше трех символов')
        .required('Поле названия задачи обязательно для заполнения'),
    description: yup
        .string()
        .min(5, 'Описание задачи - больше пяти символов')
        .required('Поле описания задачи обязательно для заполнения'),
});

export const getTaskPlaceholder = () => {
    return {
        title:       'Пройти интенсив по React + Redux + TS + Mobx',
        description: 'После изучения всех технологий, завершить работу над проектами и найти работу.',
    };
};
