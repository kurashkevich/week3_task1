// Зачем _ ??
// Почему в примере тест, не надо писать нижнее подчеркивание?


var tweet = {
    _likes: 15
};

var myObj = {
    likes: 25
};

Object.defineProperty(tweet, 'likes', {
    get: function () {
        return this._likes;
    },
    set: function (value) {
        this._likes = parseInt(value) || 0;
    }
});

function test() {
    tweet.likes = 26;
    console.log(tweet.likes);

    myObj.likes = 17;
    console.log(myObj.likes);
    
}
test();