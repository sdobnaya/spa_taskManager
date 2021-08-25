// @ts-nocheck
/* Core */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTodoById } from '../helpers/getTodoById';

export const TasksList = () => {
    const list = useSelector((state) => { return state.allUserTasks; });

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        const taskList = document.querySelectorAll('.task');
        taskList.forEach((task) => task.addEventListener('click', (event) => {
            getTodoById(event.target.id);
        }));
    }, [list]);

    return (
        <div className = 'list'>
            <div className = 'tasks'>
                { list?.map((task) => {
                    return (
                        <div
                            key = { task.id + new Date(task.deadline) }
                            id = { task.id }
                            className = 'task'>
                            <span className = 'title'>{ task.title }</span>
                            <div className  = 'meta'>
                                <span className  = 'deadline'>{ new Date(task.deadline).toLocaleDateString('ru-RU', options) }</span>
                                <span
                                    className  = 'tag'
                                    style = { { color: `${task.tag?.color}`, backgroundColor: `${task.tag?.bg}` } }>{ task.tag?.name }</span>
                            </div>
                        </div>
                    );
                }) }
            </div>
        </div>
    );
};

