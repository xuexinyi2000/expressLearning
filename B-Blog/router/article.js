/**
 * 文章子应用
 */
const express = require('express')
const article = require('../middleware/article')
const category = require('../middleware/category')
const auth = require('../middleware/auth')

// 文章子应用
const articleApp = express()

articleApp.get('/list/:id', [article.getListByCategoryId, category.getList, category.getCategoryById,auth.getUser], (req, res) => {
    let { articles, categories, category,user } = req
    res.render('list', { articles: articles, categories: categories, category: category,user:user })
})


// 文章详情页
articleApp.get('/:id',[category.getList,article.getArticleById,article.getTabByArticleId,article.getPrev,article.getNext,auth.getUser],(req,res)=>{
    let {categories,article,tabs,prev,next1,user} = req
    res.render('article',{categories:categories,article: article,tabs:tabs,prev:prev,next1:next1,user:user})
})



module.exports = articleApp