# select-box
select box for Yii2 


> 效果图片

![demo](images/demo.png)

## 安装

```
composer require dungang/mjax
```

## 使用

> 方法1

```
dungang\selectbox\SelectBox::widget([
    'name'=>'parent',
    'sourceItems'=>['val1'=>'text1','val2'=>'text2'],
    'targetItems'=>['val3'=>'text3','val4'=>'text4'],
])
```


> 方法2

```
$form->field($model,'parents')->widget('huluwa\selectbox\SelectBox',[
    'sourceItems'=>['val1'=>'text1','val2'=>'text2'],
    'targetItems'=>['val3'=>'text3','val4'=>'text4'],
])
```


## 协议

MIT License

Copyright (c) 2017 dungang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.