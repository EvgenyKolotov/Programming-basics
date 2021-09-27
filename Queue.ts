import { Queue as IQueue } from './types';

class Queue<T> implements IQueue<T> {
  private queue: Array<T> = [];
  private head: T | null = null;
  private tail: T | null = null;

  public enqueue(value: T): void {
    this.queue.push(value);
  }

  public dequeue(): void {
    if (this.isEmpty()) return;
    this.queue.shift();
  }

  public peek(): T {
    if (this.isEmpty()) return;
    return this.queue[0];
  }

  public isEmpty(): boolean {
    return this.queue.length === 0;
  }

  public size(): number {
    return this.queue.length;
  }
}