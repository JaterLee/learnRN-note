本项目基于 React Native 0.70.5 版本开发，并通过命令或配置的方式开启了新架构。

启动本项目之前，请先按照[官方文档搭建环境](https://reactnative.cn/docs/environment-setup)。

# 启动方法

```
$ git clone git@github.com:JaterLee/learnRN-note.git
$ cd react-native-classroom
$ yarn install
```

## 运行 iOS

需要 MacOS 和 Xcode

```
# 安装 iOS 依赖
$ cd ios && RCT_NEW_ARCH_ENABLED=1 pod install && cd ../

# 在模拟器安装 App
$ yarn ios
```

# 项目介绍

## 1.component

![image](https://github.com/JaterLee/learnRN-note/resource/component.png)

## 2.helloRN

![image](https://github.com/JaterLee/learnRN-note/resource/list.png)

## 3.scrollDemo

![image](https://github.com/JaterLee/learnRN-note/resource/scroll.png)

## 4.trolley

![image](https://github.com/JaterLee/learnRN-note/resource/trolley.png)

# 知识点

## 1.RN 函数参数是否带大括号

带大括号是指传递一个参数，参数类型为对象，里面有三个属性 children, authority, noMatch，不带大括号就是传递三个参数，这里的大括号不是块级作用域，就是单纯的表示一个对象

## 2.统一文件格式

建议使用 ts tsx

## 3.JavaScript reduce() 方法

```
var numbers = [65, 44, 12, 4];

function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}
```

reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

reduce() 可以作为一个高阶函数，用于函数的 compose。

注意: reduce() 对于空数组是不会执行回调函数的。

# 疑难杂症

## RN 一直卡在 muti podfile

![image](https://github.com/JaterLee/learnRN-note/resource/InstallinoCocoaPods.jpg)

> 依赖 down 不下来, 科学上网破之

## RN 命令

### 初始化 RN 项目

`npx react-native init AwesomeProject`

### 编译并运行 RN 项目

```cd AwesomeProject
yarn ios
或者
yarn react-native run-ios
```

### 运行指定模拟器

iOS

```
react-native run-ios --simulator "iPhone 7 Plus”
react-native run-ios --device "XXX"(xxx代表真机设备名字)真机运行是可能会用到ios-deploy
查看当前可用的所有设备/模拟器列表：xcrun simctl list devices
```

Android

```
查看当前可用的所有设备/模拟器列表：adb devices提示：
(Android 5.0及以上)可以尝试使用adb reverse命令，
运行adb reverse tcp:8081 tcp:8081，
不需要更多配置，你就可以使用Reload JS和其它的开发选项了。
```
