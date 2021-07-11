import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup
        .string()
        .min(5, 'Данное поле обязательно для заполнения')
        .required('*'),
    email: yup
        .string()
        .min(5, 'Данное поле обязательно для заполнения')
        .required('*'),
    password: yup
        .string()
        .min(8, 'Минимальная длина пароля - 8 символов')
        .required('*'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required('*'),
});

export const getSignupPlaceholder = () => {
    return {
        name: 'Имя и фамилия',
        email: 'Электропочта',
        password: 'Пароль',
        confirmPassword: 'Пароли должны совападать',
    };
};
