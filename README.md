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

<img decoding="async" src="https://github.com/JaterLee/learnRN-note/blob/master/resource/component.png" width="50%">

## 2.helloRN

<img decoding="async" src="https://github.com/JaterLee/learnRN-note/blob/master/resource/list.png" width="50%">

## 3.scrollDemo

<img decoding="async" src="https://github.com/JaterLee/learnRN-note/blob/master/resource/scroll.png" width="50%">

## 4.trolley

<img decoding="async" src="https://github.com/JaterLee/learnRN-note/blob/master/resource/trolley.png" width="50%">

## 5.TicTacToe

<img decoding="async" src="https://github.com/JaterLee/learnRN-note/blob/master/resource/tictactoe.png" width="50%">

## 6.images

<img decoding='async' src='https://github.com/JaterLee/learnRN-note/blob/master/resource/image.png' width='50%'>

## 7.pressable

<img decoding='async' src='https://github.com/JaterLee/learnRN-note/blob/master/resource/pressable.png' width='50%'>

## 8.textInput

<img decoding='async' src='https://github.com/JaterLee/learnRN-note/blob/master/resource/textinput.png' width='50%'>

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

## 4.UseEffect

项目中会在 `useEffect`函数中获取后端数据然后更新状态刷新 UI,这里需要注意的是`useEffect`在组件`mount`时执行,也会在组件更新时执行.因为我们每一次请求数据之后都会设置本地状态触发组件更新,因此会触发`useEffect`再次执行,这就出现了无限循环的情况.

我们只想在组件`mount`时请求数据,就可以传递一个空数组作为`useEffect`的第二个参数,这样就可以避免组件更新执行`useEffect`,只会在组件`mount`时执行

```
 useEffect(() => {
    setRequestStatus(RequestStatus.PENDING);

    fetch('https://6389bee14eccb986e8990c52.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then((products: Products) => {
        setRequestStatus(RequestStatus.SUCCESS);
        setProducts(products);
      })
      .catch(() => {
        setRequestStatus(RequestStatus.PENDING);
      });
  }, []);
```

## 5.UseState

`useState`函数的入参是状态的默认值,函数的返回值是状态和更新该状态的函数.

第一次调用`useState`函数后,就生成了默认值是空数组[]的商品表单状态 `products`,以及设置该状态的函数 `setProducts`.

第二次调用`useState`函数后生成了默认值是字符串`'IDLE'`的请求状态`requestStatus`, 以及设置该状态的函数焦作`setRequestStatus`.

use 开头的钩子函数都要写在组件的顶部,把 JSX 都写在函数组件的最后面,并使⽤ `eslint-plugin-reacthooks` 插件来保障 Hook 规则的会被正确执⾏。

如果有需要在 setState 回调中做一些事情,可以在`useEffect`里面处理

## 6.让 View 实现 onPress

we may activate the click onPress event on the View component by using its onStartShouldSetResponder Prop.

```
<View>
      onStartShouldSetResponder={() => {
        console.log(1111);
        return true;
      }}
</View>

```

## 7.打包编译

`npx react-native bundle --entry-file index.js --dev false --minify false --bundle-output ./build/index.bundle --assets-dest ./build`

这段打包（bundle）命令的意思是，以根⽬录的 index.tsx ⽂件为⼊⼝（entry file），产出
release（dev=false）环境的包，这个包不⽤压缩（minify=false），并将这个包命名为
./build/index.bundle，同时将静态资源编译产物放到 ./build ⽬录。

```
./build
├── assets
│ └── src
│ └── mutiImages
│ └── icon.jpg
└── index.bundle
```

## 8.加载宿主 app 内的资源图片

```
      <Image source={{uri: 'app_icon.png'}} style={{width: 100, height: 100}} />
```

这里遇到一个问题那就是这么方式加载图片资源,地址是~/xxxx.app/app_icon.png,如果是放在 xcasset 内的图片实际在打包后是合并在 asset.car 文件中的,这种图片是加载不到的

而且加载宿主 app 内的图片是不推荐的!复用收益抵不上复用带来的安全风险

## 9.私有函数 unstable_onChangeSync 同步更新

`onChangeText`异步更新情况下，JavaScript 线程和 UI 主线程是独立运行的，此时即便 JavaScript 线程卡了 1s，主线程依旧可以正常输入文字。但`unstable_onChangeSync`同步更新的情况下，从输入文字到展示文字会有 1s 的延迟， JavaScript 线程有 1s 的阻塞，UI 主线程也会卡死 1s。

```
/**
   * DANGER: this API is not stable and will change in the future.
   *
   * Callback will be called on the main thread and may result in dropped frames.
   * Callback that is called when the text input's text changes.
   *
   * @platform ios
   */
  unstable_onChangeSync?: ?(e: ChangeEvent) => mixed,
```

## 10.Text

```
color:字体颜色

fontFamily:字体族

fontSize:字体大小

fontStyle:字体样式,正常,倾斜，值为enum('normal','italic')

fontWeight:字体粗细，值为enum('normal','bold','100','200'...,'900')

letterSpacing:字符间隔

lineHeight:行高

textAlign:字体对齐方式,值为enum('auto','left','right','center','justify')

textDecorationColor:貌似没效果，修饰的线的颜色

textDecorationLine:貌似没效果，字体修饰，上划线，下划线，删除线，无修饰，值为enum("none",'underline','line-through','underline line-through')

textDecorationStyle:enum("solid",'double','dotted','dashed')貌似没效果，修饰的线的类型

writingDirection:enum("auto",'ltr','rtl')不知道什么属性，写作方向？从左到右？从右到左？
```

## 11.TextInput

```
caretHidden​ 如果为 true，则隐藏光标。默认值为 false
```

## 12.Style

```
position:定位：相对定位(absolute)，绝对定位(relative) 默认情况下使用的是相对定位

marginVertical:相当于同时设置marginTop和marginBottom

marginHorizontal:相当于同时设置marginLeft和marginRight

margin:相当于同时设置四个

padding:相当于同时设置四个

paddingVertical:相当于同时设置paddingTop和paddingBottom

paddingHorizontal:相当于同时设置paddingLeft和paddingRight

```

## 13.Flex

```
flex:number

flexDirection: enum('row','column','row-reverse','column-reverse') 属性决定主轴的方向（即项目的排列方向）。

flexWrap:enum('wrap','nowrap','wrap-reverse') 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

alignItems:enum('flex-start','flex-end','center','stretch') 属性定义项目在交叉轴上如何对齐。

alignSelf:enum('auto','flex-start','flex-end','center','stretch') 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖

justifyContent:enum('flex-start','flex-end','center','space-between','space-around') 属性定义了项目在主轴上的对齐方式。
```

## 14.String

```
padEnd() 方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

```

# 疑难杂症

## RN 一直卡在 muti podfile

![image](https://github.com/JaterLee/learnRN-note/blob/master/resource/InstallinoCocoaPods.jpg)

> 依赖 down 不下来, 科学上网破之

## ERROR Warning: Each child in a list should have a unique "key" prop.

基本都是因为在循环生成多个组件的时候，没有给组件加上 key 引起的，所以报错警告。需要循环生成多个组件中，加上 key 值（唯一值）那么就不会报错了。

```
function Square(index: number) {
  return (
    <View
      style={{width: 100, height: 100, borderWidth: 1, borderColor: 'black'}}
      key={index}>
      <Button
        title="O"
        onPress={() => {
          console.log(111);
        }}></Button>
    </View>
  );
}
```

## image source require 入参一定要字面量函数吗? 不能用变量吗?

```
const path = './icon.png';
const staticImage = require(path);
```

看教程上说不能这么写,但是我这么写好像也没什么问题,这个问题存疑!

# Tips

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

### 修改 git 提交用户和 email

```
git config --global user.name "JaterLee"
git config --global user.email "lijunzhuozoom@gmail.com"
```

### 正则

```
\D：表示非数字

\w：表示一个字 [0－9a-zA-Z_]
\W：表示除[0－9a-zA-Z_]之外的字符

\s：表示一个空白字符（空格，tab，换页符等）
\S：表示一个非空白字符

```
