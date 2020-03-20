// https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1337/

class MyCircularQueue {
  constructor(
    public size: number,
    public queue: any[] = [],
    private head: number = -1,
    private tail: number = -1
  ) {}

  // Insert an element into the circular queue. Return true if the operation is successful.
  enQueue(value: number): boolean {
    if (this.isFull()) return false
    if (this.isEmpty()) this.head = 0
    this.tail = (this.tail + 1) % this.size
    this.queue.splice(this.tail, 1, value)
    return true
  }

  // Delete an element from the circular queue. Return true if the operation is successful.
  deQueue(): boolean {
    if (this.isEmpty()) return false
    if (this.head === this.tail) {
      this.head = -1
      this.tail = -1
    } else {
      this.head = (this.head + 1) % this.size
    }
    return true
  }

  // Get the front item from the queue.
  Front(): number {
    return this.isEmpty() ? -1 : this.queue[this.head]
  }

  // Get the last item from the queue.
  Rear(): number {
    return this.isEmpty() ? -1 : this.queue[this.tail]
  }

  // Checks whether the circular queue is empty or not.
  isEmpty(): boolean {
    return this.head === -1
  }

  // Checks whether the circular queue is full or not.
  isFull(): boolean {
    return (this.tail + 1) % this.size === this.head
  }
}

// Your MyCircularQueue object will be instantiated and called as such:
// var obj = new MyCircularQueue(k)
// var param_1 = obj.enQueue(value)
// var param_2 = obj.deQueue()
// var param_3 = obj.Front()
// var param_4 = obj.Rear()
// var param_5 = obj.isEmpty()
// var param_6 = obj.isFull()

// Example:
// MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
// circularQueue.enQueue(1);  // return true
// circularQueue.enQueue(2);  // return true
// circularQueue.enQueue(3);  // return true
// circularQueue.enQueue(4);  // return false, the queue is full
// circularQueue.Rear();  // return 3
// circularQueue.isFull();  // return true
// circularQueue.deQueue();  // return true
// circularQueue.enQueue(4);  // return true
// circularQueue.Rear();  // return 4

// test
// const queue = new MyCircularQueue(4)
