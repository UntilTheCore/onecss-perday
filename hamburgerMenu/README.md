# 使用HTML+CSS 制作动态Hamburger Menu

此项目只涉及 html 和 css， main.js 只因配合 parcel 所需，如果不使用parcel则可以不用这个文件。

css涉及知识点:
1. css3选择器 '+' 、'~'、':checked'
    - +: 单选+右边的兄弟元素;
    - ~: 选择~后所有兄弟元素;
    - checked: 只适用于单选和复选框;
2. 动画相关：transform、transition、scaleY、opacity

总结：
1. 想要有一个较为优美的动画效果，则需要控制好动画时机;

2. 利用了只有input标签的'radio'和'checkbox'才有的 `:checked` 功能实现只用css完成点击切换功能;

3. 仅利用`:checked` 还不够，再利用 label 标签与 input 标签的关联性，使用 id 进行关联，可实现在其他标签元素中也能实现点击切换效果;