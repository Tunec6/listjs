class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Возвращает значение n-ного элемента (где n это index) односвязного списка
    // Пример односвязного списка: 9,15,24,985,2
    // getValueByIndex(0) -> 9
    // getValueByIndex(2) -> 24
    // getValueByIndex(4) -> 2
    getValueByIndex(index) {
      // Ваш код
    }
    
    // Следующие три метода уже должны были быть сделаны
    addFront(value) {
    }

    deleteFront() {
    }

    print() {
    }
}

class HighScores {
    constructor() {
        this.scores = new SinglyLinkedList();
        this.maxScores = 10;
    }

    addScore(score) {
        this.scores.addToFront(score);
    }

    removeScore() {
        this.scores.deleteFront();
    }

    printScores() {
        this.scores.print();
    }
}

console.log(n)