/**
 * 作者：季东慧
 * 创建时间：2017.11.13
 * @type {{getProducts: module.exports.getProducts}}
 */
module.exports={
    /**
     * 通过用户编号来获取商品信息
     * @param cb
     */
    getProductsList:function(cb){
        fetch("./apis/products.json").then((data)=>{
            data.json().then((data)=>{
                cb(data)
            })
        })
    }
}