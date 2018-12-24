<template>
    <div id='head_top'>
        <div class="top">
            <div class="logo">
                <img src="../../assets/images/index/memu_logo.png" alt="logo">
            </div>
            <div class="menu">
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="transparent"
                    text-color="#fff"
                    :router='true'
                    active-text-color="rgba(13,112,238,1)">
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="2">高企评测</el-menu-item>
                    <el-menu-item index="3">高企资助查询</el-menu-item>
                    <el-menu-item index="4">高企成本核算</el-menu-item>
                    <el-menu-item index="5">高企问答</el-menu-item>
                    <el-menu-item index="about">关于我们</el-menu-item>
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
                breadArr:[
                    {path:'2',title:'专题分析'},
                    {path:'2',title:'客运行业'},
                    {path:'2',title:'客运行业总体概览'},
                ],
            };
        },
       
        props: [],
        computed: {
            ...mapState([

            ]),
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
                // if(keyPath.length===3){
                //     this.breadArr = [
                //         {title:$('.target'+keyPath[0]+' .el-submenu__title').text(),path:keyPath[0]},
                //         {title:$('.target'+keyPath[1]+' .el-submenu__title').text(),path:keyPath[1]},
                //         {title:$('.target'+keyPath[2]).text(),path:keyPath[2]},
                //     ]
                // }else if(keyPath.length===2){
                //     this.breadArr = [
                //         {title:$('.target'+keyPath[0]+' .el-submenu__title').text(),path:keyPath[0]},
                //         {title:$('.target'+keyPath[1]).text(),path:keyPath[1]},
                //     ]
                // }else if(keyPath.length===1){
                //     this.breadArr = [
                //         {title:$('.target'+keyPath[0]).text(),path:keyPath[0]},
                //     ]
                // }
                // console.log(this.breadArr)
            }
        },
        mounted(){
            // console.log('jquery',$)
            window.onscroll = function(e){
                console.log(e,window.scrollY)
                if(window.scrollY >= 1017){
                    // alert('ljkl')
                    $('.top').css({'background':'#2a2a2a'});
                }else{
                    $('.top').css({'background':'transparent'});
                }
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
        .top{
            display: flex;
            min-height: 40px;
            height: 70px;
            justify-content: space-between;
            padding: 0 .5rem;
            // background:#1fbba6;
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
                // padding-right: 10px;
                float: left;
            };
            span{
                font-size: 0.15rem;
                color: #fff;
                font-weight: bold;
                float: left;
            }
        }
        .menu{
            margin: 0 auto;
            li{
              @include  fontStyle;  
              font-size:18px;
            }
            .el-menu--horizontal>.el-menu-item.is-active {
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
</style>
