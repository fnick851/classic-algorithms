// https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1337/

class MyCircularQueue {
  public queue: any[];

  constructor(public size: number) {
    this.queue = [];
  }

  // Insert an element into the circular queue. Return true if the operation is successful.
  enQueue(value: number): boolean {
    const qCurrentSize = this.queue.length;
    if (qCurrentSize < this.size) {
      this.queue.push(value);
      return true;
    } else {
      return false;
    }
  }

  // Delete an element from the circular queue. Return true if the operation is successful.
  deQueue(): boolean {
    return true;
  }

  // Get the front item from the queue.
  Front(): boolean {
    return true;
  }

  // Get the last item from the queue.
  Rear(): number {
    return 1;
  }

  // Checks whether the circular queue is empty or not.
  isEmpty(): boolean {
    return true;
  }

  // Checks whether the circular queue is full or not.
  isFull(): boolean {
    return true;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

//  Example:
//  MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
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
const queue = new MyCircularQueue(3);
console.log(queue.size);
console.log(queue.enQueue(1));
console.log(queue.queue);
console.log(queue.enQueue(2));
console.log(queue.queue);
console.log(queue.enQueue(3));
console.log(queue.queue);
console.log(queue.enQueue(4));
console.log(queue.queue);
