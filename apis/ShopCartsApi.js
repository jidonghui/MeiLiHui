/**
 * 作者：姚美倩
 * @type {{getShopCartData: module.exports.getShopCartData}}
 */
module.exports={

    getShopCartData:function(cb){
        /**
         * 获取购物车数据
         */
        fetch("./apis/carts.json").then((data)=>{
            data.json().then((data)=>{
                    cb(data);
                 })
        })
    }
};