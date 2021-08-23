<template>
    <div id="page">
        <div class="header">
            <img class="left_img" src="@/assets/img/logo.png" alt="">
            <div>
                <div>
                <i class="iconfont icon-user"></i>
                <span>我的</span>
            </div>
            <div>
                 <i class="iconfont icon-nav"></i>
                <span>导航</span>
            </div>
            </div>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#00be9c">
            <van-swipe-item v-for="(item,index) in banner" :key="index">
                 <img :src="require('@/assets/img/banner'+item+'.jpg')" alt="">
            </van-swipe-item>
        </van-swipe>
        <van-grid :column-num="4" :border="false">
            <van-grid-item  v-for="(item,index) in nav" :key="index">
              <span class="one" :style="{background:item.color}"><i :class="item.icon"></i></span>
              <span class="two">{{item.name}}</span>
  </van-grid-item> 
        </van-grid>
        <div class="conton">
          <ul>
            <li @click="cid=index" v-for="(item,index) in conton" :key="index" :class="{'big':index==cid  }">
              {{item.text}}
            </li>
          </ul>
          <img src="@/assets/img/img1.jpg" alt="">
          <ol>
            <li>
              <i class="iconfont icon-zero"></i>
              <span>0增项,标准施工</span>
            </li>
            <li>
              <i class="iconfont icon-protection-fill"></i>
              <span>杜绝外包项目</span>
            </li>
            <li>
              <i class="iconfont icon-price"></i>
              <span>装修贷款</span>
            </li>
          </ol>
        </div>
         <div class="conton_2">
          <ul>
            <li @click="cid1=index" v-for="(item,index) in conton1" :key="index" :class="{'big':index==cid1  }">
              {{item.text}}
            </li>
          </ul>
          <div>
            <input type="text" name="" id="" placeholder="小区名">
             <input type="text" name="" id="" placeholder="手机号">
              <input type="text" name="" id="" placeholder="建筑面积">
          </div>
        </div>
    </div>
</template>
<script>
import "@/assets/iconfont/iconfont.css";
export default {
  data() {
    return {
      banner: ["", "1", "2", "3"],
      nav: [
        {
          name: "装修方案",
          icon: "iconfont icon-case",
          color: "#39c894"
        },
        {
          name: "效果图",
          icon: "iconfont icon-pics",
          color: "#feb505"
        },

        {
          name: "设计师",
          icon: "iconfont icon-designer",
          color: "#eed215"
        },

        {
          name: "装修工地",
          icon: "iconfont icon-construction-site",
          color: "#00b2b2"
        },

        {
          name: "装修攻略",
          icon: "iconfont icon-decorate",
          color: "#1b9af7"
        },

        {
          name: "装修贷款",
          icon: "iconfont icon-loans",
          color: "#7b72e9"
        },

        {
          name: "免费预约",
          icon: "iconfont icon-pencle",
          color: "#ff4351"
        },

        {
          name: "十秒报价",
          icon: "iconfont icon-ten",
          color: "#fe8864"
        }
      ],
      conton:[
        {
          text:"全屋装修"
        },
        {
          text:"包设计"
        },
        {
          text:"包主材"
        },
        {
          text:"包水电"
        },
        {
          text:"包施工"
        }
      ],
       conton1:[
        {
          text:"装修预约"
        },
        {
          text:"免费上门量房"
        },
        {
          text:"设计方案满意为止"
        }
      ],
      cid:0,
      cid1:0
    };
  },
  created() {}
};
</script>

<style lang="scss" scoped >
#page {
  height: 100%;
  width: 100%;
}
.header {
  padding: 0.16rem 0.18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left_img {
    width: 8rem;
    height: 3rem;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        font-size: 20px;
        color: #999;
      }
      .iconfont {
        font-size: 22px;
        color: #999999;
      }
    }
  }
}
.my-swipe .van-swipe-item {
  width: 100%;
  height: 7rem;
  img {
    width: 100%;
    height: 100%;
  }
}
/deep/.van-swipe__indicator {
  background-color: #7c7c7c;
}
.van-grid-item__content {
  padding: 0.3rem 0 0.4rem 0;
  .one {
    height: 2.9rem;
    width: 2.9rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconfont {
      font-size: 28px;
      color: white;
    }
  }
  .two {
    font-size: 16px;
    color: #333;
    margin-top: 0.15rem;
  }
}
.conton {
  border-top: 0.5rem solid #eaeaea;
  border-bottom: 0.5rem solid #eaeaea;
  img{
    width: 100%;
    height: 12rem;
  }
  ol{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .72rem 0;
    li{
      display: flex;
      align-items: center;
      span{
      font-size: 16px;
    }
    i{
      color: #39c894;
      font-size:20px;
      margin-right: .1.5rem;
    }
    }
  }
  ul{
    display: flex;
    margin: .64rem 0;
    height: 2rem;
    align-items: center;
    border-left: .2rem solid #39c894;
    li{
      margin-left: .3rem;
      font-size: 15px;
      color: #999;
    }
    .big{
      font-size: 20px;
      color: #000;
    }
  }
}
.conton_2 {
  border-bottom: 0.5rem solid #eaeaea;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
      width: 80%;
      margin-top: 1rem;
      height: 2rem;
      border-radius: 5px;
      padding-left: .3rem;
      outline: none;
      border: .02rem solid #eaeaea;
    }
  }
  ul{
    display: flex;
    margin: .64rem 0;
    height: 2rem;
    align-items: center;
    border-left: .2rem solid #39c894;
    li{
      margin-left: .3rem;
      font-size: 15px;
      color: #999;
    }
    .big{
      font-size: 20px;
      color: #000;
    }
  }
}
</style>


