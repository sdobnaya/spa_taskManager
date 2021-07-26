// @ts-nocheck
/* Core */
import { useSelector } from 'react-redux';

export const TasksList = () => {
    const list = useSelector((state) => { return state.allUserTasks; });

    return (
        <div className = 'list'>
            <div className = 'tasks'>
                { list?.map((task) => 
                { <div
                    key = { task.id }
                    id = { task.id }
                    className = 'task'>
                    <span className = 'title'>{ task.title }</span>
                    <div className  = 'meta'>
                        <span className  = 'deadline'>{ () => {
                            const options = { year: 'numeric', month: 'long', day: 'numeric' };
                            const a = new Date(`${task.deadline}`);

                            return a.toLocaleDateString('ru-RU', options);
                        } }</span>
                        <span
                            className  = 'tag'
                            style = { { color: `${task.tag.color}`, backgroundColor: `${task.tag.bg}` } }>{ task.tag.name }</span>
                    </div>
                </div> }
                ) };
            </div>
        </div>
    );
};

// вместо таск дедлайн на 17 строке результат этого преобразования ()
// const options = { year: 'numeric', month: 'long', day: 'numeric' };
// const a = new Date(`${task.deadline}`);
// a.toLocaleDateString('ru-RU', options);
