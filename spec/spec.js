describe('Pos ', function(){
    describe('input format', function(){
        it('should generate input as json', function(){
            var input = Configuration.input;

            var actualInput = input.type.generate(input.count);
            var actualInputStr = actualInput + '';

            var matchBeginAndEnd = /^\[.*\]$/;
            var matchFormat = /^{\'|\"ITEM.+\'|\":[\d]+}$/;

            expect(actualInputStr).toMatch(matchBeginAndEnd);

            actualInput.forEach(function(item) {
                var itemStr = JSON.stringify(item);
                expect(itemStr).toMatch(matchFormat);
            });
        });
    });

    describe('generator', function() {
        it('should generate expect text', function() {
            var strategyCount = 4;
            var promotionTypeCount = 2;
            var promotionType = '打折、满即减';

            var expectText =
                '商店里进行购物结算时会使用收银机（POS）系统，' +
                '这台收银机会在结算时根据客户的购物车（Cart）中的商品（Item）' +
                '和商店正在进行的优惠活动（Promotion）进行结算和打印购物清单。' +
                '商店会进行' + promotionType +
                '的' + promotionTypeCount + '种类型优惠。' +
                '要求整个系统能够实现'+ strategyCount + '种优惠策略。';

            var actualText = new Generator().generate();

            expect(expectText).toBe(actualText);
        });
    });
});
