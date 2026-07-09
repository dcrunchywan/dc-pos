const products = [
    {
        id: 1,
        sku: "AYM001",
        name: "Ayam Geprek Original",
        category: "Ayam",
        price: 15000,
        favorite: true,
        image: "",
        icon: "AG"
    },
    {
        id: 2,
        sku: "AYM002",
        name: "Ayam Geprek Keju",
        category: "Ayam",
        price: 18000,
        favorite: false,
        image: "",
        icon: "AG"
    },
    {
        id: 3,
        sku: "MIN001",
        name: "Es Teh Manis",
        category: "Minuman",
        price: 5000,
        favorite: false,
        image: "",
        icon: "EM"
    }
]

export const productRepository = {

    getAll() {
        return [...products]
    },

    getById(id) {
        return products.find(p => p.id === id)
    },

    getByCategory(category) {

        if (category === "Semua") {

            return [...products]

        }

        return products.filter(p => p.category === category)

    },

    search(keyword) {

        const query = keyword.trim().toLowerCase()

        if (!query) {

            return [...products]

        }

        return products.filter(product =>

            product.name.toLowerCase().includes(query)

        )

    }

}