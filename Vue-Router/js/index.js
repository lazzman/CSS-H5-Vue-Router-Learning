/**
 * Created by Elifer on 2017/7/17.
 */
    //        创建首页组件
var indexComponent = Vue.extend({
        template: "#indexPage",
        data: function () {
            return {
                msg: 'Hello,this is index Page!'
            }
        },
        methods:{

        },
        mounted: function() {
            this.msg = "哈哈";
        },
    })

//        创建第二页组件
var twoComponent = Vue.extend({
    template: "#twoPage",
    data: function () {
        return {
            msg: 'Hello,this is two Page!'
        }
    }
})

//        创建第三页组件
var threeComponent = Vue.extend({
    template: "#threePage",
    data: function () {
        return {
            msg: 'Hello,this is three Page!'
        }
    }
})

//        创建路由
var router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "homePage",
            component: indexComponent
        }, {
            path: "/two",
            name: "twoPage",
            component: twoComponent
        }, {
            path: "/three",
            name: "/threePage",
            component: threeComponent
        }
    ]
});

var app = new Vue({
    el:"#app",
    router: router,
    date: {
        msg: "这是全局变量",
    },
    // 当用户刷新页面时，自动跳转到首页
    created: function () {
        router.push("/");
    }
}).$mount("#app");
