# JS Event handle
Event được sử dụng để lắng nghe và thay đổi khi có một sự kiện được kích hoạt. Các event được chia thành các nhóm như sau:
- Mouse events:
    - onclick       : Khi người dùng click
    - onmouseover   : khi con trỏ di chuyển qua một element
    - onmouseout    : khi con trỏ di chuyển ra khỏi element
    - onmousedown   : khi nhấn con trỏ trên một element
    - onmouseup     : khi nhả con trỏ trên một element
    - onmousemove   : khi con trỏ di chuyển

- Keyboard events:
    - onkeyup   : khi người dùng bấm vào phím
    - onkeydown : khi người dùng release phím đó.

- Form events:
    - onchange  : khi người dùng thay đổi giá trị của một form.
    - onsfocus  : khi người dùng đang nhập liệu và một element hoặc focuses nó
    - onblur    : khi người dùng từ trạng thái focus rời đi. (đang nhập vào một input rồi rời đi)
    - onsubmit  : khi submit một form

- Window/Document events:
    - onload    : khi trình duyệt đã load xong trang
    - onunload  : khi người dùng đóng page (browser sẽ unload page)
    - onresize  : khi người dùng điều chỉnh kích thước cửa sổ trình duyệt.

> Còn rất nhiều nữa.

## addEventListener()
- Được sử dụng để gán event vào một thẻ. Lưu ý các event có thể gán nhiều lần mà chúng không ghi đè nhau, chúng sẽ chạy từng lệnh một trên cùng một event được gán.
```js
document.getElementById('foo').addEventListener('click', foo())
```

## Bubbling and Capturing
```js
<div id="outer">
    <div id="inner"></div>
</div>

document.getElementById('outer').addEventListener('click', () => alert('outer))
document.getElementById('inner').addEventListener('click', () => alert('inner))
```
Với ví dụ trên khi ta click vào thẻ div thì event nào sẽ được execute trước?.
Với mode `Bubbling` thì thẻ inner sẽ được run trước và sau đó là thẻ outer. Với mode `Capturing` thì thẻ outer sẽ được run trước thẻ inner.

> Bubbling and Capturing là tham số thứ 3 trong hàm `addEventListener()`. Với giá trị tham số thứ 3 mặc định là false thì `Bubbling` mode được set.


## Onload
- document.onload : Được run trước khi ta load image và các content, run trước window.onload. Nó sẽ bị xóa bỏ trước khi run window.onload
- window.onload   : Được run khi entire page được load như css file, js file,...
