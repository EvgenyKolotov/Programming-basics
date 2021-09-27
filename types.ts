export interface LinkedNode<T> {
	value: T;
}

export interface SingleLinkedNode<T> extends LinkedNode<T> {
	next: SingleLinkedNode<T> | null;
}

export interface DoubleLinkedNode<T> extends LinkedNode<T> {
	next: DoubleLinkedNode<T> | null;
	previous: DoubleLinkedNode<T> | null;
}

export interface LinkedList<T> {
	addFirst: (value: T) => void;
	addLast: (value: T) => void;
	removeFirst: () => void;
	removeLast: () => void;
	findElement: (value: T) => LinkedNode<T> | undefined;
	removeElement: (value: T) => void;
	insertAfter: (after: T, value: T) => void;
	toArray: () => Array<T>;
	isEmpty: () => boolean;
	size: () => number;
}

export interface Stack<T> {
	push: (value: T) => void;
	pop: () => void;
	peek: (value: T) => T;
	isEmpty: () => boolean;
	size: () => number;
}

export interface Queue<T> {
	enqueue: (v: T) => void;
	dequeue: () => void;
	peek: () => T;
	isEmpty: () => boolean;
	size: () => number;
}