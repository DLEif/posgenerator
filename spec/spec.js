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
                '\n商店里进行购物结算时会使用收银机（POS）系统，' +
                '这台收银机会在结算时根据客户的购物车（Cart）中的商品（Item）' +
                '和商店正在进行的优惠活动（Promotion）进行结算和打印购物清单。' +
                '\n商店会进行' + promotionType +
                '的' + promotionTypeCount + '种类型优惠。' +
                '要求整个系统能够实现'+ strategyCount + '种优惠策略。';

            expectText +=
                "\n```` javascript"
                + "\nvar allItems = [\n"
                    + "new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'),\n"
                    + "new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'),\n"
                    + "new Item('ITEM000001', '雪碧', '瓶', 3.00, ''),\n"
                    + "new Item('ITEM000007', '果粒橙', '瓶', 3.50, ''),\n"
                    + "new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山'),\n"
                    + "new Item('ITEM000003', '云山荔枝', '斤', 15.00, '云山'),\n"
                    + "new Item('ITEM000004', '电池', '个', 2.00, ''),\n"
                    + "new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'),\n"
                    + "new Item('ITEM000008', '康师傅冰红茶', '瓶', 3.00, '康师傅'),\n"
                    + "new Item('ITEM000006', '羽毛球', '个', 1.00, '')\n"
                + "];\n"
                + "````";

            var actualText = new Generator().generate();

            expect(expectText).toBe(actualText);
        });
    });
});
