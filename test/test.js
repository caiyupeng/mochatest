var List = require('../js/list')
var quz=require('../quz/quz')
var should = require('should')

describe('unit test for quz.js', function () {
    var A = List.list([4, 6, 7, 3, 8]),
        B = List.list([3, 2, 5, 9]),
        C = List.list([19, 8, 7, 3, 2]);

    describe('#dcate()', function () {
        // 应该得到一个包含a元素和B元素的列表
        it('should get a list consisting of elements of A followed by the elements of B', function () {
        	A.toString().should.equal('[ 4 6 7 3 8 ]');
            quz.dcate(A, B).toString().should.equal('[ 4 6 7 3 8 3 2 5 9 ]');
            console.log(A.toString());
            A.toString().should.not.equal('[ 4 6 7 3 8 ]');
        });
    });

    describe('#sub()', function () {
        // 应该得到由列表L中的LEN项组成的子列表
        it('should get the sublist consisting of LEN items from list L', function () {
        	C.toString().should.equal('[ 19 8 7 3 2 ]');
            quz.sub(C, 2, 2).toString().should.equal('[ 7 3 ]');
            C.toString().should.equal('[ 19 8 7 3 2 ]');
        });
    });

});