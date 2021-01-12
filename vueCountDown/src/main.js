new Vue({
  el: '#app',
  data: {
    // svg 大小
    size: 120,
    // 笔画大小
    stroke: 10,
    // 百分比
    percentage: 100,
    timer: null,
    seconds: 5,
    isAnimate: false
  },
  computed: {
    radius() {
      return (this.size - this.stroke) / 2
    },
    circleOffset() {
      return this.size / 2
    },
    circumference() {
      return this.radius * 2 * Math.PI
    },
    progress() {
      return this.circumference - this.circumference * this.percentage / 100
    },
    countDown() {
      // 保持向上取整
      return Math.ceil(
        this.seconds * this.percentage / 100
      )
    }
  },
  methods: {
    animate() {
      if (!this.isAnimate) {
        this.isAnimate = true
        this.timer = window.setInterval(() => {
          // 控制动画
          this.percentage -= 1 / 10
          if (this.percentage <= 0) {
            clearInterval(this.timer)
            this.percentage = 100
            this.isAnimate = false
          }
        }, this.seconds)
      }
    }
  }
})