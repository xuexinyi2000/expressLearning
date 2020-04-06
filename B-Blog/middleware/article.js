const Article = require('../model/article')
const Tab = require('../model/tab')

/**
 * 文章中间件
 */
module.exports = {
    //获取热门文章
    getHot: (req, res, next) => {
        Article.getHot(3).then(results => {
            req.hots = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取最新文章
    getList: (req, res, next) => {
        Article.getList().then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //根据类目获取文章列表
    getListByCategoryId: (req, res, next) => {
        // console.log(req)
        let id = req.params.id
        Article.getListByCategoryId(id).then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取指定关键词的文章列表
    getListByKeyword: (req, res, next) => {
        // console.log(req)
        let keyword = req.query.keyword //表单，查询方式获取
        Article.getListByKeyword(keyword).then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取指定id的文章
    getArticleById: (req, res, next) => {
        let id = req.params.id;
        Article.getArticleById(id).then(results => {
            req.article = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取指定文章的标签列表
    getTabByArticleId: (req, res, next) => {
        let id = req.params.id;
        Tab.getTabByArticleId(id).then(results => {
            req.tabs = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取id文章的上一篇
    getPrev: (req, res, next) => {
        let id = req.params.id;
        Article.getPrevArticle(id).then(results => {
            req.prev = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    //获取id文章的下一篇
    getNext: (req, res, next) => {
        let id = req.params.id;
        Article.getNextArticle(id).then(results => {
            req.next1 = results
            next()
        }).catch(err => {
            next(err)
        })
    },
}