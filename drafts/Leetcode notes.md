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

### 169

数组里数元素个数问题用dictionary 解决

### 242

* string to char array
* sort array
* array to string

```c#
public class Solution {
    public bool IsAnagram(string s, string t) {
        if(s.Length != t.Length) return false;
        //string to char array
        char[] sArray = s.ToCharArray();
        char[] tArray = t.ToCharArray();
        //sort
        Array.Sort(sArray);
        Array.Sort(tArray);
        //array to string and compare
        string sNew = String.Join("",sArray);
        string tNew = String.Join("",tArray);
        if(sNew == tNew) return true;
        return false;
    }
}
```

### 108

平衡二叉树： 一直对半分数组

### 202

用HashSet解决重复问题
