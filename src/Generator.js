function Generator() {

}

Generator.prototype.generate = function() {
    var storeIntro = '\n商店里进行购物结算时会使用收银机（POS）系统，' +
        '这台收银机会在结算时根据客户的购物车（Cart）中的商品（Item）' +
        '和商店正在进行的优惠活动（Promotion）进行结算和打印购物清单。';

    var storeActivity = '\n商店会进行' + Promotion.printOneByOne() +
        '的' + Promotion.typeCount + '种类型优惠。' +
        '要求整个系统能够实现' + Strategy.count + '种优惠策略。';

    var allItems =  "\n```` javascript"
                    + '\nvar allItems = [\n'
                    + new Items('version_1').printEachInJson()
                    + '\n];\n'
                    + "````";

    var result =    storeIntro
                    + storeActivity
                    + allItems;

    return result;
};
