new Vue({
  el: '#app',
  data() {
    return {
      items: [
        {
          index: '1月',
          content: [ '考试说明', '特招简章', '港澳内地招生' ]
        },
        {
          index: '2月',
          content: [ '艺考校考', '特殊招生' ]
        },
        {
          index: '3月',
          content: [ '各省招规', '高考体检', '高职单招' ]
        },
        {
          index: '4月',
          content: [ '招生简章', '专项计划' ]
        },
        { index: '5月', content: '456' },
        {
          index: '6月',
          content: '123'
        },
        { index: '7月', content: '456' },
        {
          index: '8月',
          content: '123'
        },
        { index: '9月', content: '456' },
        { index: '10月', content: '789' },
        { index: '11月', content: '789' },
        { index: '12月', content: '789' }
      ],
      activeItemIndex: 0
    }
  },
  methods: {
    selectItem(index) {
      const top = this.$refs.list.children[index].offsetTop
      this.activeItemIndex = index
      window.anime({
        targets: this.$refs.list,
        scrollTop: top,
        easing: 'easeInBack'
      })
    }
  }
})
