import {INURL} from "../constants/IndexConst";
import IndexApi from "../pages/Index.vue";
module.exports={
	//获取数据列表的数据
	/**	通过用户json数据获取信息列表
	 * 
	 * @param {Object} cb
	 */
	getIndex:function(cb){
		
		fetch(INURL).then((data)=>{
//			console.log(data)
			data.json().then((data)=>{
				 cb(data);
				
//				console.log(this.IndexToday)
			})
		})
	}
}

//module.exports={
//  /**
//   * 通过用户编号来获取商品信息
//   * @param cb
//   */
//  getIndex:function(cb){
//      fetch("./index.json").then((data)=>{
//          data.json().then((data)=>{
//              cb(data);
//          })
//      })
//  }
//}

