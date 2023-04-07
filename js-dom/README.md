# Js DOM (Document Object Model)
DOM đại diện cho toàn bộ html document. Khi một html document được load bởi trình duyệt thì nó sẽ trở thành một DOM. Nó là một root element đại diện cho html document. Chúng ta có thể truy cập các thuộc tính và phương thức của nó để thực hiện thay đổi nội dung của nó.

![ảnh](/js-dom/images/DOM.png)

```js
write("string")
writeln("string")
getElementById()
getElementsByName()
getElementsByTagName()
getElementsByClassName()
```

Đối với thẻ `form` chúng ta có thể truy cập trực tiếp thông qua thuộc tính name như sau:
```js
<form action="" name="form1">
    <input type="text" name="email" id="email">
</form>

console.log(document.form1.email.value);
```

## 1. innerText vs innerHtml
`innerText` sẽ in ra text của element nó bỏ qua các tag con trong thẻ được lấy. `innerHtml` sẽ in ra cả các tag con trong thẻ được lấy.

`innerText` thường được sử dụng để ghi các msg cho validate,...
```js
<div id="myDiv">
  This is some <b>bold text</b>.
</div>


//
var div = document.getElementById("myDiv");
console.log(div.innerText); // "This is some bold text."
console.log(div.innerHTML); // "This is some <b>bold text</b>."
```
