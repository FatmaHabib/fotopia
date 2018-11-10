---
to: app/services/<%= name %>.service.js
---
"use strict";
var <%= Name %> = require('../models/<%= name %>.model')


_this = this

exports.get<%=  h.inflection.pluralize(Name) %>= async function(query, page, limit){

    var options = {
        page,
        limit
    }
    
    try {
        var <%=  h.inflection.pluralize(name) %> = await <%= Name %>.paginate(query, options)      
        return <%=  h.inflection.pluralize(name) %>;

    } catch (e) {
        throw Error('Error while Paginating Todos')
    }
}

exports.create<%= Name %> = async function(<%= name %>){
    var new<%= Name %> = new <%=  Name %>(<%= name %>)

    try{


        var saved<%= Name %>  = await new<%= Name %> .save()

        return saved<%= Name %> ;
    }catch(e){
        throw Error("Error while Creating Todo")
    }
}

exports.update<%= Name %>  = async function(<%= name %> ){
    var id = <%= name %>.id

    try{
        
    
        var old<%= Name %>  = await <%= Name %> .findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    

    if(!old<%= Name %> ){
        return false;
    }

    

    

    old<%= Name %> .title = todo.title
    oldTodo.description = todo.description
    old<%= Name %> .status = todo.status


    console.log(oldTodo)

    try{
        var savedTodo = await oldTodo.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the <%= Name %> ");
    }
}

exports.delete<%= Name %> = async function(id){
    
    

    try{
        var deleted = await <%= Name %> .remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("<%= Name %>  Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the <%= Name %> ")
    }
}