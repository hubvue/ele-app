const moduleLego = {
    state: {
        theme: {
            name: "品质套餐",
            message: "搭配齐全吃得好",
            image: "https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/",
            path: "lego"
        }
    },
    getters: {
        getLego: state => state.theme,
    }
}

export default moduleLego;