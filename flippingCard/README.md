# 使用HTML+CSS 实现翻牌效果 

此项目只涉及 html 和 css， main.js 只因配合 parcel 所需，如果不使用parcel则可以不用这个文件。

css涉及知识点:
1. css3伪类选择器 ':hover'
    - +: 单选+右边的兄弟元素;
    - ~: 选择~后所有兄弟元素;
    - checked: 只适用于单选和复选框;
2. 位置：position[relative,absolute]
3. 动画相关：transform、transition、rotateY、perspective
    - perspective：透视，指看到目标的距离;
4. 盒子显示相关：backface-visibility(盒子的背面是否可见)
5. 布局：flex

思路：

1. 两个盒子（cover、back）使用 position: absolute;使其重叠;

2. 使用backface-visibility将两个盒子的背面隐藏;

3. 使用rotateY将两个盒子进行旋转;cover正向旋转，back逆向旋转;

4. 使用transition使盒子产生效果动画; `hover` 作用于容器盒子，但效果作用于内部盒子;

5. 使用容器盒子设置perspective属性，使3d旋转更符合视觉效果;

总结：

合理使用阴影，可以使字体以及盒子更为立体。