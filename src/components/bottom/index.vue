<template>
  <div class='root'>
    <div class="bottomArea">
        <div class="topArea">
            <div class="qrcode"></div>
            <div class="phoneAdress">
                <p>电话：0571-80904556 </p>
                <p>邮箱：cezhitong123@163.com</p>
            </div>
        </div>
        <div class="copyRight">
            ©2013-2018 策知通科技公司版权所有 浙ICP备14014304号-1
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
    .bottomArea{
        height:200px;
        background:rgba(42,42,42,1);
        padding-top: 50px;
        box-sizing: border-box;
        .topArea{
            margin-bottom: 20px;
            text-align: left;
            padding-left: 20%;
            .qrcode{
                width: 100px;
                height: 100px;
                background-color: #fff;
                display: inline-block;
                margin-right: 50px;
            }
            .phoneAdress{
                display: inline-block;
                font-size:16px;
                font-family:SourceHanSansCN-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
            }
        }
        .copyRight{
            text-align:center;
            font-size:12px;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
        }
    }
</style>
