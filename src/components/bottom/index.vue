<template>
  <div class='footer'>
    <div class="bottomArea">
        <div class="topArea">
            <div class="qrcode">
                <img src="../../assets/images/index/qrcode.png" alt="">
            </div>
            <div class="phoneAdress">
                <p>联系我们：400-878-0703 </p>
                <p>服务时间：周一至周五9:00-18:00 </p>
                <p>邮箱：server@cezhitong.com</p>
                <p>地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室</p>
            </div>
        </div>
        <div class="links">
            <span>友情链接：</span> 
            <a href='http://www.innocom.gov.cn/' target='_blank'>国家高新技术企业认定管理工作网</a>
            <a href='http://www.most.gov.cn/' target='_blank'>科部网</a>
            <a href='http://www.zjkjt.gov.cn/' target='_blank'>浙江省科技厅</a>
            <a href='http://202.107.205.11:8612/' target='_blank'>浙江省高新技术企业认定管理工作网</a>
        </div>
        <div class="copyRight">
            <!-- <div>©2018-2019 策知通科技公司版权所有 浙ICP备14014304-1号</div> -->
            <div>©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1</div>
            <!-- <div>浙公网安备 212345687564039242号 </div> -->
            <div></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  methods: {

  },
  mounted(){

  },
}
</script>

<style lang='scss' scoped>
@media (max-device-width:768px ){
    .footer .bottomArea .topArea {
        padding-left: 5%!important;
    }
}
.footer{
    position:absolute;
    width:100%;
    bottom:0;
    .bottomArea{
        height:376px;
        background:rgba(42,42,42,1);
        padding-top: 42px;
        box-sizing: border-box;
        .topArea{
            margin-bottom: 20px;
            text-align: left;
            padding-left: 20%;
            .qrcode{
                width: 170px;
                height: 170px;
                background-color: #fff;
                display: inline-block;
                margin-right: 85px;
            }
            .phoneAdress{
                display: inline-block;
                font-size:20px;
                font-family:SourceHanSansCN-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                vertical-align: bottom;
                line-height: 42px;
            }
        }
        .links{
            font-size: 14px;
            color:rgba(255,255,255,1);
            margin: 61px 0 33px 0;
            a{
                margin: 15px;
            }
        }
        .copyRight{
            text-align:center;
            font-size:12px;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            div{
                margin: 15px;
            }
        }
    }
}
</style>
