// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './config';
// import { useLogin } from '../../../hooks/useLogin';
import { Input } from '../elements/input';

export const ActualTaskForm = () => {
    const form = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema),
    });

    return (
        <div className = 'task-card'>
            <form>
                <div className = 'head'>
                    <button className = 'button-complete-task'>Завершить</button>
                    <div className = 'button-remove-task'></div>
                </div>
                <div className = 'content'>
                    <label className = 'label'>
                        Задача
                        <input
                            className = 'title'
                            placeholder = 'Пройти интенсив по React + Redux'
                            type = 'text'
                            name = 'title' />
                    </label>
                    <div className = 'deadline'>
                        <span className = 'label'>Дедлайн</span>
                        <span className = 'date'>
                            <div className = 'react-datepicker-wrapper'>
                                <div className = 'react-datepicker__input-container'>
                                    <input type = 'text' value = 'Маньяна' />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className = 'description'>
                        <label className = 'label'>
                            Описание
                            <textarea
                                className = 'text'
                                placeholder = 'Изучить все технологии в сочетании со специальными библиотеками'
                                name = 'description' />
                        </label>
                    </div>
                    <div className = 'tags'>
                        <span className = 'tag' style = 'color: rgb(255, 171, 43); background-color: rgb(255, 250, 240);'>Sketch</span>
                        <span className = 'tag' style = 'color: rgb(109, 210, 48); background-color: rgb(245, 253, 240);'>Spotify</span>
                        <span className = 'tag' style = 'color: rgb(254, 77, 151); background-color: rgb(255, 244, 249);'>Dribble</span>
                        <span className = 'tag' style = 'color: rgb(77, 124, 254); background-color: rgb(240, 243, 251);'>Behance</span>
                        <span className = 'tag' style = 'color: rgb(134, 134, 134); background-color: rgb(236, 236, 236);'>UX</span>
                    </div>
                    <div className = 'errors' />
                    <div className = 'form-controls'>
                        <button className = 'button-reset-task' type = 'reset'>Reset</button>
                        <button className = 'button-save-task' type = 'submit'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
