//Написать объект  +
// Написать для него функции +
// Функция проверки корректности данных +
// функция для парсинга ( использовать регулярки)

var time = {
    value: '',
    getValue: function () {
        return this.value;
    },
    setValue: function (value) {
        this.value = value;
        return this;
    },
    add: function (units, type) {
        checkData(units, type);
        addUnits(units, type);
        return this;
    },
    subtract: function (units, type) {
        checkData(units, type);
        subtractUnits(units, type);
        return this;
    }
}

function addUnits(units, type) {
    var str = new Date(time.value);
    var newDate;
    switch (type) {
        case 'days': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate() + units, str.getHours(), str.getMinutes());
            break;
        }
        case 'months': {
            newDate = new Date(str.getFullYear(), str.getMonth() + units, str.getDate(), str.getHours(), str.getMinutes());
            break;
        }
        case 'hours': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours() + units, str.getMinutes());
            break;
        }
        case 'minutes': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours(), str.getMinutes() + units);
            break;
        }
    }
    time.value = newDate;
}

function subtractUnits(units, type){
    var str = new Date(time.value);
    var newDate;
    switch (type) {
        case 'days': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate() - units, str.getHours(), str.getMinutes());
            break;
        }
        case 'months': {
            newDate = new Date(str.getFullYear(), str.getMonth() - units, str.getDate(), str.getHours(), str.getMinutes());
            break;
        }
        case 'hours': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours() - units, str.getMinutes());
            break;
        }
        case 'minutes': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours(), str.getMinutes() - units);
            break;
        }
    }
    time.value = newDate;
}

function checkData(units, type){
    try{
        if((parseInt(units)<0) || (type !== 'days' && type !== 'months' && type !== 'minutes' && type !== 'hours')){
            throw new TypeError('check data');
        }
    }catch (e) {
        console.log(e);
    }
}

function parseDate(date){
    var str = time.value.getFullYear() + '-' + time.value.getMonth() + '-' + time.value.getDate() + ' ' + time.value.getHours() + ':' + time.value.getMinutes();
    console.log(str);
}

function date(str){
    time.setValue(str)
        .add(24, 'hours')
        .subtract(1, 'months')
        .add(3, 'days')
        .add(15, 'minutes');

    console.log(time.value);
    parseDate(time.value);
}

time = date('2017-05-16 13:45');
