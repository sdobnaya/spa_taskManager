// @ts-nocheck
import { useState } from 'react';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './config';
import { setNewTask } from '../../../lib/redux/init/actions';
import { setAllTask } from '../../../lib/redux/init/actions';
// hooks
import { useCreate } from '../../../hooks/useCreateTodo';
import { useAllTasks } from '../../../hooks/useAllTasks';
// helpers
import { getTagInfo } from '../../../helpers/getTagInfo';
import { getFromLocalStorage } from '../../../helpers/getFromLocalStorage';

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
    const chosenTodo = useSelector((state) => { return state.setTaskInForm; });
    console.log('tipi', typeof chosenTodo);

    const creation = useCreate();

    const token = getFromLocalStorage('token');
    const allTasks = useAllTasks(token);

    useEffect(() => {
        if (chosenTodo !== null) { // || typeof chosenTodo !== null // typeof chosenTodo === 'object' //typeof chosenTodo !== 'null'
            // console.log('tut', chosenTodo); //
            // console.log('tut', chosenTodo.title); //
            // Инпут название
            const title = document.getElementById('form-title');
            // console.log('aaa', title); //
            title.value = chosenTodo.title;
            // Инпут описание
            const description = document.getElementById('description');
            // console.log('aaa', description); //
            description.value = chosenTodo.description;
            // // Инпут дата
            // const deadline = document.getElementById('deadline');
            // console.log('aaa', deadline); //
            // deadline.value = chosenTodo.deadline;
            // // Инпут тэг
        }
    }, [chosenTodo]);


    const toCreate = form.handleSubmit(async (data) => {
        await creation.mutateAsync({
            ...data,
            deadline: startDate,
            tag: selectedTag,
        });

        const result = getTagInfo(selectedTag, tags);

        dispatch(setNewTask({
            ...data,
            deadline: startDate,
            tag: result,
        }));

        //

        const tasks = await allTasks.mutateAsync(token);
        dispatch(setAllTask(null));
        dispatch(setAllTask(tasks.data.data));
        //

        form.reset();
    });

    // document.querySelectorAll('.button-remove-task').addEventListener('click', (sele))
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
                            id = 'form-title'
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
                                id = 'description'
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

