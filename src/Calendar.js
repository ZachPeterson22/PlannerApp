import { eachDayOfInterval, endOfMonth, format, previousDay, startOfMonth, getDay, nextDay, isToday, isThisMonth } from 'date-fns';
import './Calendar.css';
import clsx from 'clsx';


function Calendar() {
    const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    const previousSunday = () => {
        if (getDay(firstDayOfMonth) !== 0) {
            return previousDay(firstDayOfMonth, 0);
        }
        return firstDayOfMonth;
    }

    const nextSaturday = () => {
        if (getDay(lastDayOfMonth) !== 0) {
            return nextDay(lastDayOfMonth, 6);
        }
        return lastDayOfMonth;
    }

    const daysInMonth = eachDayOfInterval({
        start: previousSunday(),
        end: nextSaturday()
    })

    return (
        <>
            <div className='calendar-title'>
                <h2>{format(currentDate, 'MMMM yyyy')}</h2>
            </div>
            <div className='weekdays'>
                {WEEKDAYS.map((day) => {
                   return <h3 key={day} className='weekday'>{day}</h3>
                })}
            </div>
            <div className='calendar'>
                {daysInMonth.map((day, index) => {
                    return <div key={index} className={clsx('day', {
                        'notDayInMonth': !isThisMonth(day),
                        'currentDay': isToday(day)
                    })}>{format(day, 'd')}</div>
                })}
            </div>
            
        </>
    )
};

export default Calendar;