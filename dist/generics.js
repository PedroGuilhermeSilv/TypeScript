"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const returnValue = (mensage) => {
    return mensage;
};
const value = returnValue('Hello World');
const value2 = returnValue(100);
function getFirstValueFromArray(arr) {
    return arr[0];
}
const value3 = getFirstValueFromArray([1, 3, 4]);
//Promises
const returnPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return 5;
});
