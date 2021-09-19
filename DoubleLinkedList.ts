import { DoubleLinkedNode, LinkedNodeParam, DoubleLinkedList as LinkedList } from "./types";

class LinkedNode<T> implements DoubleLinkedNode<T> {
    public value: T;
    public next: LinkedNodeParam<T>;
    public previous: LinkedNodeParam<T>;

    constructor(value: T, next: LinkedNodeParam<T> = null, previous: LinkedNodeParam<T> = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class DoubleLinkedList<T> implements LinkedList<T> {
    private head: LinkedNodeParam<T> = null;
	private tail: LinkedNodeParam<T> = null;
	private length: number = 0;

    public addFirst(value: T): void {
        const node = new LinkedNode<T>(value, this.head);
        this.head = node;
        if (this.isEmpty()) {
            this.tail = node;
        } else {
            this.head.next.previous = this.head;
        }
        this.length++;
    }

    public addLast(value: T): void {
        if (this.isEmpty()) {
            this.head = this.tail = new LinkedNode<T>(value);
        } else {
            this.tail.next = new LinkedNode<T>(value, null, this.tail);
            this.tail = this.tail.next;
        }
        this.length++;
    }

    public toArray(): Array<T> {
		const output = [];
		let current = this.head;
		while(current) {
			output.push(current.value);
			current = current.next;
		}
		return output;
	}

	public isEmpty(): boolean {
		return this.length === 0;
	}

	public size(): number {
		return this.length;
	}
} 

export default DoubleLinkedList;
