# 文件结构说明
```sh
root-folder/
    document/           //说明性文件
    node_modules/       //安装的依赖包文件
    public/             //不需要编译的纯静态资源，vite对该文件有特殊处理
    src/                //所有需要构建编译的内容
        api/            //储存和接口封装相关的文件
        asset/          //静态资源
        componts/       //组件
        composable/     //组合api的封装
        layout/         //布局
        plugins/        //插件相关的
        router/         //路由相关
        store/          //容器
        style/          //全面样式
        utils/          //工具相关的
        views/          //路由页面
        App.vue         //项目的根组件
        env.t.ds
        main.ts         //项目的启动入口
    index.html          //单页面文件

```