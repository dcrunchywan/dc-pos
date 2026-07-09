const state = {

    products: [],

    filteredProducts: [],

    activeCategory: "Semua",

    searchKeyword: "",

    cart: []

}

export const posStore = {

    getState() {

        return state

    },

    setProducts(products) {

        state.products = [...products]

        state.filteredProducts = [...products]

    },

    setCategory(category) {

        state.activeCategory = category

    },

    setKeyword(keyword) {

        state.searchKeyword = keyword

    }

}