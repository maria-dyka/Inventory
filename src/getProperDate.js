//Функция для вывода даты в виде: день/месяц/год.

export default function (date) {
    let months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    let year = date.slice(0, 4);
    let month = months[date.slice(6, 7) - 1];
    let day = date.slice(8, 11);



    return {full: `${day} / ${month} / ${year}`,
            short: `${date.slice(5, 7)} / 12`,
            guarantee: `${day} / ${date.slice(5, 7)} / ${year}`};
}
