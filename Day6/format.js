Date.prototype.time = function (formate) {
    var arr = {
        'M+': this.getMonth(),
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        //'S+':this.getMilliseconds()
    }
    if (/(y+)/.test(formate)) {
        formate = formate.replace(
            RegExp.$1,
            (this.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
    }
    ;
    for (var i in arr) {
        if (new RegExp('(' + i + ')').test(formate)) {
            formate = formate.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? arr[i] : ('00' + arr[i]).substr(('' + arr[i]).length)
            );

        }
    }
    if (/(S+)/.test(formate)) {
        formate = formate.replace(
            RegExp.$1,
            ('' + this.getMilliseconds()).substr(3 - RegExp.$1.length)
        )
    }
    return formate;
}