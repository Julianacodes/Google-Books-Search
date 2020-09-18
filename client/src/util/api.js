import axios from "axios"

export default { 
    getGoogleBooks: function(title){
        console.log(title)
        return axios.get("/api/googleBooks/"+title)
    },
    saveBooks: function(newBook){
        return axios.post("/api/googleBooks",newBook)
    },
    deleteBooks: function(bookId){
        return axios.delete("api/googleBooks/"+bookId)
    },
    getBooks: function(){
        return axios.get("/api/books")
    }
}