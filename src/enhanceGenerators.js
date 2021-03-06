// Magical!
//Takes a set of generator functions on an object and makes them async chainable to
//every, forEach, map, reduce, some as well as additional functions provided
//as the iterable 'all'.

import {generx} from "./generx.js";

export function enhanceGenerators(scope,fnames,{all}={}) { 
	for(const fname of fnames) {
		const f1 = generx(scope[fname]),
			f2 = function(...args) {
				const generator = f1.call(this,...args);
				if(all) {
					for(const f of all) {
						generator[f.name] = async function(...args) {
							let result = [];
							for await(const item of generator) {
								const value = await item[f.name].call(item,...args);
								if(value!==undefined) result.push(value);
							}
							return result.length===0 ? undefined : result.length===1 ? result[0] : result;
						}
					}
				}
				return generator;
			}
		Object.defineProperty(scope,fname,{enumerable:false,configurable:true,writable:true,value:f2})
	}
}
