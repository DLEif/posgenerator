function Items(version) {
    this.version = version;
}

Items.prototype.printEachInJson = function() {
    var allItems = Configuration.allItems[this.version];

    var separator = ',\n';
    var result = '';

    allItems.forEach(function(item) {
        result += item + separator
    });

    return result.slice(0, -2);
};
