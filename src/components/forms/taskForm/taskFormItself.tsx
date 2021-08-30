// @ts-nocheck
// @ts-nocheck
import { useState } from 'react';
import { useEffect } from 'react';
import { createRef } from 'react';

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
import { useDeleteTodo } from '../../../hooks/useDeleteTodo';
// helpers
import { getTagInfo } from '../../../helpers/getTagInfo';
import { getFromLocalStorage } from '../../../helpers/getFromLocalStorage';

registerLocale('ru', ru);

export const ActualTaskForm = () => {
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    // form.clearErrors();

    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(null);

    const [selectedTag, setSelectedTag] = useState(' ');

    const tags = useSelector((state) => { return state.allTags; });
    const chosenTodo = useSelector((state) => { return state.setTaskInForm; });
    let theId = chosenTodo?.id;
    console.log('obj', chosenTodo);

    const creation = useCreate();
    const deletion = useDeleteTodo();

    const token = getFromLocalStorage('token');
    const allTasks = useAllTasks(token);

    useEffect(() => {
        if (chosenTodo !== null) {
            theId = chosenTodo.id;
            // console.log('obj2', chosenTodo);
            // Инпут название
            const title = document.getElementById('form-title');
            title.value = chosenTodo.title;
            // Инпут описание
            const description = document.getElementById('description');
            description.value = chosenTodo.description;
            // // Инпут дата
            const deadline = document.getElementById('deadline');
            const options = {
                locale: 'ru',
                dateFormat: 'dd/MM/yyyy',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            console.log('date', new Date(chosenTodo.deadline).toLocaleString('ru', options));
            deadline.value = new Date(chosenTodo.deadline).toLocaleString('ru', options);
            // // Инпут тэг
            // console.log('chosenTodo.tag.id', chosenTodo.tag.id);
            // console.log('selectedTag', selectedTag);
            // setSelectedTag(chosenTodo.tag.id);
            // console.log('selectedTag2', selectedTag);


            // console.log(4, selectedTag);
            // setTagValue(chosenTodo.tag.id);

            // console.log('chosenTodo.tag.id_1', chosenTodo.tag.id);
            // console.log('selectedTag_2', selectedTag);
            // () => { setSelectedTag(chosenTodo.tag.id); };
            // console.log(3, selectedTag);
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

    const toDelete = async () => {
        await deletion.mutateAsync(theId);

        form.reset();

        const tasks = await allTasks.mutateAsync(token);
        dispatch(setAllTask(null));
        dispatch(setAllTask(tasks.data.data));
    };

    return (
        <div className = 'task-card'>
            <form>
                <div className = 'head'>
                    <button className = 'button-complete-task'>Завершить</button>
                    <div onClick = { toDelete } className = 'button-remove-task'></div>
                </div>
                <div className = 'content'>
                    <label className = 'label'>
                        Задача
                        <input
                            { ...form.register('title') }
                            id = 'form-title'
                            name = 'title'
                            // ref = { formTitleRef }
                            className = 'title'
                            placeholder = 'Пройти интенсив по React + Redux'
                            type = 'text' />
                    </label>
                    <div className = 'deadline'>
                        <span className = 'label'>Дедлайн</span>
                        <span className = 'date' >
                            <DatePicker
                                id = 'deadline'
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
                                name = 'description'
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

