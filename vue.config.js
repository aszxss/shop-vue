module.exports={
    devServer:{
        open:true,
        proxy:{
            '/api':{
                target:'http://gmall-h5-api.atguigu.cn',
                // pathRewrite: {'^/api':''}
            }
        }

    }
}