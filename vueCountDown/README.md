# 使用Vue实现的倒计时组件

动画关键代码:

```javascript
this.timer = window.setInterval(() => {
  // 控制动画
  this.percentage -= 1 / 10
}, this.seconds)
```

percentage 代表的是一个百分比，seconds是 5，表示 5 毫秒执行一次这段代码

那么一秒的时间，这段代码将被执行 1000 / 5 = 200 次

而倒计时显示的文字和百分比的关联是每 20 倒计时文字减 1，
为了控制动画和真正的时间匹配，那么需要合理控制 percentage 减少的步长

计算公式为: 20 / 200 === 1 / 10