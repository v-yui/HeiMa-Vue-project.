# HeiMa-s-Vue-project
##### 跟着b站的黑马教程做的第一个试手小项目，没什么水准。
##### 请使用 ‘npm run bulid’ 命令来执行它。
----------

### 文件如下:

####  main.js-----导入各种包，定义一个Vue实例，使用render把gate.js渲染到index.html中。
#### router.js-----实例化一个路由，导入各种组件并定义不同的path展示对应组件。
#### gate.vue-----主要页面结构——顶栏（mint-ui的heaader）+ 中间放置一个 router-view 用于展示中间的组件 + 底栏（mui的bar-tab；中有4个router-link，切换四个主要界面：home，contact，cart，search）。

#####　home.vue-----第一个主要界面，最上方是轮播图(mint-ui的轮播图组件)，下方六个图标(mui的九宫格组件改造)对应六个模块(新闻，图片，购买，反馈，视频，联系)。
###### 新闻模块
+ news.vue------新闻列表，通过接口从服务器获取数据渲染成列表(mui的组件改造)，每一个item都是一个router-link,，传id值跳转到新闻详情newsInfo。
+ newsInfo.vue-----新闻详情组件，通过接口从服务器获取数据。最下方包含一个评论区组件。
+ newsComment.vue------评论区组件，通过接口从服务器获取评论数据，可加载多页，可发表评论。

###### 图片模块
+ photoList.vue-----第二个主要界面，mui的顶部滑动条改造成分类列表，下面是从接口获取的图片及简介，每个item都是一个router-link，传id值跳转到图片详情photoInfo。
+ photoInfo.vue------图片详情组件，通过接口从服务器获取数据，使用vue-preiew渲染缩略图；最下方包含一个评论区组件(即上面的newsComment.vue)。

###### 购买模块

+ goodsList.vue-----商品列表

##### 下面的尚未完成

##### contact.vue-----第二个主要界面，

##### cart.vue-----第三个主要界面，

##### search.vue-----第四个主要界面，

###### 

