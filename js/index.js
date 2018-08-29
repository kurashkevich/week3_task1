/*
* Реализовать 2 функции, add and subtract
* функции могут принимать в качестве параметров 4 типа (минуты, дни, часы, месяца)
*
*
*
* */
function createObject(date) {
    return {
        add: function (val, type) {
            date = new Date(date);
            var newDate;
           switch (type) {
                case 'days': {
                    newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + val, date.getHours(), date.getMinutes());
                    console.log('add days' + newDate);
                    break;
                }
                case 'months': {
                    newDate = new Date(date.getFullYear(), date.getMonth() + val, date.getDate(), date.getHours(), date.getMinutes());
                    console.log('add month');
                    break;
                }
                case 'hours': {
                    newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + val, date.getMinutes());
                    break;
                }
                case 'minutes': {
                    newDate = new Date(date.getFullYear(), date.getMonth() + val, date.getDate(), date.getHours(), date.getMinutes() + val);
                    console.log('add min');
                    break;

                }
            }
           time.value = newDate;
           return time;

        },
        subtract: function (val, type) {
            date = new Date(date);
            var newDate;
            switch (type) {
                case 'days':{
                    newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()-val, date.getHours(), date.getMinutes());
                    break;
                }
                case 'months':{
                    newDate = new Date(date.getFullYear(), date.getMonth()-val, date.getDate(), date.getHours(), date.getMinutes());
                    break;
                }
                case 'hours':{
                    newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()-val, date.getMinutes());
                    break;
                }
                case 'minutes':{
                    newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()-val);
                    break;

                }
            }
            time.value = newDate;
            return time;
        }
    }
}



//addTest(2, 'days', '2017-05-12 13:45');

 //   .add(24, 'hours')
    //.subtract(1, 'months')
    //.add(3, 'days')
   // .add(15, 'minutes');

time = {
    _value: '2017-05-12 13:45',
    date: function (str){
        return {
            add: function (val, type) {
                str = new Date(str);
                var newDate;
                switch (type) {
                    case 'days': {
                        newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate() + val, str.getHours(), str.getMinutes());
                        console.log('add days' + newDate);
                        break;
                    }
                    case 'months': {
                        newDate = new Date(str.getFullYear(), str.getMonth() + val, str.getDate(), str.getHours(), str.getMinutes());
                        console.log('add month');
                        break;
                    }
                    case 'hours': {
                        newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours() + val, str.getMinutes());
                        break;
                    }
                    case 'minutes': {
                        newDate = new Date(str.getFullYear(), str.getMonth() + val, str.getDate(), str.getHours(), str.getMinutes() + val);
                        console.log('add min');
                        break;

                    }
                }
                time.value = newDate;
                console.log(this.value + ' :add');
                return this;
            },
            second: function () {
                console.log('sec');
                return this;
            }
        }

    }
    /*add: function (val, type) {
        var date = new Date(date);
        var newDate;
        switch (type) {
            case 'days': {
                newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + val, date.getHours(), date.getMinutes());
                console.log('add days' + newDate);
                break;
            }
            case 'months': {
                newDate = new Date(date.getFullYear(), date.getMonth() + val, date.getDate(), date.getHours(), date.getMinutes());
                console.log('add month');
                break;
            }
            case 'hours': {
                newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + val, date.getMinutes());
                break;
            }
            case 'minutes': {
                newDate = new Date(date.getFullYear(), date.getMonth() + val, date.getDate(), date.getHours(), date.getMinutes() + val);
                console.log('add min');
                break;

            }
        }
        time.value = newDate;
        return this;

    }*/    /*add: function (val, type) {
        var date = new Date(date);
        var newDate;
        switch (type) {
            case 'days': {
                newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + val, date.getHours(), date.getMinutes());
                console.log('add days' + newDate);
                break;
            }
            case 'months': {
                newDate = new Date(date.getFullYear(), date.getMonth() + val, date.getDate(), date.getHours(), date.getMinutes());
                console.log('add month');
                break;
            }
            case 'hours': {
                newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + val, date.getMinutes());
                break;
            }
            case 'minutes': {
                newDate = new Date(date.getFullYear(), date.getMonth() + val, date.getDate(), date.getHours(), date.getMinutes() + val);
                console.log('add min');
                break;

            }
        }
        time.value = newDate;
        return this;

    }*/
};

Object.defineProperty(time, 'value', {
    get: function () {
        return this._value;
    },
    set: function (value) {
        this._value = value;
    },
});
/*time = createObject('2017-05-12 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')*/
console.info(time.date('2017-05-12 13:45').add(24, 'hours').second());
