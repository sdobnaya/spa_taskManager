// @ts-nocheck
/* Core */
import { useSelector } from 'react-redux';

export const TasksList = () => {
    const list = useSelector((state) => { return state.allUserTasks; });

    return (
        <div className = 'list'>
            <div className = 'tasks'>
                { list?.map((task) => <div
                    key = { task.id }
                    id = { task.id }
                    className = 'task'>
                    <span className = 'title'>{ task.title }</span>
                    <div className  = 'meta'>
                        <span className  = 'deadline'>{ task.deadline }</span>
                        <span
                            className  = 'tag'
                            style = { { color: `${task.tag.color}`, backgroundColor: `${task.tag.bg}` } }>{ task.tag.name }</span>
                    </div>
                </div>) };
            </div>
        </div>
    );
};

