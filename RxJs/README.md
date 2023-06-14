# RxJs (Reactive Extension for JavaScript)
Hãy tượng tượng các event được khởi tạo và sử dụng trên DOM của chúng ta, chúng dược khởi tạo trước và sau hay nói theo cách khác chúng được khởi tạo trên một trục thời gian và chúng ta có thể xem mỗi event là một phần tử trong một mảng các event theo trục thời gian.

Hãy xem xét mảng trong các ngôn ngữ khác hoặc chính bản thân JS, mảng (array) có các hàm xử lý đặc biệt như `map()`, `reduce()`, `filter()`, ... . Ta cũng có thể sử dụng chúng với event?.

```js
var btnClicks = Rx.Observable.fromEvent($('#btn'), "click");
btnClicks.filter(function (value) {
        return value.altKey;
    }).subscribe(function () {
        console.log('Holding Alt while Clicking！');
    });
```

## Features of RxJS
- `Observable`: một tập hợp các giá trị trong tương lai hoặc các sự kiện, ví dụ như một click, mouse event hoặc là một http request.
- `Observer`: một tập hợp các callback được sử dụng để xác định tương tác với các giá trị từ `Observable`
- `Subscription`: execution một `Observable`
- `Operators`: các hàm đợn giản run qua tập hợp các `Observable` tương tự như map(), filter(), ..
- `Subject`
- `Schedulers`

## Installs RxJS
```bash
npm install rxjs
npm install esm

# test on browser
npm install --save-dev babel-loader @babel/core @babel/preset-env webpack webpack-cli webpack-dev-server
```

```bash
# run code
node -r esm file.js
```
