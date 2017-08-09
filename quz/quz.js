/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
/**
* dcate
由后面跟着的元素组成的列表
* b元素可以修改A的项。
*不要用“新”
* @param {列表}
* @param B {列表}
* @returns {列表}
*/
quz.dcate=function(A, B) {
	for (L = A; L !== null; L = L.tail) {
		if(L.tail===null){
			L.tail=B;
			break;
		}
	}
	return A;
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */

/*
*子
*由列表L中的LEN项组成的子列表
从项目#开始(第一项为# 0)。
*不修改原始列表元素。
如果所期望的项不存在，则是一个错误。
* @param } {列表L
* @param {号码}开始
* @param {号码}兰
* @returns {列表}
*/
var List = require('../js/list')
quz.sub=function(L, start, len) {
	var res=[];
	for (C = L; C !== null; C = C.tail) {
		res.push(C.head);
	}
	var A;
	for (var i = 0; i < res.length; i++) {
		A = List.list(res.slice(start,(start+len)));
	}
	return A;

	/** Fill in here **/
	// var index=0;
	// var flag=true;
	// for (C = L; C !== null; C = C.tail) {
	// 	if(start==index){
	// 		flag=false;
	// 		break;
	// 	}
	// 	index++;
	// }
	// if(flag){
	// 	return false;
	// }
	// index=1;
	// flag=true;
	// for (D = C; D !== null; D = D.tail) {
		
	// 	if(index==len){
	// 		D.tail=null;
	// 		flag=false;
	// 		break;
	// 	}

	// 	index++;
	// }
	// if(flag){
	// 	return false;
	// }
	// return C;
	
}

function quz(){

}

module.exports = quz




