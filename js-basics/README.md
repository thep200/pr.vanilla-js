# JS Basics
Dom là một cây tree ánh xạ các element của trang web.

## 1. Variable
- biến trong js chính là tên của một địa chỉ lưu trữ.
- tên biên trong js là case sensitive, có nghĩa rằng `x` sẽ khác `X`.
- có hai loại biến trong js là local variable và global variable.
    - local variable được định nghĩa bên trong một block, nó chỉ được truy xuất từ bên trong block đó.
    - global variable được định nghĩa bên ngoài block nó có thể được bất kỳ funciton nào sử dụng.

## 2. Data type
- Javascript là một `dynamic type language` có nghĩa rằng khi định nghĩa một biến chúng ta không cần khai báo kiểu dữ liệu cho biến đó mà js sẽ tự động gán dựa trên giá trị của biến.

**Có hai loại dữ liệu trong js đó là**:
- Primitive data type (kiểu dữ liệu nguyên thủy)
    - String, Number, Boolean, Undefined và Null
- Non-primitive data type (kiểu dữ liệu không nguyên thủy)
    - Object, Array, RegExp

## 3. Js operators
**Có 6 kiểu operator trong js đó là**:
- Arithmetic Operators
- Comparison (Relational) Operators
- Bitwise Operators
- Logical Operators
- Assignment Operators
- Special Operators
    - (?:), `, delete, in, instanceof, new, typeof, void, yield

## 4. Js loop
**Có một số kiểu loop trong js như sau**:
    - while
    - do while
    - for
    - foreach: là một builtin function của array được sử dụng để lặp qua các phần tử trong mảng.
    - for in: được sử dụng để lặp qua các key của một object
    - for of: được sử dụng để lặp qua các đối tượng (iterable object) như array hoặc string

## 5. Function
- apply()
- Bind()
- call()
