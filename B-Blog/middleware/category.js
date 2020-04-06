const Category = require('../model/category')

/**
 * 文章类目中间件
 */
module.exports = {
    //获取文章类目列表
    getList: (req,res,next) => {
        Category.getList().then(results => {
            req.categories = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //根据编号获取栏目详情
    getCategoryById: (req,res,next) => {
        let id = req.params.id;
        Category.getCategoryById(id).then(results => {
            req.category = results
            next()
        }).catch(err => {
            next(err)
        })
    }
}