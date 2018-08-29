//Написать объект
// Написать для него функции
// Функция проверки корректности данных
// функция для парсинга

var time = {
    value: '',
    getValue: function () {
        return this.value;
    },
    setValue: function(value){
        this.value = value;
        return this;
    },
    add: function (val, type) {
        var str = new Date(this.getValue());
        var newDate;
        switch (type) {
            case 'days': {
                newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate() + val, str.getHours(), str.getMinutes());
                break;
            }
            case 'months': {
                newDate = new Date(str.getFullYear(), str.getMonth() + val, str.getDate(), str.getHours(), str.getMinutes());
                break;
            }
            case 'hours': {
                newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours() + val, str.getMinutes());
                break;
            }
            case 'minutes': {
                newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours(), str.getMinutes() + val);
                break;

            }
        }
        this.value = newDate;
        return this;
    },
    subtract: function(val, type) {
        try {
            if (parseInt(val) < 0 || (type !== 'days' || type !== 'months' || type !== 'hours' || type !== 'minutes')){
                throw new TypeError('check data');
                console.log('123');
            }

            var str = new Date(this.getValue());
            var newDate;
            switch (type) {
                case 'days': {
                    newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate() - val, str.getHours(), str.getMinutes());
                    break;
                }
                case 'months': {
                    newDate = new Date(str.getFullYear(), str.getMonth() - val, str.getDate(), str.getHours(), str.getMinutes());
                    break;
                }
                case 'hours': {
                    newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours() - val, str.getMinutes());
                    break;
                }
                case 'minutes': {
                    newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours(), str.getMinutes() + val);
                    break;

                }
            }
            this.value = newDate;

        }catch (e) {

        }
        return this;
    }
}




function date(str){
    time.setValue(str)
        .add(24, 'hours')
        .subtract(-8, 'months')
        .add(3, 'days')
        .add(15, 'minutes');

    console.log(time.value);


}
time = date('2017-05-16 13:45');

