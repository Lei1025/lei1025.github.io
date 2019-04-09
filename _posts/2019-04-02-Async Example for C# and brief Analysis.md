---
layout: post
title: "Async Example Using 'Task<>' for C# with Brief Analysis"
tags: [c#, .net, async, example]
comments: true
---

> Implement Async by using Task<> provided by .Net 4.0 or later

Thank for the update of `.NET 4.0`, `Task` makes writing Async function easier and more understandable.

## A Draft Template

```csharp
//Async
Task<return type> task =  new Task<return type>((parameters) => {
    //do something
});

//start async function
task.Start();

//start sync function (main thread)
doSomething();

task.wait();    //if main thread need to wait async function finished
task.result(); //main thread will wait for result return
```

## Exapmle

TASK 1: Output 1 to 5 successively in an interval of 500ms

TASK 2: Output -1 to -5 successively in an interval of 1000ms then return a value

Cause Task 2 takes longer time, async is better for these time-consuming tasks in practical situations.

### C#
```c#
class Program {
  static void Main (string[] args) {
    //Async function
    Task<int> task = new Task<int> (() => {
      for (var i = -1; i > -6; i--) {
        Thread.Sleep (1000);
        Debug.WriteLine (i + "  Thread ID:" + Thread.CurrentThread.ManagedThreadId);
      }
      Debug.WriteLine ("task ends");
      return -99;
    });

    Debug.WriteLine ("Before task start：Task Status - " + task.Status + "; Thread ID:" + Thread.CurrentThread.ManagedThreadId);
    //Async start
    task.Start ();
    Debug.WriteLine ("Task started：Task Status - " + task.Status + "; Thread ID:" + Thread.CurrentThread.ManagedThreadId);

    Debug.WriteLine ("Sycn started：" + ":" + Thread.CurrentThread.ManagedThreadId);
    for (var i = 1; i < 6; i++) {
      Thread.Sleep (500);
      Debug.WriteLine ("+" + i + "  Thread ID:" + Thread.CurrentThread.ManagedThreadId);
    }
    Debug.WriteLine ("Sync End:" + Thread.CurrentThread.ManagedThreadId);

    Debug.WriteLine ("waiting for task：" + task.Status);
    //main thread waiting for Task ends, otherwise program will terminate as sync funtcion ends
    task.Wait ();

    //return value, program will wait for async function ends, no need for writing task.wait()
    Debug.WriteLine ("task return value: " + task.Result.ToString ());
  }
}
```

### Output
```
Before task start：Task Status - Created; Thread ID:1
Task started：Task Status - WaitingToRun; Thread ID:1
Sycn started：:1
+1  Thread ID:1
+2  Thread ID:1
-1  Thread ID:3
+3  Thread ID:1
+4  Thread ID:1
-2  Thread ID:3
+5  Thread ID:1
Sync End:1
waiting for task：Running
-3  Thread ID:3
-4  Thread ID:3
-5  Thread ID:3
task ends
task return value: -99
The program has exited with code 0 (0x0).
```

### If comment 'task.Wait()' and 'task.Result'

```
Before task start：Task Status - Created; Thread ID:1
Task started：Task Status - WaitingToRun; Thread ID:1
Sycn started：:1
+1  Thread ID:1
+2  Thread ID:1
-1  Thread ID:3
+3  Thread ID:1
-2  Thread ID:3
+4  Thread ID:1
+5  Thread ID:1
Sync End:1
waiting for task：Running
The program  has exited with code 0 (0x0).
```

## Conclusion

.Net actually creates a new thread for `Task<>`, like "forked" or "sub-threaded" from main thread. According to articles from Google, Task<> performers better than multi-thread and thread pool approach as it utilizes the feature of multi-core CPU and consuming resources properly. Thus Task<> is currently best solution to implement async functions with a pretty simple coding style.
