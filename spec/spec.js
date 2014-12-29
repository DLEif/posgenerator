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
});
