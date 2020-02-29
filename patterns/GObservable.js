class GObservable {

	constructor() {
		this.observers = {};
	}

	//Observers are just lambdas
	setObserver(id, fn) {
		this.observers[id] = fn;
	}

	remObserver(id) {
		delete this.observers[id];
	}

	clearObservers() {
		this.observers = {};
	}

	//Warning! No order of notification is guaranteed
	notify(message) {
		Object.values(this.observers).forEach(fn => fn(message));
	}

}
