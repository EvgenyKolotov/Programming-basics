import { DoubleLinkedNode as LinkedNode, LinkedList } from "./types";

type LinkedNodeParam<T> = LinkedNode<T> | null;

class DoubleLinkedNode<T> implements LinkedNode<T> {
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
      const node = new DoubleLinkedNode<T>(value, this.head);
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
          this.head = this.tail = new DoubleLinkedNode<T>(value);
      } else {
          this.tail.next = new DoubleLinkedNode<T>(value, null, this.tail);
          this.tail = this.tail.next;
      }
      this.length++;
  }

  public removeFirst(): void {
    if (this.isEmpty()) return;
    if (this.size() === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.length--;
  }

  public removeLast(): void {
    if (this.isEmpty()) return;
    if (this.size() === 1) {
      this.head = this.tail = null;
    } else {
      this.tail.previous.next = null;
      this.tail = this.tail.previous;
    }
    this.length--;
  }

  public removeElement(value: T): void {
    if (this.isEmpty()) return;
    while(this.head && this.head.value === value) {
      this.head = this.head.next;
      this.head.previous = null;
    }
    let current = this.head;
    while(current!.next) {
      if (current!.next.value === value) {
        current!.next = current!.next.next;
      } else {
        current = current!.next;
      }
    }
    if (this.tail!.value === value) {
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
      current = current.next;
    }
    return undefined;
  }

  public insertAfter(after: T, value: T): void {
    const found = this.findElement(after);
    if (!found) return;
    found!.next = new DoubleLinkedNode<T>(value, found!.next, found);
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
