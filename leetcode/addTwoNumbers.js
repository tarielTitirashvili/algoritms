// 2. add two numbers

var addTwoNumbers = function (l1, l2) {
    class ListNode {
        constructor(val, next = null) {
            this.val = val;
            this.next = next;
        }
    }
    function add(newVal) {
        let currentNode = nodes;
        const newNode = new ListNode(newVal);
        if (nodes.val === undefined) {
            nodes.val = newVal
            nodes.next = null
        } else {
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode
        }
    }

    function addValues(val1 = 0, val2 = 0) {
        let res = val1 + val2 + save
        if (res < 10) {
            save = 0
            return res
        } else {
            save = +res.toString()[0]
            return +res.toString()[1]
        }
    }
    const nodes = {}
    let save = 0;
    while (l1?.val !== undefined || l2?.val !== undefined || save) {
        add(addValues(l1?.val, l2?.val));
        if (l1?.val !== undefined)
            l1 = l1.next;
        if (l2?.val !== undefined)
            l2 = l2.next;
    }
    return nodes;
};


const l1 = { val: 9, next: { val: 4, next: { val: 8, next: null } } }
const l2 = { val: 9, next: { val: 4, next: { val: 3, next: null } } }

const l3 = { val: 0, next: null }
const l4 = { val: 0, next: null }
const l5 = { val: 2, next: { val: 4, next: { val: 3, next: null } } }
const l6 = { val: 5, next: { val: 6, next: { val: 4, next: null } } }

console.log(addTwoNumbers(l5, l6))
console.log(addTwoNumbers(l3, l4))
console.log(addTwoNumbers(l1, l2))
