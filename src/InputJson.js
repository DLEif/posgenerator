function InputJson() {

}

InputJson.prototype.generate = function(count) {
    var input = [];
    var itemCount = Math.floor((Math.random() * 100) + 1);
    for (var index = 0; index < count; index++) {
        var item = fixtures.loadAllItems()[index];
        var newItem = {
            barcode: item.barcode,
            count: itemCount
        };
        input.push(newItem);
    }

    return input;
};
