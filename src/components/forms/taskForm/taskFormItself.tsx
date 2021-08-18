// @ts-nocheck
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './config';
import { setNewTask } from '../../../lib/redux/init/actions';
// hooks
import { useCreate } from '../../../hooks/useCreateTodo';


registerLocale('ru', ru);

export const ActualTaskForm = () => {
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(null);

    const [selectedTag, setSelectedTag] = useState(' ');

    const tags = useSelector((state) => { return state.allTags; });

    const creation = useCreate();

    //
    //

    const toCreate = form.handleSubmit(async (data) => {
        await creation.mutateAsync({
            ...data,
            deadline: startDate,
            tag: selectedTag,
        });

        dispatch(setNewTask({
            ...data,
            deadline: startDate,
            tag: selectedTag,
        }));

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
                            <DatePicker
                                selected = { startDate }
                                onChange = { (date) => setStartDate(date) }
                                minDate = { new Date() }
                                locale = { ru }
                                placeholderText = 'Выберите дату'
                                dateFormat = 'dd/MM/yyyy'
                                showDisabledMonthNavigation/>
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
                        { tags?.map((tag) => <span
                            className = 'tag'
                            key = { tag.id }
                            id = { tag.id }
                            style = { { color: tag.color, backgroundColor: tag.bg } }
                            onClick = { (event) => { setSelectedTag(event.target.id); } } >
                            { tag.name }
                        </span>) }
                        { /* <span
                            onClick = { (event) => { setSelectedTag(event.target.id); } }
                            style = { { color: 'rgb(255, 171, 43)', backgroundColor: 'rgb(255, 250, 240)' } }
                            id = '8b535acc-623b-4ee3-9279-e6175159ff47'
                            className = 'tag' >Sketch</span>
                        <span
                            onClick = { (event) => { setSelectedTag(event.target.id); } }
                            style = { { color: 'rgb(109, 210, 48)', backgroundColor: 'rgb(245, 253, 240)' } }
                            id = 'e04358c2-4afc-4577-8ff6-9e8ddd4f406a'
                            className = 'tag' >Spotify</span>
                        <span
                            onClick = { (event) => { setSelectedTag(event.target.id); } }
                            style = { { color: 'rgb(254, 77, 151)', backgroundColor: 'rgb(255, 244, 249)' } }
                            id = 'dd63b60d-864b-400e-b03b-f5eb6d8ffa93'
                            className = 'tag' >Dribble</span>
                        <span
                            onClick = { (event) => { setSelectedTag(event.target.id); } }
                            style = { { color: 'rgb(77, 124, 254)', backgroundColor: 'rgb(240, 243, 251)' } }
                            id = '482a32f9-2b33-4d3f-af65-bb2f886d3ee9'
                            className = 'tag' >Behance</span>
                        <span
                            onClick = { (event) => { setSelectedTag(event.target.id); } }
                            style = { { color: 'rgb(134, 134, 134)', backgroundColor: 'rgb(236, 236, 236)' } }
                            id = '3a423b8a-d946-4c0b-8195-33f320bd5470'
                            className = 'tag' >UX</span> */ }
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

