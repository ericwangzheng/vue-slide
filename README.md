# vue-slide

> swiper切换页面，使用vue-touch

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## config 
* router
  * index.js 

```js
 {
      path: '/tab1', //路径
      name: 'tab1',//路由名
      tabBar: true,//是否为tabBar
      icon: '',//图片图标（.png）
      iconCls: '',//font-awesome 图标
      component: Tab1,
    },
```
