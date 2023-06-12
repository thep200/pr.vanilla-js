# RxJs (Reactive Extension for JavaScript)
Hãy tượng tượng các event được khởi tạo và sử dụng trên DOM của chúng ta, chúng dược khởi tạo trước và sau hay nói theo cách khác chúng được khởi tạo trên một trục thời gian và chúng ta có thể xem mỗi event là một phần tử trong một mảng các event theo trục thời gian.

Hãy xem xét mảng trong các ngon ngữ khác hoặc chính bản thân JS, mảng (array) có các hàm xử lý đặc biệt như `map()`, `reduce()`, `filter()`, ... . Ta cũng có thể sử dụng chúng với event?.

```js
var btnClicks = Rx.Observable.fromEvent($('#btn'), "click");
btnClicks.filter(function (value) {
        return value.altKey;
    }).subscribe(function () {
        console.log('Holding Alt while Clicking！');
    });
```

