---
inject: true
to: app.js
before: app.listen
---
const <%= name %> = require('./app/routes/<%= name %>.route'); 
app.use("/<%= name %>s",<%= name %>);
