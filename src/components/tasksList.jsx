// @ts-nocheck
/* Core */
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskInForm } from '../lib/redux/init/actions';
import { getTodoById } from '../hooks/useTodoById';
//
import { TaskContext } from '../context/taskContext';
//

export const TasksList = () => {
    const dispatch = useDispatch();

    const list = useSelector((state) => { return state.allUserTasks; });

    const completedTasks = useSelector((state) => { return state.setCompletedTasks; });

    const state = useContext(TaskContext);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    let chosenTask;

    useEffect(() => {
        const taskList = document.querySelectorAll('.task');
        taskList.forEach((task) => task.addEventListener('click', async (event) => {
            chosenTask = await getTodoById(event.target.id); // eslint-disable-line no-use-before-define
            dispatch(setTaskInForm(chosenTask));
            state.setVisible(true);
        }));
    }, [list]);

    return (
        <div className = 'list'>
            <div className = 'tasks'>
                { list?.map((task) => {
                    let className = 'task';
                    completedTasks.forEach((id) => {
                        if (id === task.id) {
                            className = 'task completed';
                        }
                    });

                    return (
                        <div
                            key = { task.id + new Date(task.deadline) }
                            id = { task.id }
                            className = { className } >
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

