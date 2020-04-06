/**
 * 文章数据模型
 */

module.exports = class Article extends require('./model'){
    /**
     * 获取热门推荐文章
     * @param {integer} num 条目数
     */
    static getHot(num) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title,content,`time`,thumbnail FROM article WHERE hot = 1 LIMIT ?'
            this.query(sql, num).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取热门推荐文章失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 获取文章列表
     */
    static getList(){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title,content,`time`,thumbnail FROM article ORDER BY time DESC'
            this.query(sql).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 根据类目获取文章列表
     * @param {integer} id 类目编号
     */
    static getListByCategoryId(id){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title,content,time FROM `article` WHERE category_id = ? ORDER BY time DESC'
            this.query(sql,id).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`根据类目获取文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 获取指定关键词的文章列表
     * @param {string} keyword 关键字
     */
    static getListByKeyword(keyword){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title,content,time FROM `article` WHERE title LIKE ? ORDER BY time DESC'
            this.query(sql,`%${keyword}%`).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`根据类目获取文章列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 获取指定id的文章
     * @param {integer} id 
     */
    static getArticleById(id){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT a.id,a.title,a.content,a.`time`,a.hits,a.category_id,c.`name` FROM `article` a,category c WHERE a.id = ? AND a.category_id = c.id'
            this.query(sql,id).then(results => {
                resolve(results[0])
            }).catch(err => {
                console.log(`获取指定id的文章失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 获取上一篇文章
     * @param {integer} id 当前文章编号
     */
    static getPrevArticle(id){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title FROM `article` WHERE id < ? ORDER BY id DESC LIMIT 1'
            this.query(sql,id).then(results => {
                resolve(results[0])
            }).catch(err => {
                console.log(`获取上一篇文章失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 获取下一篇文章
     * @param {integer} id 当前文章编号
     */
    static getNextArticle(id){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title FROM `article` WHERE id > ? ORDER BY id ASC LIMIT 1'
            this.query(sql,id).then(results => {
                resolve(results[0])
            }).catch(err => {
                console.log(`获取下一篇文章失败：${err.message}`)
                reject(err)
            })
        })
    }
}