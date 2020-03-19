// https://leetcode.com/explore/learn/card/queue-stack/228/first-in-first-out-data-structure/1337/

class MyCircularQueue {
  constructor(
    public size: number,
    public queue: any[] = [],
    private head: number = -1,
    private tail: number = -1,
    private currentSize: number = 0
  ) {}

  currentLength(): number {
    this.currentSize = this.queue.filter(el => typeof el === "number").length
    return this.currentSize
  }

  // Insert an element into the circular queue. Return true if the operation is successful.
  enQueue(value: number): boolean {
    if (this.isFull()) return false
    if (this.tail === this.size - 1) {
      this.queue.splice(0, 1, value)
      this.tail = 0
    } else {
      this.queue.splice(
        this.tail + 1,
        this.queue[this.tail + 1] === "" ? 1 : 0,
        value
      )
      this.tail = this.tail + 1
    }
    if (this.currentLength() === 1) {
      this.head = 0
    }
    return true
  }

  // Delete an element from the circular queue. Return true if the operation is successful.
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.queue.splice(this.head, 1, "")
    if (this.isEmpty()) {
      this.head = -1
      this.tail = -1
    } else {
      this.head === this.size - 1
        ? (this.head = 0)
        : (this.head = this.head + 1)
    }
    return true
  }

  // Get the front item from the queue.
  Front(): number {
    return this.currentLength() === 0 ? -1 : this.queue[this.head]
  }

  // Get the last item from the queue.
  Rear(): number {
    return this.currentLength() === 0 ? -1 : this.queue[this.tail]
  }

  // Checks whether the circular queue is empty or not.
  isEmpty(): boolean {
    return this.currentLength() === 0
  }

  // Checks whether the circular queue is full or not.
  isFull(): boolean {
    return this.currentLength() === this.size
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
// const queue = new MyCircularQueue(30)
// queue.enQueue(71)
// queue.isFull()
// queue.enQueue(32)
// queue.enQueue(1)
// queue.isFull()
// queue.enQueue(32)
// queue.enQueue(8)
// queue.enQueue(6)
// queue.Front()
// queue.Front()
// queue.Rear()
// queue.enQueue(8)
// queue.Rear()
// queue.enQueue(3)
// queue.Rear()
// queue.Front()
// queue.enQueue(56)
// queue.enQueue(41)
// queue.Front()
// queue.enQueue(14)
// queue.enQueue(6)
// queue.Rear()
// queue.enQueue(25)
// queue.isEmpty()
// queue.Rear()
// queue.Front()
// queue.Rear()
// queue.enQueue(44)
// queue.Front()
// queue.enQueue(84)
// queue.Rear()
// queue.isEmpty()
// queue.Rear()
// queue.enQueue(59)
// queue.Front()
// queue.Front()
// queue.deQueue()
// queue.enQueue(4)
// queue.Front()
// queue.enQueue(40)
// queue.enQueue(11)
// queue.deQueue()
// queue.enQueue(94)
// queue.isFull()
// queue.Front()
// queue.enQueue(72)
// queue.deQueue()
// queue.enQueue(19)
// queue.isEmpty()
// queue.isEmpty()
// queue.enQueue(20)
// queue.Front()
// queue.Front()
// queue.Rear()
// queue.deQueue()
// queue.Front()
// queue.enQueue(58)
// queue.Rear()
// queue.enQueue(54)
// queue.Rear()
// queue.Rear()
// queue.Front()
// queue.deQueue()
// queue.enQueue(65)
// queue.deQueue()
// queue.Rear()
// queue.enQueue(59)
// queue.Front()
// queue.enQueue(26)
// queue.enQueue(10)
// queue.deQueue()
// queue.enQueue(14)
// queue.Front()
// queue.enQueue(2)
// queue.deQueue()
// queue.enQueue(37)
// queue.Front()
// queue.Front()
// queue.enQueue(46)
// queue.enQueue(63)
// queue.enQueue(42)
// queue.Front()
// queue.enQueue(84)
// queue.enQueue(30)
// queue.Rear()
// queue.deQueue()
// queue.enQueue(49)
// queue.Front()
// queue.enQueue(79)
// queue.enQueue(46)
// queue.Rear()
// queue.enQueue(97)
// queue.enQueue(83)
// queue.Rear()
// queue.isFull()
// queue.enQueue(76)
// queue.Rear()
// queue.enQueue(79)
// queue.deQueue()
// queue.Rear()
// queue.enQueue(44)
