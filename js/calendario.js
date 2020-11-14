document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        locale: 'es',
        events: [
            {
                title: 'Vacuna BCG',
                start: '2020-06-30'
            },
            {
                title: 'Vacuna Hepatitis B',
                start: '2020-07-02'
            },
            {
                title: 'Vacuna Polio IPV',
                start: '2020-11-04',
                end: '2020-11-20'
            },
            {
                title: 'Vacuna Hepatitis A',
                start: '2020-02-08',
            },
            {
                title: 'Vacuna Varicela',
                start: '2020-05-23'
            },
            {
                title: 'Vacuna Meningococo',
                start: '2020-09-10'
            },
            {
                title: 'Vacuna Gripe',
                start: '2020-10-10'
            },
            {
                title: 'Vacuna Doble Bacterina',
                start: '2020-12-15'
            }
        ]
    });

    calendar.render();
});