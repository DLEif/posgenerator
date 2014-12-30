var Promotion = (function() {
    var type = {
        DISCOUNT: '打折',
        REDUCTIONOVERPRICE: '满即减'
    };

    var printOneByOne = function() {
        var separator = '、';
        var result = '';

        for (var currentType in type) {
            result += type[currentType] + separator;
        }

        return  result.slice(0, -1);
    };

    return {
        type: type,
        typeCount: Object.keys(type).length,
        printOneByOne: printOneByOne
    }
})();
