const {schema, model, Schema}= require('mongoose');

const RoleSchema = Schema({
    role:{
        type: String,
        required: [true, 'El role es obligatorio']
    }

});

module.exports = model ('Role', RoleSchema);