// @ts-nocheck

// Core
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

// Components
import { App } from './app';

// Instruments
import { queryClient } from './lib/react-query';
import { store } from './lib/redux/init/store';
import './theme/styles/index.scss';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

import { TaskContext } from './context/taskContext';

class TaskForm {
    isVisible = false;
    constructor() {
        this.isVisible = false;
        this.setIsVisible.bind(this);
    }

    setIsVisible() {
        this.isVisible = !this.isVisible;
    }
}

// const rectangle = new Rectangle();


// class TaskForm {
//     isVisible = false;
//     // eslint-disable-next-line
//     constructor() {}
//     setIsVisible() { this.isVisible = !this.isVisible; }
// }

const taskForm = new TaskForm();


render(
    <Provider store = { store }>
        <TaskContext.Provider value = { taskForm }>
            <QueryClientProvider client = { queryClient }>
                <Router>
                    <App />
                </Router>
            </QueryClientProvider>
        </TaskContext.Provider>
    </Provider>,
    document.getElementById('root'),
    () => {
        // eslint-disable-next-line no-console
        console.log('%c Приложение успешно запущено ', 'background: #00ff00; color: #000000; padding: 2.5px;');
    },
);
