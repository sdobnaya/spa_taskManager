import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup
        .string()
        .min(3, 'Данное поле обязательно для заполнения')
        .required('*'),
    text: yup
        .string()
        .min(5, 'Данное поле обязательно для заполнения')
        .required('*'),
});

export const getTaskPlaceholder = () => {
    return {
        title: 'Пройти интенсив по React + Redux + TS + Mobx',
        text: 'После изучения всех технологий, завершить работу над проектами и найти работу.',
    };
};
