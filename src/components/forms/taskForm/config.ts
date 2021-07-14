import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup
        .string()
        .min(3, 'Укажите название задачи - больше трех символов')
        .required('*'),
    description: yup
        .string()
        .min(5, 'Поле с описанием задачи обязательно для заполнения')
        .required('*'),
});

export const getTaskPlaceholder = () => {
    return {
        title:       'Пройти интенсив по React + Redux + TS + Mobx',
        description: 'После изучения всех технологий, завершить работу над проектами и найти работу.',
    };
};
