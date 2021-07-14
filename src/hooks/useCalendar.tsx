// @ts-nocheck
/* Core */
import { useState } from 'react';
// import DatePicker from 'react-datepicker';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);

export const useCalendar = () => {
    const [startDate, setStartDate] = useState(null);

    return (
        <DatePicker
            selected = { startDate }
            onChange = { (date) => setStartDate(date) }
            minDate = { new Date() }
            locale = { ru }
            placeholderText = 'Выберите дату'
            dateFormat = 'dd/MM/yyyy'
            showDisabledMonthNavigation />
    );
};
