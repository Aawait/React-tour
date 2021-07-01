
import {
    CrownOutlined,
    LikeOutlined,
    SendOutlined,
    InstagramOutlined,
    TwitterOutlined,
    HeartOutlined,
    HomeOutlined
} from '@ant-design/icons'

// nav列表用的数据
export const initNavList = [
  "旅游首页",
  "周末游",
  "跟团游",
  "自由行",
  "私家团",
  "游轮",
  "酒店+景点",
  "当地玩乐",
  "主题游",
  "定制游",
  "游学",
  "签证",
  "企业游",
  "高端游",
  "爱玩户外",
  "保险",
];


// sidebar 用到的数据！
export const initSideBarList = [
  {
    title: "主题旅游",
    icon: <CrownOutlined />,
    subMenu: [
      {
        title: "爸妈游",
        subMenu: ["祈福拜佛", "古镇游玩", "桂林山水", "红色之旅"],
      },
      {
        title: "亲子游",
        subMenu: ["上海迪士尼", "探险体验", "海洋公园", "感受名校"],
      },
      {
        title: "蜜月游",
        subMenu: ["浪漫海岛", "豪华酒店", "购物血拼", "全球婚礼"],
      },
    ],
  },
  {
    title: "周边游",
    icon: <InstagramOutlined />,
    subMenu: [
      {
        title: "周边目的地",
        subMenu: ["杭州", "南京", "苏州", "黄山"],
      },
      {
        title: "热门景点",
        subMenu: ["普陀山", "千岛湖", "乌镇古镇", "宏村"],
      },
    ],
  },
  {
    title: "国内游",
    icon:<LikeOutlined />,
    subMenu: [
      {
        title: "广东",
        subMenu: ["广州", "深圳", "珠海", "惠州"],
      },
      {
        title: "浙江",
        subMenu: ["杭州", "普陀山", "千岛湖", "宁波"],
      },
      {
        title: "江苏",
        subMenu: ["舟山", "乌镇", "干山", "湖州"],
      },
    ],
  },
  {
    title: "东南亚",
    icon: <SendOutlined />,
    subMenu: [
      {
        title: "热门目的地",
        subMenu: ["新加坡", "巴厘岛", "越南", "柬埔寨"],
      },
      {
        title: "热门景点",
        subMenu: ["下龙湾", "吴哥窟", "西哈努克", "槟城珍珠岛"],
      },
    ],
  },
  {
    title: "欧洲",
    icon: <TwitterOutlined />,
    subMenu: [
      {
        title: "热门邮轮航线",
        subMenu: ["欧洲河轮", "北欧邮轮", "爱琴海邮轮", "英伦三岛"],
      },
      {
        title: "热门景点",
        subMenu: ["贝加尔湖", "普罗旺斯", "阿尔卑斯", "圣托里尼岛"],
      },
      {
        title: "蜜月游",
        subMenu: ["极光中心", "俄罗斯远东地区", "英格兰少女峰", "玻璃海滩"],
      },
    ],
  },
  {
    title: "新加坡",
    icon: <HeartOutlined />,
    subMenu: [
      {
        title: "圣淘沙岛",
        subMenu: ["新加坡环球影城", "亚洲最大糖果屋", "时光之翼游乐园", "城东乐怡度假村"],
      },
      {
        title: "热门景点",
        subMenu: ["哈芝巷", "鱼尾狮公园", "中峇鲁", "滨海湾花园"],
      },
      {
        title: "蜜月游",
        subMenu: ["河川生态园", "裕廊飞禽公园", "时尚FDFS免税店", "乌节路"],
      },
    ],
  },
  {
    title: "日本",
    icon: <HomeOutlined />,
    subMenu: [
      {
        title: "东京",
        subMenu: ["秋叶原", "明治神宫", "皇居", "银座"],
      },
      {
        title: "热门景点",
        subMenu: ["富士山", "东京紫藤花园", "大池禅寺", "雪乐园"],
      },
      {
        title: "蜜月游",
        subMenu: ["神户巷", "大阪城公园", "心斋桥", "忍野八海"],
      },
    ],
  },
];


// companys公司集合数据
export const initCompanys = [
  {name:'凯撒旅游',src:'https://ftp.bmp.ovh/imgs/2021/04/fc4e37ec4b5bb513.png'},
  {name:'云南旅游',src:'https://ftp.bmp.ovh/imgs/2021/04/e6c64d326f18830e.png'},
  {name:'丽江旅游',src:'https://ftp.bmp.ovh/imgs/2021/04/d2ebd8a7173dee72.png'},
  {name:'爱彼旅游',src:'https://ftp.bmp.ovh/imgs/2021/04/4efd3096e4ad9667.png'},
]


/**
 * 首页推荐产品数据
 * 
 * */


   // 爆款推荐
export const initHotList = [
    {
      id: 1,
      title:
        "南京3日2晚跟团游(4钻)·观中山陵+游总统府+览博物院『游六朝古都 听漫长历史』&逛秦淮河风光带+老门东『品美食 唤醒您的舌尖』&牛首山+报恩寺『诚心祈福 放空心灵』& 2晚连住4钻酒店",
      price: "11990",
      photos: [
        {
          url: "https://z3.ax1x.com/2021/06/30/R0yZ40.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...",
      price: "13290",
      photos: [
        {
          url: "https://z3.ax1x.com/2021/06/30/R0yavD.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...",
      price: "4000",
      photos: [
        {
          url: "https://z3.ax1x.com/2021/06/30/R0yUgO.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...",
      price: "7399",
      photos: [
        {
          url: "https://z3.ax1x.com/2021/06/30/R0yN8K.jpg",
        },
      ],
    },
    {
      id: 5,
      title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...",
      price: "3499",
      photos: [
        {
          url: "https://z3.ax1x.com/2021/06/30/R0yJ4x.jpg",
        },
      ],
    },
    {
      id: 6,
      title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...",
      price: "5999",
      photos: [
        {
          url: "https://z3.ax1x.com/2021/06/30/R0ybGV.jpg",
        },
      ],
    },
    {
      id: 7,
      title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...",
      price: "6199",
      photos: [
        {
          url: "https://z3.ax1x.com/2021/06/30/R0yT5q.jpg",
        },
      ],
    },
    {
      id: 8,
      title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...",
      price: "13699",
      photos: [
        {
          url: "https://z3.ax1x.com/2021/06/30/R0yHP0.jpg",
        },
      ],
    },
    {
      id: 9,
      title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...",
      price: "5021",
      photos: [
        {
          url: "https://z3.ax1x.com/2021/06/30/R0yoan.jpg",
        },
      ],
    },
  ];
  
    // 新品推荐
export const initNewList = [
  {
    id: 10,
    title:
      "埃及阿斯旺+卢克索+云海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目",
    price: "11990",
    photos: [
      {
        url: "https://s3.ax1x.com/2020/12/15/rMQOIJ.jpg",
      },
    ],
  },
  {
    id: 11,
    title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...",
    price: "13290",
    photos: [
      {
        url: "https://ftp.bmp.ovh/imgs/2021/06/8c13a4fc39de9c11.png",
      },
    ],
  },
  {
    id: 12,
    title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...",
    price: "4000",
    photos: [
      {
        url: "https://ftp.bmp.ovh/imgs/2021/06/1e273d0d4c4ce02d.png",
      },
    ],
  },
  {
    id: 13,
    title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...",
    price: "7399",
    photos: [
      {
        url: "https://ftp.bmp.ovh/imgs/2021/06/5ebd557efb10a284.png",
      },
    ],
  },
  {
    id: 14,
    title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...",
    price: "3499",
    photos: [
      {
        url: "https://ftp.bmp.ovh/imgs/2021/06/faef258f350c4520.png",
      },
    ],
  },
  {
    id: 15,
    title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...",
    price: "5999",
    photos: [
      {
        url: "https://ftp.bmp.ovh/imgs/2021/06/1a66718cb29cbc32.png",
      },
    ],
  },
  {
    id: 16,
    title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...",
    price: "6199",
    photos: [
      {
        url: "https://ftp.bmp.ovh/imgs/2021/06/dc4c9943c7426357.png",
      },
    ],
  },
  {
    id: 17,
    title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...",
    price: "13699",
    photos: [
      {
        url: "https://ftp.bmp.ovh/imgs/2021/06/1e9d867839286e97.png",
      },
    ],
  },
  {
    id: 18,
    title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...",
    price: "5021",
    photos: [
      {
        url: "https://ftp.bmp.ovh/imgs/2021/06/07286f333b60f372.png",
      },
    ],
  },
];
