(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{471:function(a,v,_){"use strict";_.r(v);var t=_(19),i=Object(t.a)({},(function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"数据结构与算法基础-大题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据结构与算法基础-大题"}},[a._v("#")]),a._v(" 数据结构与算法基础（大题）")]),a._v(" "),_("h2",{attrs:{id:"数组与矩阵"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数组与矩阵"}},[a._v("#")]),a._v(" 数组与矩阵（++）")]),a._v(" "),_("h3",{attrs:{id:"数组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),_("ul",[_("li",[a._v("二维数组a[m] [n]的存储地址（按行）计算：a+( i × n + j )×len")]),a._v(" "),_("li",[a._v("二维数组a[m] [n]的存储地址（按列，存完一列存第二列，一般不会这样存）计算：a+( j × m + i )×len")]),a._v(" "),_("li",[a._v("例题：已知5行5列的二维数组a中的各元素占两个字节，求元素a[2] [3]按行优先存储的存储地址\n"),_("ul",[_("li",[a._v("a+(2×5+3)×2 = a+26")])])])]),a._v(" "),_("h3",{attrs:{id:"稀疏矩阵"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#稀疏矩阵"}},[a._v("#")]),a._v(" 稀疏矩阵")]),a._v(" "),_("ul",[_("li",[a._v("选择题用代入法")])]),a._v(" "),_("h2",{attrs:{id:"线性表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线性表"}},[a._v("#")]),a._v(" 线性表（+++++）")]),a._v(" "),_("h3",{attrs:{id:"顺序表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#顺序表"}},[a._v("#")]),a._v(" 顺序表")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("顺序表与链表存储对比")]),a._v(" "),_("p",[_("img",{attrs:{src:"/ruankao.assets/image-20210422213121354.png",alt:"image-20210422213121354"}})])]),a._v(" "),_("li",[_("p",[a._v("队列和栈")]),a._v(" "),_("ul",[_("li",[a._v("循环队列\n"),_("ul",[_("li",[a._v("队空条件：head = tail（头碰到尾）")]),a._v(" "),_("li",[a._v("队满条件：head = (tail + 1) % n(总长度)")])])])])])]),a._v(" "),_("h3",{attrs:{id:"链表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[a._v("#")]),a._v(" 链表")]),a._v(" "),_("ul",[_("li",[a._v("单链表")]),a._v(" "),_("li",[a._v("循环链表")]),a._v(" "),_("li",[a._v("双向链表")])]),a._v(" "),_("h2",{attrs:{id:"广义表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#广义表"}},[a._v("#")]),a._v(" 广义表（++）")]),a._v(" "),_("ul",[_("li",[a._v("广义表是n个表元素组成的有限序列，是线性表的推广")]),a._v(" "),_("li",[a._v("基本运算：取表头head(LS)和取表尾tail(LS)\n"),_("ul",[_("li",[a._v("若有：LS1=( A, (B, C), (D, E))")]),a._v(" "),_("li",[a._v("head(LS1)=A")]),a._v(" "),_("li",[a._v("tail(LS1)=((B, C), (D, E))")])])]),a._v(" "),_("li",[a._v("例1：有广义表LS1=( A, (B, C), (D, E))，则其长度为？深度为？\n"),_("ul",[_("li",[a._v("长度：元素个数--3，深度：层数--2")])])]),a._v(" "),_("li",[a._v("例2：有广义表LS1=( A, (B, C), (D, E))，要将其中的b字母取出，操作为？\n"),_("ul",[_("li",[a._v("head( head( tail(LS1)))")])])])]),a._v(" "),_("h2",{attrs:{id:"树与二叉树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#树与二叉树"}},[a._v("#")]),a._v(" 树与二叉树（+++++）")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("结点的度")])]),a._v(" "),_("li",[_("p",[a._v("多少个向下分叉就是多少度")])]),a._v(" "),_("li",[_("p",[a._v("树的度")]),a._v(" "),_("ul",[_("li",[a._v("所有节点的最大的度")])])]),a._v(" "),_("li",[_("p",[a._v("叶子结点")]),a._v(" "),_("ul",[_("li",[a._v("没有孩子的节点，度为零的节点")])])]),a._v(" "),_("li",[_("p",[a._v("分支结点")]),a._v(" "),_("ul",[_("li",[a._v("度不为零的结点")])])]),a._v(" "),_("li",[_("p",[a._v("内部结点")]),a._v(" "),_("ul",[_("li",[a._v("除了叶子结点和根结点的结点")])])]),a._v(" "),_("li",[_("p",[a._v("父结点")]),a._v(" "),_("ul",[_("li",[a._v("有孩子的结点")])])]),a._v(" "),_("li",[_("p",[a._v("子结点")]),a._v(" "),_("ul",[_("li",[a._v("有父结点的结点")])])]),a._v(" "),_("li",[_("p",[a._v("兄弟结点")]),a._v(" "),_("ul",[_("li",[a._v("有同一个父节点的结点")])])]),a._v(" "),_("li",[_("p",[a._v("层次")]),a._v(" "),_("ul",[_("li",[a._v("数的深度")])])]),a._v(" "),_("li",[_("p",[a._v("满二叉树")]),a._v(" "),_("ul",[_("li",[a._v("除了子结点所有的结点的度都是2")])])]),a._v(" "),_("li",[_("p",[a._v("完全二叉树")]),a._v(" "),_("ul",[_("li",[a._v("在满二叉树的基础上，最后一层结点全部靠左")])]),a._v(" "),_("p",[_("img",{attrs:{src:"/ruankao.assets/image-20210422222854029.png",alt:"image-20210422222854029"}})])]),a._v(" "),_("li",[_("p",[a._v("对任何一颗二叉树，如果其叶子结点数为n0，度为2的结点数为n2，则n0 = n2 + 1")])]),a._v(" "),_("li",[_("p",[a._v("前序遍历："),_("strong",[a._v("根左右")])])]),a._v(" "),_("li",[_("p",[a._v("中序遍历："),_("strong",[a._v("左根右")])])]),a._v(" "),_("li",[_("p",[a._v("后续遍历："),_("strong",[a._v("左右根")])])]),a._v(" "),_("li",[_("p",[a._v("层次遍历")])]),a._v(" "),_("li",[_("p",[a._v("反向构造二叉树")])]),a._v(" "),_("li",[_("p",[a._v("树转二叉树")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("兄弟连线")])]),a._v(" "),_("li",[_("p",[a._v("只保留结点与第一个孩子的线")]),a._v(" "),_("p",[_("img",{attrs:{src:"/ruankao.assets/image-20210422225540364.png",alt:"image-20210422225540364"}})])])])]),a._v(" "),_("li",[_("p",[a._v("查找二叉树")]),a._v(" "),_("ul",[_("li",[a._v("左孩子小于根")]),a._v(" "),_("li",[a._v("右孩子大于根")]),a._v(" "),_("li",[a._v("插入结点")]),a._v(" "),_("li",[a._v("删除结点：叶子结点直接删，有一个子结点则将子结点与要删除的父节点相连，有两个子结点则需要在左子树上用中序遍历找到最大数结点s替换将要删除的结点，然后删除结点s，结点s必然属于前两种情况")])])]),a._v(" "),_("li",[_("p",[a._v("哈夫曼树（最优二叉树）")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210422230833283.png",alt:"image-20210422230833283"}}),a._v(" "),_("ul",[_("li",[_("strong",[a._v("注意：哈夫曼树并不唯一，但带权路径长度一定是相同的")])]),a._v(" "),_("li",[a._v("找出字符中频率最小的两个数，用比如"),_("strong",[a._v("小的在左边，大的在右边")]),a._v("的形式组成二叉树。在"),_("strong",[a._v("频率表中删除此次找到的两个数")]),a._v("，并"),_("strong",[a._v("加入两个数的频率和")]),a._v("，然后重复此步")]),a._v(" "),_("li",[a._v("左0右1编码：\n"),_("ul",[_("li",[a._v("例如5：00000，29：01")])])])])]),a._v(" "),_("li",[_("p",[a._v("线索二叉树")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("若结点的左子树为空，则该结点的左孩子指针指向其前驱结点")])]),a._v(" "),_("li",[_("p",[a._v("若结点的右子树为空，则该结点的右孩子指针指向其后继结点")])]),a._v(" "),_("li",[_("p",[a._v("根据遍历路径来设置前后线索")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210422231206432.png",alt:"image-20210422231206432"}}),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210422231228068.png",alt:"image-20210422231228068"}})])])]),a._v(" "),_("li",[_("p",[a._v("平衡二叉树")]),a._v(" "),_("ul",[_("li",[a._v("任意结点左右子树深度相差不超过1")])])])]),a._v(" "),_("h2",{attrs:{id:"图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图"}},[a._v("#")]),a._v(" 图（++）")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("完全图")]),a._v(" "),_("ul",[_("li",[a._v("在无向图中，若每对顶点之间都有一条边相连，则称该图为完全图")]),a._v(" "),_("li",[a._v("在有向图中，若每对顶点之间都有二条有向边相互连接，则称该图为完全图")])])]),a._v(" "),_("li",[_("p",[a._v("图的存储-邻接矩阵")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423193542993.png",alt:"image-20210423193542993"}})]),a._v(" "),_("li",[_("p",[a._v("图的存储-邻接表")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423194749123.png",alt:"image-20210423194749123"}})]),a._v(" "),_("li",[_("p",[a._v("图的遍历")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423194845301.png",alt:"image-20210423194845301"}})]),a._v(" "),_("li",[_("p",[a._v("图-拓扑排序")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423195037392.png",alt:"image-20210423195037392"}})]),a._v(" "),_("li",[_("p",[a._v("图的最小生成树")]),a._v(" "),_("ul",[_("li",[a._v("普里姆算法\n"),_("ul",[_("li",[a._v("从"),_("strong",[a._v("一个结点出发，找出最小的距离")]),a._v("，然后跟选到的结点"),_("strong",[a._v("看作整体")]),a._v("，继续找出"),_("strong",[a._v("最小的距离")]),a._v("，以此类推")])])]),a._v(" "),_("li",[a._v("克鲁斯卡尔算法\n"),_("ul",[_("li",[_("strong",[a._v("每次从所有图中最短的边")]),a._v("，注意"),_("strong",[a._v("别形成环路")])])])])])])]),a._v(" "),_("h2",{attrs:{id:"排序与查找"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#排序与查找"}},[a._v("#")]),a._v(" 排序与查找（+++++）")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("顺序查找")])]),a._v(" "),_("li",[_("p",[a._v("二分查找")])]),a._v(" "),_("li",[_("p",[a._v("散列表")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423201442707.png",alt:"image-20210423201442707"}})]),a._v(" "),_("li",[_("p",[a._v("排序的概念")]),a._v(" "),_("ul",[_("li",[a._v("稳定与不稳定排序\n"),_("ul",[_("li",[a._v("不稳定排序：如果两个值相同，他们可能会互换位置")])])]),a._v(" "),_("li",[a._v("内排序与外排序")])])]),a._v(" "),_("li",[_("p",[a._v("排序方法分类")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("插入类排序")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("直接插入排序，希尔排序")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423202630758.png",alt:"image-20210423202630758"}})])])]),a._v(" "),_("li",[_("p",[a._v("交换类排序")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("冒泡排序，快速排序")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423205023865.png",alt:"image-20210423205023865"}})])])]),a._v(" "),_("li",[_("p",[a._v("选择类排序")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("简单选择排序，堆排序")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423203347790.png",alt:"image-20210423203347790"}}),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423203718702.png",alt:"image-20210423203718702"}}),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423204116120.png",alt:"image-20210423204116120"}})])])]),a._v(" "),_("li",[_("p",[a._v("归并排序")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423205827343.png",alt:"image-20210423205827343"}}),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423205855383.png",alt:"image-20210423205855383"}}),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423205918423.png",alt:"image-20210423205918423"}})]),a._v(" "),_("li",[_("p",[a._v("基数排序")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423210019614.png",alt:"image-20210423210019614"}})])])])]),a._v(" "),_("h2",{attrs:{id:"时间复杂度与空间复杂度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度与空间复杂度"}},[a._v("#")]),a._v(" 时间复杂度与空间复杂度（+++++）")]),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423200750463.png",alt:"image-20210423200750463"}}),a._v(" "),_("img",{staticStyle:{zoom:"80%"},attrs:{src:"/ruankao.assets/image-20210423210256874.png",alt:"image-20210423210256874"}}),a._v(" "),_("h2",{attrs:{id:"算法基础及常见的算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#算法基础及常见的算法"}},[a._v("#")]),a._v(" 算法基础及常见的算法（+++++）")]),a._v(" "),_("ul",[_("li",[a._v("算法的特性\n"),_("ul",[_("li",[a._v("有穷性：执行有穷步之后结束")]),a._v(" "),_("li",[a._v("确定性：算法中每一条指令都必须有确切的含义，不能含糊不清")]),a._v(" "),_("li",[a._v("输入必须（>=0）")]),a._v(" "),_("li",[a._v("输出必须（>=1）")]),a._v(" "),_("li",[a._v("有效性：算法的每个步骤都能有效执行并能得到确定的结果，例如a=0，b/a就无效")])])])])])}),[],!1,null,null,null);v.default=i.exports}}]);