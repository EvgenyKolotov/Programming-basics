import { Stack } from "../types";
import SingleLinkedList from './SingleLinkedList';

class ArrayStack<T> implements Stack<T> {
  private readonly items: Array<T> = [];

  public push(value: T): void {
    this.items.push(value);
  }

  public pop(): void {
    if (this.isEmpty()) return;
    this.items.pop();
  }

  public peek(): T {
    return this.items[this.items.length - 1]
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public size(): number {
    return this.items.length;
  }
}

class LinkedStack<T> implements Stack<T> {
  private readonly list: SingleLinkedList<T> = new SingleLinkedList<T>();

  public push(value: T): void {
    this.list.addFirst(value);
  }

  public pop(): void {
    this.list.removeFirst();
  }

  public peek(): T {
    return this.list.head.value;
  }

  public isEmpty(): boolean {
    return this.list.isEmpty();
  }

  public size(): number {
    return this.list.size();
  }
}