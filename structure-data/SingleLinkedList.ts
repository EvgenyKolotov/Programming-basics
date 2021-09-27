import { SingleLinkedNode as LinkedNode, LinkedList } from "../types";

type LinkedNodeParam<T> = LinkedNode<T> | null;

class SingleLinkedNode<T> implements LinkedNode<T> {
    public value: T;
    public next: LinkedNodeParam<T>;

    constructor(value: T, next: LinkedNodeParam<T> = null) {
        this.value = value;
        this.next = next;
    }
}

class SingleLinkedList<T> implements LinkedList<T> {
	public head: LinkedNodeParam<T> = null;
	private tail: LinkedNodeParam<T> = null;
	private length: number = 0;

	public addFirst(value: T): void {
		if (this.isEmpty()) {
			this.head = this.tail = new SingleLinkedNode<T>(value);
		} else {
			this.head = new SingleLinkedNode<T>(value, this.head);
		}
		this.length++;
	}

	public addLast(value: T): void {
		const node = new SingleLinkedNode<T>(value);
		if (this.isEmpty()) {
			this.head = this.tail = new SingleLinkedNode<T>(value);
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
	}

	public removeFirst(): void {
		if (this.isEmpty()) return;
		if (this.size() === 1) {
			this.head = this.tail = null;
		} else {
			this.head = this.head!.next;
		}
		this.length--;
	}

	public removeLast(): void {
		if (this.isEmpty()) return;
		if (this.size() === 1) {
			this.head = this.tail = null;
		} else {
			let current = this.head;
			while(current!.next !== this.tail) {
				current = current!.next;
			}
			current!.next = null;
			this.tail = current;
		}
		this.length--;
	}

	public findElement(value: T): LinkedNode<T> | undefined {
		if (this.isEmpty()) return;
		let current = this.head;
		while(current) {
			if (current.value === value) {
				return current;
			}
			current = current!.next;
		}
		return undefined;
	}

	public insertAfter(after: T, value: T): void {
		const found = this.findElement(after);
		if (!found) return;
		found!.next = new SingleLinkedNode<T>(value, found!.next);
		this.length++;
	}

	public removeElement(value: T): void {
		if (this.isEmpty()) return;
		if (this.size() === 1) {
			this.head = this.tail = null;
		} else {
			let current = this.head;
			while(current.next) {
				if (current!.next.value === value) {
					current.next = current!.next.next;
				} else {
					current = current!.next;
				}
			}
			this.length--;
		}
	}

	public toArray(): Array<T> {
		const output = [];
		let current = this.head;
		while(current) {
			output.push(current!.value);
			current = current!.next;
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

export default SingleLinkedList;
