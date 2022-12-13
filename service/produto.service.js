import api from "../api";
export default {
    async getProdutos() {
        const resultado = await api.get("/products");
        return resultado.data;
    },
    async getProduto(id){
        const resultado = await api.get (`/Products/${id}`);
        return resultado.data;
    },
    async createProduto(data){
        const resultado = await api.post ("/products", {
        image : "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        name: data.name,
        category: data.category,
        price: data.price,
        createdAt : new Date().toLocaleDateString(),
        


        });
        
       
        return resultado.data;
    },
    async updateProduto(data,id){
        const resultado = await api.put (`products/${id}`, {
        image : "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        name: data.name,
        category: data.category,
        price: data.price,
        createdAt : new Date().toLocaleDateString(),
        


        });
        
       
        return resultado.data;
    },
};