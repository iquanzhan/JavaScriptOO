function nameplace(nameplaceString) {
    var temp = [];
    var array = nameplaceString.split('.');

    for (var i = 0; i < array.length; i++) {
        temp.push(array[i]);
        eval('window.' + temp.join('.') + "={}");
    }
}