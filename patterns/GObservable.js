class GObservable {

	constructor() {
		this.observers = {};
	}

	//Observers are just lambda-functions
	setObserver(id, lambda) {
		this.observers[id] = lambda;
	}

	remObserver(id) {
		delete this.observers[id];
	}

	clearObservers() {
		this.observers = {};
	}

	//Warning! No order of notification is guaranteed
	notify(message) {
		Object.values(this.observers).forEach(lambda => lambda(message));
	}

}
