# BirdChain鸟链｜图片型鸟类影像版权与创作平台｜VibeCoding最终增强版开发约束文档

> 文件用途：用于VibeCoding、Trae、Cursor、AI前端开发工具生成BirdChain鸟链静态网站与平台前台页面。  
> 当前目标：不是只做一个官网，而是做一个可演示、可传播、可继续接后端的平台级静态原型。  
> 必须实现：所有栏目、页面、子页面、实例数据、筛选搜索、收藏点赞、上传模拟、授权模拟、购物车模拟、AI创作模拟、地图筛选、用户中心状态更新。  
> 开发边界：不接真实支付、不接真实区块链、不做真实后端，但所有交互都必须基于本地JSON数据和localStorage完成可操作的实例数据交互。

---

## 0.最高优先级结论

BirdChain不是传统鸟类图库，也不是普通Web3概念站，更不是只展示愿景的企业官网。

BirdChain应被设计成：

> **全球鸟类影像版权、AI视觉创作、深度专题、全球地方站、摄影旅行、儿童自然教育、创作周边与轻量协作社区的图片型内容平台。**

一句话定位：

> **BirdChain是面向全球鸟类影像的版权存证、授权交易、AI视觉创作与生态文化消费平台。**

用户心智：

- 对摄影师：上传作品、获得版权凭证、授权变现、参加专题和活动。
- 对内容使用方：购买合法、可追溯、可商用的鸟类影像授权。
- 对AI创作者：基于授权素材做鸟类视觉创作、封面、海报、科普卡和周边设计。
- 对学校/文旅/博物馆：获得可用于研学、展览、文旅传播和自然教育的内容资源。
- 对大众用户：浏览作品、收藏图片、阅读深度专题、购买周边、参加活动、报名摄影旅行。

---

## 1.中文语境与文案强约束

所有页面、栏目、按钮、卡片、表单、弹窗、SEO标题、图片alt、占位文本、错误提示、空状态提示，必须优先使用中文互联网产品语境。

必须遵守：

- 中文为主，英文只作为品牌名、英文副标题、技术名词、国际化辅助信息。
- 中文句子中出现英文、数字、品牌名、技术词时，英文和数字前后不要加空格。
- 正确写法：`BirdChain平台`、`AI创作`、`Web3内容生态`、`VibeCoding开发`、`8K影像`、`AR/VR博物馆`、`CopyrightMarket版权市场`。
- 错误写法：`BirdChain 平台`、`AI 创作`、`Web3 内容生态`、`Vibe Coding 开发`、`8K 影像`、`AR / VR 博物馆`。
- 页面中不要使用直译腔，不要出现空泛企业站表达，如“赋能未来”“无限可能”“生态共赢”堆砌。
- 栏目命名必须用户可理解，例如：首页、发现/灵感、版权市场、专题/深度分析、全球地方站、鸟类视觉实验室、创作周边、赛事/活动、摄影旅行、自然教育、AR/VR鸟类博物馆、社区、保护行动、创作者中心。
- 英文副标题可以保留，但只作为弱层级辅助，不要抢主标题权重。

---

## 2.必须采用的整体风格

### 2.1平台风格关键词

- 图片型平台
- 作品流
- 瀑布流
- 高密度视觉内容
- 自然地理式深度专题
- 站酷式创作者社区浏览体验
- 高端鸟类影像版权市场
- 轻量化社区协作
- 低饱和自然色
- 深蓝金色品牌感
- 卡片式内容组织
- 编辑精选与榜单驱动
- 会员贡献与创作者中心驱动

### 2.2禁止的风格

- 禁止做成普通区块链官网。
- 禁止只做几屏Banner和口号。
- 禁止大面积纯白背景。
- 禁止用emoji做正式图标。
- 禁止只写静态文字、不做交互。
- 禁止按钮点击无反馈。
- 禁止筛选项无法真正筛选数据。
- 禁止作品卡、商品卡、专题卡、地方站卡为空壳。
- 禁止页面只有一级栏目，没有子页面。
- 禁止移动端只是桌面端缩小。

---

## 3.Logo与品牌视觉约束

### 3.1Logo使用

Logo以抽象鸟形为核心，包含鸟形、羽翼、环形轨迹、深蓝、暖金、浅灰等元素。

页面应准备以下Logo形态：

- `logo-full.svg`：图形+中文鸟链+英文BirdChain。
- `logo-mark.svg`：仅鸟形图标。
- `logo-dark.svg`：适合深色背景。
- `logo-light.svg`：适合浅色背景。
- `favicon.svg`：浏览器小图标。

### 3.2品牌色

```css
:root{
  --brand-primary:#16395C;
  --brand-primary-dark:#0F2E4A;
  --brand-primary-deep:#071B2D;
  --brand-accent:#C7A56D;
  --brand-accent-dark:#B89459;
  --brand-accent-soft:#E8D7B6;
  --bg-main:#F7F5F2;
  --bg-soft:#F1EEE8;
  --bg-card:#FCFBF8;
  --line-soft:#E5E0D8;
  --neutral-soft:#C8C3BB;
  --text-main:#16395C;
  --text-strong:#071B2D;
  --text-secondary:#6E6A63;
  --success:#2F7D51;
  --warning:#B89459;
  --danger:#B45A4A;
}

[data-theme="dark"]{
  --bg-main:#071B2D;
  --bg-soft:#0B243A;
  --bg-card:#102F4B;
  --line-soft:#254863;
  --text-main:#F7F5F2;
  --text-strong:#FFFFFF;
  --text-secondary:#B9C4CB;
  --brand-accent:#D7B978;
}
```

### 3.3图片风格

所有图片必须统一为以下方向：

- 高质量鸟类摄影。
- 栖息地大图。
- 鸟类行为瞬间。
- 鸟类纹样与插画。
- AI视觉生成图。
- 周边商品场景图。
- 地方生态站场景图。
- 专题封面图。

图片比例：

- Hero：`16:7`或`21:9`。
- 瀑布流卡片：`1:1`、`4:5`、`3:2`、`16:9`混排。
- 作品详情：主图`16:10`。
- 商品详情：`1:1`与生活方式横图组合。
- 专题封面：`21:9`。
- 地方站卡片：`4:3`。

---

## 4.顶层栏目与导航结构

### 4.1顶部Header主导航

Header必须独立组件化，所有页面统一调用，不允许写死在单页。

桌面端主导航：

1. 首页
2. 发现/灵感
3. 版权市场
4. 专题/深度分析
5. 全球地方站
6. 鸟类视觉实验室
7. 创作周边
8. 更多

“更多”下拉菜单必须包含：

- 赛事/活动
- 摄影旅行
- 自然教育
- AR/VR鸟类博物馆
- 摄影器材
- 社区
- 保护行动
- 关于BirdChain

Header右侧必须包含：

- 全站搜索框
- 上传作品按钮
- 明暗色切换
- 语言切换
- 消息图标
- 收藏/购物车入口
- 用户头像/登录入口

### 4.2底部Footer全栏目导航

Footer必须独立组件化，所有页面统一调用。

Footer分组：

- 平台：发现/灵感、版权市场、专题/深度分析、全球地方站
- 创作：鸟类视觉实验室、上传作品、创作者中心、创作周边
- 内容：自然教育、AR/VR鸟类博物馆、图书画册、鸟类有声读物
- 活动：赛事/活动、摄影旅行、地方站活动、保护行动
- 资源：版权指南、授权说明、API数据服务、帮助中心
- 关于：关于BirdChain、加入我们、合作伙伴、联系我们
- 法律：服务条款、隐私政策、版权声明、侵权投诉

Footer必须包含订阅表单，并能将邮箱保存到localStorage中的`newsletterSubscribers`。

---

## 5.必须生成的页面与子页面总清单

开发时必须生成以下页面，不得只做一级页面。

```txt
/index.html
/search.html

/discover/index.html
/discover/work-detail.html
/discover/collection-detail.html
/discover/ranking.html

/market/index.html
/market/work-detail.html
/market/license-checkout.html
/market/certificate-detail.html
/market/license-guide.html
/market/infringement-report.html

/topics/index.html
/topics/topic-detail.html
/topics/article-detail.html
/topics/columnists.html
/topics/write-article.html

/stations/index.html
/stations/station-detail.html
/stations/species-detail.html
/stations/observation-point.html
/stations/create-station.html

/lab/index.html
/lab/create.html
/lab/gallery.html
/lab/work-detail.html
/lab/history.html

/merch/index.html
/merch/product-detail.html
/merch/drop-detail.html
/merch/cart.html
/merch/checkout.html
/merch/audio-book-detail.html

/events/index.html
/events/event-detail.html
/events/submit.html
/events/winners.html

/travel/index.html
/travel/route-detail.html
/travel/booking.html

/education/index.html
/education/course-detail.html
/education/school-program.html
/education/kids-audio.html

/museum/index.html
/museum/exhibit-detail.html
/museum/vr-hall.html

/gear/index.html
/gear/product-detail.html
/gear/review-detail.html

/community/index.html
/community/post-detail.html
/community/group-detail.html

/protection/index.html
/protection/project-detail.html
/protection/donation.html

/creator/index.html
/creator/profile.html
/creator/upload.html
/creator/certificates.html
/creator/earnings.html
/creator/tasks.html
/creator/articles.html

/about/index.html
/about/contact.html
/about/partners.html
```

如果技术上采用React、Vue、Astro等框架，也必须对应生成同等路由和页面组件。

---

## 6.首页详细要求

### 6.1页面目标

首页不是企业介绍页，而是平台入口页。用户进入后必须立刻感知：这里有大量鸟类作品、创作者、版权交易、专题、地方站、AI创作、周边商品。

### 6.2首页模块

必须包含：

1. 大图Hero轮播
   - 3张鸟类摄影大图。
   - 每张图有标题、作者、国家/地区、浏览数据。
   - 轮播点和左右切换按钮可点击。
   - 数据来自`heroSlides.json`。

2. 快捷分类入口
   - 野生鸟类
   - 鸟类肖像
   - 飞羽瞬间
   - 栖息地
   - 鸟类行为
   - 城市鸟类
   - 濒危保护
   - 鸟类文化
   - 全部分类

3. 热门作品
   - 6-8张作品卡。
   - 支持点赞、收藏、进入详情。
   - 点赞和收藏状态保存到localStorage。

4. 推荐摄影师
   - 摄影师头像、国家、作品数、粉丝数。
   - 支持关注/取消关注。
   - 关注状态保存到localStorage。

5. 地方站入口
   - 展示4个地方站：中国站、巴西站、肯尼亚站、挪威站。
   - 点击进入地方站详情页。

6. 专题/深度分析入口
   - 至少3个专题卡。
   - 展示标题、封面、阅读量、作者。

7. 鸟类视觉实验室入口
   - 展示AI生成作品图。
   - 按钮“开始创作”跳转`/lab/create.html`。

8. 创作周边入口
   - 展示包袋、伞、画册、儿童有声读物、装饰画等商品。
   - 按钮“进入创作周边”跳转`/merch/index.html`。

9. Footer
   - 完整导航、订阅表单、社交入口。

### 6.3首页交互

- Hero轮播可点击切换。
- 作品卡点击进入`work-detail.html?id=work001`。
- 点赞增加数字，再次点击取消。
- 收藏后加入`favoriteWorks`。
- 关注摄影师后按钮变成“已关注”。
- 搜索框输入关键词后跳转`/search.html?q=关键词`。
- 订阅邮箱后出现成功提示，并写入localStorage。

---

## 7.发现/灵感栏目

### 7.1栏目定位

这是站酷式作品流和创作灵感入口，是整个平台的视觉流量核心。

### 7.2页面`/discover/index.html`

必须包含：

- 顶部标题：发现/灵感
- 分类Tabs：推荐、摄影、数字艺术、插画、视频、AI创作、设计、手工艺、知识科普
- 二级筛选：野生鸟类、宠物鸟、鸟类生态、鸟与自然、鸟类行为、节日主题、更多
- 排序：最新发布、最多收藏、最多浏览、编辑精选
- 瀑布流作品卡
- 右侧趋势榜
- 精选合集
- 上传作品CTA

### 7.3子页面

#### `/discover/work-detail.html`

作品详情页必须包含：

- 大图展示
- 标题
- 作者信息
- 鸟种标签
- 拍摄地
- EXIF信息
- 浏览、点赞、收藏、评论
- 版权状态
- 推荐相似作品
- 下载/授权入口

#### `/discover/collection-detail.html`

合集详情页必须包含：

- 合集封面
- 合集介绍
- 创建者
- 作品列表
- 关注合集按钮

#### `/discover/ranking.html`

榜单页必须包含：

- 7日榜
- 30日榜
- 总榜
- 分类榜
- 摄影师榜
- AI创作榜

### 7.4交互

- 筛选必须真实过滤`works.json`。
- 排序必须真实改变作品顺序。
- 切换瀑布流/网格视图必须改变布局。
- 收藏、点赞、评论必须保存到localStorage。
- 作品详情页评论提交后必须新增到页面中。

---

## 8.版权市场栏目

### 8.1栏目定位

版权市场是平台核心变现入口。用户不是下载图片，而是购买具体用途的授权。

### 8.2页面`/market/index.html`

必须包含：

- 标题：鸟类影像版权市场
- 说明：每一张作品都可生成授权凭证，保护创作者权益，释放影像价值。
- 搜索：鸟种、摄影师、作品ID、关键词。
- 左侧筛选：
  - 使用场景：出版发行、广告营销、媒体报道、教育科研、文创产品、个人用途、AI二创、AI训练
  - 版权类型：标准授权、扩展授权、独家授权、公益授权
  - 鸟类物种：翠鸟、白鹭、鹰、蜂鸟、猫头鹰、鹤、鹦鹉
  - 价格区间
  - 地区
  - 图片方向：横图、竖图、方图、透明PNG、插画
- 主内容：版权作品卡片。
- 摄影师推荐。
- 为什么选择BirdChain模块。
- 定制授权CTA。

### 8.3版权作品卡字段

每张版权作品卡必须包含：

- 图片
- 标题
- 作者
- 认证标识
- 鸟种
- 授权价格
- 授权类型
- 版权证书编号
- Premium标签
- 购物车按钮
- 收藏按钮

### 8.4子页面

#### `/market/work-detail.html`

必须包含：

- 作品高清预览
- 水印预览
- 作者资料
- 鸟种信息
- 版权证书状态
- 授权用途选择
- 授权区域选择
- 授权期限选择
- 是否允许AI二创
- 是否允许商品化
- 动态价格计算
- 加入授权清单按钮

#### `/market/license-checkout.html`

授权模拟结算页必须包含：

- 授权作品清单
- 使用用途
- 授权范围
- 价格明细
- 作者分成
- 平台服务费
- 保护基金比例
- 模拟支付按钮

点击模拟支付后：

- 生成授权记录。
- 写入localStorage中的`licenseOrders`。
- 跳转证书详情页。

#### `/market/certificate-detail.html`

证书详情页必须包含：

- 授权证书编号
- 作品哈希
- 作者
- 购买方
- 授权用途
- 授权期限
- 授权地域
- 是否允许AI二创
- 是否允许商品化
- 生成时间
- 模拟链上状态：已存证、可验证、未篡改

#### `/market/license-guide.html`

授权说明页必须包含：

- 个人非商用
- 标准商用
- 扩展商用
- 商品化授权
- AI二创授权
- AI训练授权
- 独家授权

#### `/market/infringement-report.html`

侵权投诉模拟页必须包含：

- 作品ID
- 侵权链接
- 侵权说明
- 联系方式
- 提交后生成投诉编号

### 8.5授权价格模拟规则

必须在前端实现价格计算：

```js
基础价=作品等级价
用途系数={个人:1,自媒体:2,企业宣传:4,广告营销:8,图书画册:10,文创商品:15,AI二创:5,AI训练:50,独家:100}
期限系数={单次:1,一年:2,三年:4,永久:8}
地域系数={单地区:1,全国:2,全球:4}
最终价=基础价*用途系数*期限系数*地域系数
```

---

## 9.专题/深度分析栏目

### 9.1栏目定位

这是类似世界地理的内容品牌栏目，允许会员和专栏作者撰写深度分析文章。它不是普通博客，而是平台传播、SEO、教育和专业信任的核心。

### 9.2页面`/topics/index.html`

必须包含：

- 大图专题Hero
- 专题导航
- 编辑推荐
- 深度长文
- 专栏推荐
- 热门标签
- 专栏作者入口
- 成为专栏作者CTA

专题分类：

- 迁徙研究
- 物种深度
- 栖息地保护
- 行为观察
- 摄影故事
- 保育前沿
- 专家专栏
- 学校产学研
- 地方文旅观察
- 儿童自然教育

### 9.3子页面

#### `/topics/topic-detail.html`

专题详情页必须包含：

- 专题封面
- 专题目录
- 文章列表
- 专题作者
- 相关地方站
- 相关鸟种
- 相关摄影作品

#### `/topics/article-detail.html`

文章详情页必须包含：

- 文章封面
- 标题
- 作者
- 作者身份：会员作者、摄影师、研究者、地方站长、学校团队
- 摘要
- 正文
- 图片组
- 引用作品
- 推荐阅读
- 评论区
- 收藏、点赞、分享

#### `/topics/columnists.html`

专栏作者页必须包含：

- 专栏作者列表
- 作者领域
- 已发文章数
- 粉丝数
- 申请专栏作者按钮

#### `/topics/write-article.html`

写文章页面必须包含：

- 标题输入
- 摘要输入
- 封面选择
- 分类选择
- 正文编辑区
- 引用作品选择
- 发布按钮

发布后写入localStorage中的`draftArticles`或`publishedArticles`，并在个人中心文章列表中显示。

---

## 10.全球地方站栏目

### 10.1栏目定位

全球地方站不是传统分公司，也不是重运营加盟，而是基于地方鸟类资源、摄影师、文旅、自然教育和保护项目的轻量节点。

### 10.2页面`/stations/index.html`

必须包含：

- 全球地方站Hero
- 世界地图视觉区域
- 统计数据：国家/地区、地方站、观测点、物种记录
- 热门区域
- 地区筛选：全部、东亚、东南亚、南亚、欧洲、非洲、北美洲、南美洲、大洋洲
- 生态类型筛选：湿地、雨林、海岸、高原、城市、草原、迁徙走廊
- 地方站卡片
- 创建地方站CTA

### 10.3子页面

#### `/stations/station-detail.html`

地方站详情页必须包含：

- 地方站封面图
- 地方站名称
- 国家/地区
- 栖息地类型
- 物种数量
- 作品数量
- 摄影师数量
- 地方站长
- 特色鸟种
- 推荐摄影点
- 文旅资源
- 研学路线
- 摄影旅行入口
- 当地作品流
- 地方站活动

#### `/stations/species-detail.html`

鸟种详情页必须包含：

- 鸟种中文名/英文名/学名
- 物种图片
- 分布地图
- 栖息地
- 迁徙信息
- 保护等级
- 相关作品
- 相关专题
- 相关周边

#### `/stations/observation-point.html`

观测点详情页必须包含：

- 点位介绍
- 图片
- 推荐季节
- 可见鸟种
- 交通信息
- 注意事项
- 保护提醒

#### `/stations/create-station.html`

创建地方站页面必须包含：

- 地方站名称
- 地区
- 生态类型
- 站长申请信息
- 资源说明
- 提交后写入localStorage中的`stationApplications`

---

## 11.鸟类视觉实验室栏目

### 11.1栏目定位

鸟类视觉实验室是平台AI创作入口，不能出现相关历史人物字样。它面向海报、插画、科普卡片、封面设计、视觉素材和创作周边。

### 11.2页面`/lab/index.html`

必须包含：

- 标题：鸟类视觉实验室
- 说明：用AI生成鸟类海报、插画、科普卡、封面和视觉素材。
- 开始创作入口
- 创作类型
- 风格模板
- 作品展示
- 创作历史
- 灵感示例

### 11.3子页面

#### `/lab/create.html`

必须包含：

- 文本提示词输入
- 参考图上传模拟
- 创作类型：海报设计、鸟类插画、科普卡片、封面设计、视觉素材、创作周边
- 风格选择：水彩插画、自然写实、复古图鉴、扁平设计、国风水墨、手绘素描、极简线稿
- 生成按钮
- 生成结果区

点击生成后：

- 从`aiOutputs.json`随机取图或根据类型筛选结果。
- 写入localStorage中的`aiCreationHistory`。
- 展示生成结果卡。

#### `/lab/gallery.html`

展示AI视觉作品流，支持筛选和收藏。

#### `/lab/work-detail.html`

AI作品详情页必须包含提示词、风格、原始参考作品、授权状态、下载按钮、加入周边设计按钮。

#### `/lab/history.html`

展示当前用户本地生成历史。

---

## 12.创作周边栏目

### 12.1栏目定位

创作周边不是普通商城，而是基于鸟类影像授权、AI二创和设计师共创的生活方式栏目。

### 12.2页面`/merch/index.html`

必须包含：

- 标题：创作周边
- 副标题：InspiredbyBirds,MadeToInspire可作为小字，不要作为主导文案。
- 分类入口：包袋、雨伞、图书、儿童有声读物、艺术版画、家居装饰、数字周边、摄影装备、软饮联名
- 主题系列：热带之歌、迁徙之旅、夜的守望者、海岸线、湿地之翼
- 商品卡片
- 创作者之选
- 灵感阅读
- 精选企划

### 12.3子页面

#### `/merch/product-detail.html`

商品详情页必须包含：

- 商品图组
- 商品名称
- 商品分类
- 价格
- 关联摄影作品
- 关联摄影师
- 授权说明
- 商品故事
- 数量选择
- 加入购物车
- 立即购买
- 推荐商品

#### `/merch/drop-detail.html`

主题Drop详情页必须包含：

- 主题封面
- 系列故事
- 包含商品
- 参与摄影师
- 参与设计师
- 限量数量
- 保护基金比例

#### `/merch/cart.html`

购物车必须支持：

- 修改数量
- 删除商品
- 价格合计
- 结算跳转

#### `/merch/checkout.html`

模拟结算后写入localStorage中的`merchOrders`。

#### `/merch/audio-book-detail.html`

儿童有声读物详情页必须包含：

- 封面
- 鸟种故事
- 音频章节列表
- 试听按钮
- 适龄段
- AR卡片入口

---

## 13.赛事/活动栏目

### 13.1页面`/events/index.html`

必须包含：

- 当前赛事
- 往届赛事
- 摄影比赛
- AI创作比赛
- 地方站活动
- 线上征集
- 获奖作品

### 13.2子页面

#### `/events/event-detail.html`

必须包含赛事介绍、时间、规则、奖项、报名按钮、投稿作品。

#### `/events/submit.html`

投稿页必须支持选择作品、填写说明、提交后写入localStorage中的`eventSubmissions`。

#### `/events/winners.html`

获奖作品页必须展示排名、作品、作者、评审说明。

---

## 14.摄影旅行栏目

### 14.1页面`/travel/index.html`

必须包含：

- 摄影旅行Hero
- 线路筛选：国家、季节、难度、鸟种、价格
- 线路卡：目的地、日期、导师、名额、价格、报名按钮
- 特色：小团、专业导师、保护点位脱敏、作品上链确权

### 14.2子页面

#### `/travel/route-detail.html`

必须包含线路详情、每日行程、目标鸟种、导师介绍、装备建议、报名说明。

#### `/travel/booking.html`

报名页必须模拟提交，写入localStorage中的`travelBookings`。

---

## 15.自然教育栏目

### 15.1页面`/education/index.html`

必须包含：

- 学校产学研入口
- 儿童自然教育入口
- 鸟类有声读物入口
- 课程包
- 研学项目
- 教师资源
- 学校合作申请

### 15.2子页面

#### `/education/course-detail.html`

课程详情页：课程封面、适龄段、课时、材料包、关联鸟种、购买/申请。

#### `/education/school-program.html`

学校项目页：产学研合作、研究课题、学生作品征集、学校账号申请。

#### `/education/kids-audio.html`

儿童有声读物列表与试听。

---

## 16.AR/VR鸟类博物馆栏目

### 16.1页面`/museum/index.html`

必须包含：

- AR/VR鸟类博物馆Hero
- 数字展厅入口
- 鸟种展柜
- 迁徙地图
- 鸟鸣声音库
- 学校/博物馆合作入口

### 16.2子页面

#### `/museum/exhibit-detail.html`

展项详情：鸟种、图像、声音、视频、展览说明、关联作品。

#### `/museum/vr-hall.html`

VR展厅静态模拟页：3D卡片式展厅、左右切换、鸟种介绍弹窗。

---

## 17.摄影器材栏目

### 17.1页面`/gear/index.html`

必须包含：

- 摄影装备推荐
- 观鸟装备推荐
- 器材评测
- 摄影师使用清单
- 购买/导购链接模拟

### 17.2子页面

#### `/gear/product-detail.html`

器材详情页：图片、参数、适合场景、摄影师评价、关联作品。

#### `/gear/review-detail.html`

评测文章页：图文评测、样张、优缺点、推荐指数。

---

## 18.社区栏目

### 18.1页面`/community/index.html`

必须包含：

- 讨论区
- 问答
- 作品求评
- 地方站交流
- 摄影伦理
- 观鸟活动
- 热门帖子

### 18.2子页面

#### `/community/post-detail.html`

帖子详情页必须包含正文、评论、点赞、收藏、回复框。

#### `/community/group-detail.html`

小组页必须包含成员、帖子、活动、加入按钮。

---

## 19.保护行动栏目

### 19.1页面`/protection/index.html`

必须包含：

- 保护项目
- 受威胁鸟种
- 公益基金说明
- 透明记录
- 参与方式

### 19.2子页面

#### `/protection/project-detail.html`

项目详情页：项目目标、地点、鸟种、资金用途、进度、相关作品。

#### `/protection/donation.html`

模拟捐助页，提交后写入localStorage中的`protectionDonations`。

---

## 20.创作者中心/会员中心

### 20.1页面`/creator/index.html`

必须是平台级控制台，不是简单个人资料页。

必须包含：

- 创作者资料头图
- 作品数
- 粉丝数
- 收藏数
- 获赞数
- 加入时间
- 创作者等级
- 上传作品入口
- 写文章入口
- 收益概览
- 版权证书
- 任务与贡献
- 创作者勋章
- 社区影响力
- 最新作品
- 最新文章

### 20.2子页面

#### `/creator/profile.html`

编辑资料、头像、简介、国家、社交链接。

#### `/creator/upload.html`

上传作品模拟页必须包含：

- 作品标题
- 图片上传模拟
- 鸟种选择
- 拍摄地
- 分类
- 是否进入版权市场
- 是否允许AI二创
- 是否允许商品化
- 提交后写入localStorage中的`userWorks`
- 提交后在发现页和创作者中心显示

#### `/creator/certificates.html`

版权证书列表，展示已生成证书和审核中证书。

#### `/creator/earnings.html`

收益页展示授权收入、周边分成、AI二创分成、赛事奖金、提现模拟。

#### `/creator/tasks.html`

任务页展示：上传作品、写文章、审核标签、分享专题、参加活动。完成后增加贡献值。

#### `/creator/articles.html`

文章管理页展示已发布、草稿、审核中。

---

## 21.关于与合作页面

### `/about/index.html`

必须包含平台介绍、使命、业务结构、轻量协作模式、合作入口。

### `/about/contact.html`

联系表单，提交后写入localStorage中的`contactMessages`。

### `/about/partners.html`

合作伙伴类型：学校、文旅机构、博物馆、摄影师、器材品牌、出版机构、自然保护组织。

---

## 22.实例数据要求

必须创建`/data`目录，至少包含以下JSON文件：

```txt
/data/heroSlides.json
/data/works.json
/data/creators.json
/data/species.json
/data/stations.json
/data/topics.json
/data/articles.json
/data/products.json
/data/licenses.json
/data/events.json
/data/travelRoutes.json
/data/courses.json
/data/museumExhibits.json
/data/gear.json
/data/communityPosts.json
/data/protectionProjects.json
/data/users.json
```

### 22.1作品数据字段

```json
{
  "id":"work001",
  "title":"翠鸟入水瞬间",
  "image":"/assets/images/works/kingfisher-dive.jpg",
  "category":"摄影",
  "species":"翠鸟",
  "habitat":"湿地",
  "country":"中国",
  "stationId":"station001",
  "creatorId":"creator001",
  "views":8620,
  "likes":1200,
  "favorites":320,
  "licenseType":"扩展授权",
  "basePrice":299,
  "certificateId":"BC-2024-05-00124",
  "allowAI":true,
  "allowMerch":true,
  "isPremium":true
}
```

### 22.2创作者数据字段

```json
{
  "id":"creator001",
  "name":"NatureVision",
  "avatar":"/assets/images/avatars/creator001.jpg",
  "country":"中国",
  "bio":"野生鸟类摄影师与自然记录者",
  "works":1248,
  "followers":86700,
  "verified":true,
  "level":6,
  "badges":["版权守护者","优质内容奖"]
}
```

### 22.3地方站数据字段

```json
{
  "id":"station001",
  "name":"鄱阳湖湿地站",
  "region":"东亚",
  "country":"中国",
  "location":"江西",
  "type":"湿地生态系统",
  "cover":"/assets/images/stations/poyang-lake.jpg",
  "speciesCount":342,
  "workCount":1258,
  "creatorCount":86,
  "featuredSpecies":["白鹤","东方白鹳","小天鹅"],
  "creator":"鄱阳湖保护协会"
}
```

### 22.4商品数据字段

```json
{
  "id":"product001",
  "name":"湿地之翼折叠伞",
  "category":"雨伞",
  "price":199,
  "cover":"/assets/images/products/umbrella-wetland.jpg",
  "sourceWorkId":"work001",
  "creatorId":"creator001",
  "stock":128,
  "tags":["地方站限定","授权图案","保护基金"]
}
```

### 22.5本地状态数据

所有用户交互必须写入localStorage，至少包含：

```txt
favoriteWorks
likedWorks
followedCreators
cartItems
licenseOrders
merchOrders
aiCreationHistory
userWorks
publishedArticles
draftArticles
eventSubmissions
travelBookings
stationApplications
contactMessages
newsletterSubscribers
protectionDonations
completedTasks
```

---

## 23.全站交互功能强制要求

### 23.1必须真实交互，不得只做视觉

以下功能必须可操作：

- 全站搜索
- 分类筛选
- 排序
- 切换网格/瀑布流/列表
- 点赞
- 收藏
- 关注创作者
- 评论
- 上传作品模拟
- 写文章模拟
- 授权价格计算
- 模拟购买授权
- 生成版权证书
- 加入购物车
- 商品数量修改
- 模拟下单
- AI创作模拟
- 地方站筛选
- 创建地方站申请
- 活动投稿
- 摄影旅行报名
- 学校合作申请
- 联系表单提交
- 订阅邮箱
- 明暗色切换
- 移动端菜单打开关闭

### 23.2交互反馈

所有操作必须有反馈：

- 成功Toast
- 错误Toast
- Loading状态
- 空状态
- 表单校验
- 按钮禁用状态
- Hover状态
- Focus状态
- Active状态

### 23.3示例

- 点击“收藏”后，图标变为实心，数量+1，再点取消。
- 点击“关注”后，按钮变为“已关注”。
- 授权结算成功后，出现“授权证书已生成”，并跳转证书详情页。
- AI生成后，作品进入创作历史。
- 上传作品后，作品进入创作者中心“最新作品”。
- 商品加入购物车后，购物车数量变化。

---

## 24.组件拆分要求

必须组件化，不允许页面重复粘贴。

### 24.1全局组件

```txt
Header
Footer
ThemeToggle
SearchBar
MobileMenu
Toast
Modal
Drawer
Pagination
Breadcrumb
FilterChips
SortDropdown
ImageCard
WorkCard
CreatorCard
TopicCard
StationCard
ProductCard
LicenseCard
ArticleCard
EventCard
TravelRouteCard
CourseCard
MuseumCard
CommunityPostCard
```

### 24.2业务组件

```txt
HeroSlider
MasonryGallery
RankingPanel
EditorPickPanel
LicenseCalculator
CertificatePanel
AIPromptBox
AIGallery
CartPanel
CreatorStatsPanel
UploadWorkForm
WriteArticleForm
StationMap
StationFilter
TopicDirectory
MerchDropPanel
EventSubmissionForm
TravelBookingForm
NewsletterForm
```

---

## 25.页面动效与特效要求

### 25.1允许的动效

- 图片卡Hover轻微上浮。
- 图片卡遮罩出现标题和操作按钮。
- 瀑布流加载淡入。
- Hero轮播渐变切换。
- Header滚动后轻微毛玻璃。
- 下拉菜单淡入下滑。
- 移动端菜单右侧抽屉滑入。
- Toast从右上角进入。
- 卡片筛选时淡出再淡入。
- 数字统计轻微递增动画。

### 25.2禁止的动效

- 禁止夸张3D旋转。
- 禁止大量闪光。
- 禁止影响阅读的滚动劫持。
- 禁止滥用粒子特效。
- 禁止动效抢过图片内容。

---

## 26.响应式要求

### 26.1桌面端≥1200px

- Header完整导航。
- 首页使用多栏卡片布局。
- 发现页使用3-4列瀑布流。
- 版权市场左侧筛选+主内容网格。
- 专题页可使用左侧导航+主内容+右侧目录。

### 26.2平板端768px-1199px

- Header部分导航收起到“更多”。
- 作品流改为2-3列。
- 版权市场筛选改为顶部抽屉。
- 右侧榜单下移。

### 26.3手机端≤767px

- Header只显示Logo、搜索图标、菜单按钮。
- 菜单从右侧抽屉弹出。
- 菜单打开必须有遮罩、滚动锁定、点击遮罩关闭、ESC关闭。
- 作品流改为1列或2列轻瀑布流。
- 筛选使用底部弹窗或抽屉。
- 图片比例要重新裁切，避免小屏信息过密。
- CTA按钮必须加大触控面积。

---

## 27.文件结构建议

如果使用Vite+React：

```txt
/src
  /assets
    /images
    /icons
    /logo
  /components
    Header.jsx
    Footer.jsx
    WorkCard.jsx
    CreatorCard.jsx
    TopicCard.jsx
    StationCard.jsx
    ProductCard.jsx
    Toast.jsx
    Modal.jsx
  /data
    works.json
    creators.json
    stations.json
    topics.json
    products.json
  /pages
    Home.jsx
    Discover.jsx
    Market.jsx
    TopicIndex.jsx
    StationIndex.jsx
    LabIndex.jsx
    MerchIndex.jsx
    CreatorCenter.jsx
  /utils
    storage.js
    filters.js
    pricing.js
    mockActions.js
  /styles
    tokens.css
    global.css
    components.css
```

如果使用纯静态HTML：

```txt
/pages
  index.html
  discover/index.html
  market/index.html
  topics/index.html
  stations/index.html
  lab/index.html
  merch/index.html
  creator/index.html
/assets
  css/base.css
  css/components.css
  css/pages.css
  js/data-loader.js
  js/state.js
  js/interactions.js
  js/pricing.js
  js/router.js
/data
  works.json
  creators.json
  stations.json
  topics.json
  products.json
```

---

## 28.SEO与可传播要求

每个页面必须包含：

- 独立title。
- 独立description。
- 语义化H1-H3。
- 图片alt。
- OpenGraph分享信息。
- 作品详情页、专题详情页、地方站详情页、商品详情页必须适合被单独分享。

专题页传播重点：

- 大封面。
- 标题有内容性。
- 作者身份明确。
- 图片充足。
- 可复制分享链接。

---

## 29.验收标准

### 29.1页面完整度

- 顶层栏目必须全部生成。
- 每个栏目必须至少有1个子页面。
- 版权市场、专题、地方站、视觉实验室、创作周边、创作者中心必须有多子页面。
- Header/Footer必须全站统一且组件化。

### 29.2交互完整度

- 搜索、筛选、排序必须真实作用于数据。
- 点赞、收藏、关注必须写入localStorage。
- 表单提交必须校验并写入localStorage。
- 授权价格必须动态计算。
- 证书必须可生成模拟数据。
- 购物车必须可增删改数量。
- AI创作必须可生成模拟结果。

### 29.3视觉完成度

- 图片必须足够多。
- 首页不能像普通官网。
- 发现页必须有作品流密度。
- 专题页必须有自然地理式长内容气质。
- 版权市场必须有商业交易感。
- 创作周边必须有生活方式和设计感。
- 鸟类视觉实验室必须像产品工具，而不是单张介绍页。

---

## 30.最终禁止事项

- 禁止只生成首页。
- 禁止只有一级栏目没有子页面。
- 禁止交互按钮无效。
- 禁止筛选是假筛选。
- 禁止表单提交没有数据保存。
- 禁止所有页面共用同一套单调布局。
- 禁止大面积纯白背景。
- 禁止emoji图标。
- 禁止英文和中文之间自动加空格。
- 禁止出现被要求去掉的历史人物、家族、赞助体系相关字样。
- 禁止把平台做成传统重运营电商或传统图库。
- 禁止忽略移动端菜单、遮罩、关闭、滚动锁定。
- 禁止忽略图片alt和SEO。
- 禁止用占位灰块代替图片。

---

## 31.开发时的第一步执行指令

开发工具应先完成以下基础工程，再继续页面：

1. 建立全站主题变量。
2. 建立Header和Footer组件。
3. 建立JSON实例数据。
4. 建立localStorage状态工具。
5. 建立Toast和Modal组件。
6. 建立作品卡、专题卡、地方站卡、商品卡。
7. 先生成首页、发现/灵感、版权市场、专题/深度分析、全球地方站、鸟类视觉实验室、创作周边、创作者中心8个核心页面。
8. 再补全所有子页面。
9. 最后统一检查交互、响应式、明暗色和SEO。

---

## 32.一句话给VibeCoding的执行总结

请将BirdChain开发成一个以大量鸟类影像为核心的图片型平台，而不是普通官网。必须生成完整栏目和子页面，所有筛选、搜索、点赞、收藏、关注、上传、授权、购物车、AI创作、报名、投稿、表单都要基于实例JSON数据和localStorage实现可操作交互。视觉上采用高端自然影像、深蓝金色、低饱和背景、瀑布流作品卡、自然地理式专题和站酷式创作者内容平台结构。中文语境优先，中文里的英文前后不要加空格。
