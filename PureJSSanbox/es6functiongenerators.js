function* foo() {
	const a = yield "Hello this A";
	console.log(a);
	const b = yield "This is a B";
	console.log(b);
	const c = yield "This is a C";
	console.log(c);
    
	return a + b + c;
}

let generatorfoo = foo();

let logger = generatorfoo.next();
let logger2 = generatorfoo.next(1);
let logger3 = generatorfoo.next(2);
let logger4 = generatorfoo.next(3);

console.log(logger);
console.log(logger2);
console.log(logger3);
console.log(logger4);
