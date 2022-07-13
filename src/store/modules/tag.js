export default {
    namespaced: true,
    state: {
        tagsArr: [{
            title: '控制台',
            path: "/"
        }]
    },
    mutations: {
        addTags(state, tag) {
            let data = state.tagsArr.find(item => item.path === tag.path)
            if (!data) {
                state.tagsArr.push(tag)
            }

        },
        moveTags(state, index) {
            state.tagsArr.splice(index, 1)
        }
    }
}
