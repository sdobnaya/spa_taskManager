// @ts-nocheck
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import classNames from 'classnames';
import { schema } from './config';
// hooks
import { useCalendar } from '../../../hooks/useCalendar';
import { useCreate } from '../../../hooks/useCreateTodo';

import { chooseTag } from '../../../helpers/chooseTag';

export const ActualTaskForm = () => {
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const Calendar = useCalendar();
    const creation = useCreate();

    const toCreate = form.handleSubmit(async (data) => {
        await creation.mutateAsync(data);
        console.log('tuuuuuuuut');

        form.reset();
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
                            { ...form.register('title') }
                            className = 'title'
                            placeholder = 'Пройти интенсив по React + Redux'
                            type = 'text' />
                    </label>
                    <div className = 'deadline'>
                        <span className = 'label'>Дедлайн</span>
                        <span className = 'date' >
                            { Calendar }
                        </span>
                    </div>
                    <div className = 'description'>
                        <label className = 'label'>
                            Описание
                            <input
                                { ...form.register('description') }
                                className = 'text'
                                placeholder = 'Изучить все технологии в сочетании со специальными библиотеками' />
                        </label>
                    </div>
                    <div className = 'tags'>
                        <span
                            onClick = { chooseTag }
                            style = { { color: 'rgb(255, 171, 43)', backgroundColor: 'rgb(255, 250, 240)' } }
                            className = 'tag' >Sketch</span>
                        <span
                            onClick = { chooseTag }
                            style = { { color: 'rgb(109, 210, 48)', backgroundColor: 'rgb(245, 253, 240)' } }
                            className = 'tag' >Spotify</span>
                        <span
                            onClick = { chooseTag }
                            style = { { color: 'rgb(254, 77, 151)', backgroundColor: 'rgb(255, 244, 249)' } }
                            className = 'tag' >Dribble</span>
                        <span
                            onClick = { chooseTag }
                            style = { { color: 'rgb(77, 124, 254)', backgroundColor: 'rgb(240, 243, 251)' } }
                            className = 'tag' >Behance</span>
                        <span
                            onClick = { chooseTag }
                            style = { { color: 'rgb(134, 134, 134)', backgroundColor: 'rgb(236, 236, 236)' } }
                            className = 'tag' >UX</span>
                    </div>
                    <div className = 'errors'>
                        <p className = 'errorMessage'>{ form.formState.errors?.title?.message }</p>
                        <p className = 'errorMessage'>{ form.formState.errors?.description?.message }</p>
                    </div>
                    <div className = 'form-controls'>
                        <button className = 'button-reset-task' type = 'reset'>Reset</button>
                        <button
                            onClick = { toCreate }
                            className = 'button-save-task'
                            type = 'submit'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

