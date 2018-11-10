"use strict";
var Product = require('../models/product.model')


_this = this

exports.getProducts= async function(query, page, limit){

    var options = {
        page,
        limit
    }
    
    try {
        var products = await Product.paginate(query, options)      
        return products;

    } catch (e) {
        throw Error('Error while Paginating Todos')
    }
}

exports.createProduct = async function(product){
    var newProduct = new Product(product)

    try{


        var savedProduct  = await newProduct .save()

        return savedProduct ;
    }catch(e){
        throw Error("Error while Creating Todo")
    }
}

exports.updateProduct  = async function(product ){
    var id = product.id

    try{
        
    
        var oldProduct  = await Product .findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    

    if(!oldProduct ){
        return false;
    }

    

    

    oldProduct .title = todo.title
    oldTodo.description = todo.description
    oldProduct .status = todo.status


    console.log(oldTodo)

    try{
        var savedTodo = await oldTodo.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the Product ");
    }
}

exports.deleteProduct = async function(id){
    
    

    try{
        var deleted = await Product .remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Product  Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Product ")
    }
}