### 136

异或表达式

相同为0， 不同相加？
```
1^1 = 0
1^2 = 3
```

### 104

二叉树的本质是递归

### 206

返置链表

`指针`问题

```csharp
public class Solution {
    public ListNode ReverseList(ListNode head) {
        ListNode rList = null;
        while(head!=null){
            ListNode temp = rList;
            rList = head;
            head = head.next; //这行与下行对调顺序结果不同， 因为指针
            rList.next = temp;         
        }
        return rList;
    }
}
```
