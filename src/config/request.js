/*var article=require('./request/article.js');
 console.log(article);*/

/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
var request = [{
  module: 'user',
  name: '用户管理',
  list: require('./request/user.js')
},{
  module: 'order',
  name: '订单管理',
  list: require('./request/order.js')
}, {
  module: 'open',
  name: '第三方接入',
  list: require('./request/open.js')
},{
  module: 'task',
  name: '定时任务',
  list: require('./request/task.js')
},{
  module: 'bean',
  name: 'spring bean',
  list: require('./request/bean.js')
}];

module.exports = request;


