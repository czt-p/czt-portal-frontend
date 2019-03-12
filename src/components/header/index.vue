<template>
    <div id='head_top'>
        <div class="top">
            <div class="logo">
                <img :src=logoUrl alt="logo">
            </div>
            <div class="menu">
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="transparent"
                    text-color="#353C45"
                    :router='true'
                    active-text-color="rgba(13,112,238,1)">
                    <el-menu-item index="/home">首页</el-menu-item>
                    <el-menu-item index="/evaluating">高企评测</el-menu-item>
                    <el-menu-item index="/subsidize">高企资助查询</el-menu-item>
                    <el-menu-item index="/costing">高企成本核算</el-menu-item>
                    <el-menu-item index="/FAQs">高企问答</el-menu-item>
                    <el-menu-item index="/about">关于我们</el-menu-item>
                </el-menu>
            </div>
        </div>
        <div class="lineF"></div>
        <!-- <div id='bread'>
            <el-breadcrumb separator-class="el-icon-arrow-right" >
                <el-breadcrumb-item :to="{ path: item.path }"  v-for="(item,index) in breadArr" :key='index'>{{item.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
    	data() {
            return {
                activeIndex: '/',
                menuColor:'#fff',
                logoUrl:require('../../assets/images/index/logo2.png'),
            };
        },
        props: [],
        watch:{
            '$route':{
                handler:function(val){
                    // console.log('route',val)
                    this.watchScroll();
                    this.activeIndex = val.path;
                    if(val.path == '/newRate' || val.path == '/rateResult'){
                        this.activeIndex = '/evaluating';
                    }
                    // if(val.path == '/' || val.path == '/home'){
                    //     this.menuColor = '#fff';
                    //     this.logoUrl = require('../../assets/images/index/memu_logo.png')
                    //     $('#app').css({'paddingTop':'0px'});
                    //     $('.top').css({'background':'transparent'});
                    //     $('.lineF').show();
                    // }else{
                        this.menuColor = '#353C45';
                        // this.logoUrl = require('../../assets/images/index/logo2.png')
                        $('.lineF').hide();
                        $('#app').css({'paddingTop':'70px'});
                        $('.top').css({'background':'#fff'});
                    // }
                }
            }
        },
        computed: {
            ...mapState([

            ]),
        },
        methods: {
            handleSelect(key, keyPath) {
                
            },
            watchScroll(){
                if(this.$route.meta.title == '首页'){
                    // if(window.scrollY >= 100){
                    //     $('.top').css({'background':'#fff'});
                    //     this.logoUrl = require('../../assets/images/index/logo2.png')
                    //     $('.top .menu li').css({'color':'#353C45'});
                    //     $('.el-menu-item.is-active').css({'color':'#0D70EE'})
                    // }else{
                        // this.logoUrl = require('../../assets/images/index/memu_logo2.png')
                        $('.top').css({'background':'#fff'});
                        $('.top .menu li').css({'color':'#353C45'});
                        $('.el-menu-item.is-active').css({'color':'#0D70EE'})
                    // }
                }
            }
        },
        mounted(){
            this.activeIndex = this.$route.path;
            let that = this;
            this.watchScroll();
            window.onscroll = function(e){
                // console.log(e,window.scrollY)
                that.watchScroll();
            }
        },
    }

</script>

<style lang="scss" scoped>
    @import '../../style/elementui.scss';
    #head_top{
            position: fixed;
            width: 100%;
            z-index: 100;
            top: 0;
            box-shadow:0px 4px 10px 0px rgba(0,0,0,0.11);
        .top{
            display: flex;
            min-height: 40px;
            height: 70px;
            justify-content: space-between;
            padding: 0 .5rem;
            width: 100%;
        }
        .logo{
            height: 70px;
            display: flex;
            align-items: center;
            max-width: 400px;
            position: absolute;
            left: 4%;
            img{
                width: 100%;
                float: left;
            };
            
        }
        .menu{
            margin: 0 auto;
            li{
              @include  fontStyle;  
              color: rgb(53, 60, 69);
              font-size:18px;
              padding:0 25px!important;
            }
            .el-menu--horizontal>.is-active {
                color:#0D70EE!important;
                background:transparent;
                border-bottom: 5px solid rgba(13,112,238,1)!important;
                border-radius: 3px!important;
            }
        }
        .lineF{
            width:1160px;
            height:1px;
            background:linear-gradient(90deg,rgba(238,238,238,0) 0%,rgba(216,216,216,1) 53%,rgba(216,216,216,0) 100%);
            position: absolute;
            left: 50%;
            margin-left: -580px;
            bottom: 2px;
        }
        .el-breadcrumb{
            background: #2a2a2a;
            height: 30px;
            color: #fff;
            line-height: 30px;
            padding-left: 0.5rem;
        }

        
    }
    .el-submenu__title i, .el-breadcrumb__inner,.el-breadcrumb__inner.is-link{
        color: #fff!important;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: none!important;
    }
    .el-menu--horizontal>.el-menu-item{
        height: 70px!important;
        line-height: 70px!important;
    }
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
        color: #303133!important;
    }
    
    /*移动端or低分辨率样式补丁*/
    @media (max-device-width:768px ){
        .logo {
            position: static!important;
            margin-left: 4%;
        }
        .menu{
            margin: 0;
        }
    }
</style>
