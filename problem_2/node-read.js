const json = require('./domains.json')
let Ids = [];
json.domains.map((data) => {
    if (data.list) {
        data.list.map(listData => {
            Ids.push(listData.listId)
        })
    } else if (data.children) {
        data.children.map(childrenList => {
            if (childrenList.list) {
                childrenList.list.map(subList => {
                    Ids.push(subList.listId)
                })  

            } else if (childrenList.children) {
                childrenList.children.map(listData2 => {
                    if (listData2.list) {
                        listData2.list.map(lists => {
                            Ids.push(lists.listId)
                        })
                    } else if (listData2.children) {
                        listData2.children.map(list1 => {
                            if (list1.list) {
                                list1.list.map(list3 => {
                                    Ids.push(list3.listId)
                                })
                            } 
                        })
                    }
                })
            }
           
        })
    }
})
console.log(Ids)