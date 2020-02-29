terser GExtend.js -m -o GExtend.min.js && ^
terser patterns/GObservable.js -m --mangle-props regex=/^_/ -o patterns/GObservable.min.js