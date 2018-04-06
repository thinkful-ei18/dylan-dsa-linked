# Mystery Program
```js
function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
```

This function will iterate through a linked list, save that value, and then iterate through the rest of the list and delete any nodes that have the same value as the currentNode. It has a complexity of O(n^2)