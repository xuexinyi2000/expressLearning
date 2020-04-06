/**
 * 文章类目数据模型
 */

module.exports = class Category extends require('./model') {
    /**
     * 获取文章类目列表
     */
    static getList() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,`name` FROM `category` ORDER BY `index` DESC;'
            this.query(sql).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取文章类目列表失败：${err.message}`)
                reject(err)
            })
        })
    }

    /**
     * 根据编号获取栏目详情
     * @param {interger} id 栏目编号
     */
    static getCategoryById(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,`name`,`index` FROM `category` WHERE id = ?'
            this.query(sql,id).then(results => {
                resolve(results[0])
            }).catch(err => {
                console.log(`根据编号获取栏目名字失败：${err.message}`)
                reject(err)
            })
        })
    }
}