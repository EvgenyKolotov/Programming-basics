export interface LinkedNode<T> {
	value: T;
	next: LinkedNode<T> | null;
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

export interface DoubleLinkedNode<T> extends LinkedNode<T> {
    previous: DoubleLinkedNode<T> | null;
    next: DoubleLinkedNode<T> | null;
}

export type LinkedNodeParam<T> = DoubleLinkedNode<T> | null;

export interface DoubleLinkedList<T> extends LinkedList<T> {
    findElement: (value: T) => DoubleLinkedNode<T> | undefined;
}