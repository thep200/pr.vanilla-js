# JS Async

## 1. Callbacks
- Hàm trong JS được chạy theo một sequence mà chúng được gọi chứ không phải theo trình tự chúng được định nghĩa.
- Callback là một hàm được truyền vào một hàm khác dưới dạng một tham số.
- Callback thực sự được sử dụng trong xử lý bất đồng bộ `asynchronous` khi một hàm phải chờ cho một hàm khác.
- Lập trình với bất đồng bộ bằng việc kết hợp nhiều callback lồng nhau làm cho code của chúng ta khó đọc và khó bảo trì, vì thế nên chúng ta sử dụng promise cho xử lý trong bất đồng bộ.

## 2. Synchronous và Asynchronous
- Đồng bộ là trong khi thực thi mã chương trình các lệnh được execute theo thứ tự từ trên xuống, một mã được thực hiện trước khi một mã khác được thực hiện.
- Bất đồng bộ là việc chương trình vẫn tiếp tục chạy mà không chờ đợi kết quả của một mã trước đó.

- ví dụ `fetch` là một hàm bất đồng bộ được sử dụng để call dữ liệu từ internet, chương trình sẽ tiếp tục run trong khi hàm này được chạy. Khi dữ liệu được trả về chương trình sẽ tiếp tực với dữ liệu đó mà trước đó không hề dừng lại chờ. Điều này giúp tăng trải nghiệm người dùng.

## 3. Promise
**Promise**
- `producing code` là đoạn mã cần phải mất thời gian để run.
- `consuming code` là đoạn code chúng ta cần phải chờ kết quả của nó.
- một Promise là một js object liên kết giữa producing code và consuming code

- một promise có 3 state là `pending`, `fulfilled` và `rejected`. Tương ứng với từng trạng thái chúng ta sẽ có các kết quả tương ứng là `undefined`, `value` và `error object`.

- `promise.then()` nhận tham số là 2 callback cho trạng thái khi thành công và thất bại, chúng đều là optional nên ta có thể pass callback nào tùy hoàn cảnh.

- `async` sẽ làm cho một hàm trả về một promise.
```js
// async
async function myFunction() {
    return "Hello";
}

// normal
function myFunction() {
    return Promise.resolve("Hello");
}

//
myFunction().then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);
```
- `await` sẽ làm cho một hàm phải chờ một promise. Await chỉ có thể được sử dụng bên trong một async. Await tạm dừng việc run code đợi cho đến khi promise được thực resolve thì mới tiếp tục.
```js
let value = await promise;

async function doSomething() {
    const result = await fetch('https://example.com/data');
    // code here that uses the result
}
```

## 4. Facts
- Chúng ta có thể lấy dữ liệu từ một `promise` bằng `then`, tuy nhiên nếu chúng ta mong muốn đợi khi dữ liệu được lấy rồi mới thực hiện các logic sau thì chúng ta sẽ cần phải dùng tới từ khóa `await` để đợi promise trả về kết quả hoặc là bị từ chối.
