# 群星 万有引力拓展
 - 此模组需要启洋远航DLC支持.
 - 本说明中, 单位统一采用国际单位制.
 - 展示图:
 -  - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/r.png)
 -  - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/r2.PNG)
## 1.单位说明
### 1.1 质量单位
 - 质量单位在此模组中并不重要, 故此不做赘述
### 1.2 长度单位
 - 如图, 这是一个普通的香草要塞, 100米就是两个网格分度, 一格就是50米.
 -  - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/vanilla.png)
## 2.万有引力地图编辑
### 2.1 质点
 - 模组把引力的施力物体抽象成质点, 一个质点会对周围的物体产生引力, 单个质点对投掷物造成得引力的公式如下:
 - F = G * M * m / R^2
 - 其中, 重力常数G约为600000000N·m^2/kg^2, M为质点重量, m为投掷物质量, R为投掷物到质点的距离.
 - * 一般节点质量为1500
#### 2.1.2 质点的生成
 - 在地图中, 可以通过特殊的设备给地图添加质点.
 - 启洋远航DLC添加了3种新装置, 在模组中, 三种设备都可以生成质点, 他们生成的质点重量不一, 下表为不同设备质点的质量.

| 装置     | savename  | 质量   |   
| --------| --------- | ----- |
| 通讯单元  | comms     |  75   |
| 旗帜     | flag      |  200  |
| 浮标     | bouy      |  100  |
 - 一个普通的质点
 - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/point.PNG)
#### 2.1.3 实操: 创建质点地图
##### 2.1.3.1 创建地图
 - 在创建地图时, 确保勾选模组"零重力"与模组"Stellaris 群星 万有引力拓展"
 - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/t2.PNG)
 - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/t3.PNG)
#### 2.1.3.2 创建质点
 - 先拉出来自己想要的地图
 - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/t4.PNG)
 - 然后在你想要添加质点的地方放置表中设备
 - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/t5.PNG)
 - 这个时候保存退出, 一个基本的质点地图就完成了
#### 2.1.3.3 验证
 - 在沙盒模式中打开地图(此地图已包含零重力模组)
 - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/t6.PNG)
 - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/t7.PNG)
 - 可以看见要塞在重力的作用下有了倾斜趋势, 投掷物因为重力原因改变了运动状态
## 3.例题运算(大嘘)
### 3.1 匀速圆周轨道
 - 在地图中,有一质点M,初速度为v_0的炮弹从离质点一定距离R, 垂直于质点与发射点的连线的角度射出, 如果炮弹绕质点做匀速圆周运动, 万有引力常数为G
 - 那么, R的值为多少?
 - - 解: 炮弹做圆周运动, 只有重力给它提供向心力, 既 F_向=m*V^2/R=GmM/R^2
 - - R=GM/v^2
 - 验证环节: 
 - - 创建一个地图, 在地图坐标原点处放置通讯单元, 生成M=75kg的质点, 武器使用群星模组中的相位裂解炮, 初速度6000m/s
 - - 将以上数据代入, 得: R=1250m
 - - 创建一个地图, 按题摆放设备, 记录轨迹:
 - ![1](https://bili-08A04-NQ3.github.io/Forts/stellaris/gravitation/y1.PNG)
 - * 一般质点的标记会偏右一点点, 图中子弹实际在绕质点旋转