import mongoose from "mongoose";

const supplier = mongoose.Schema({
    nama_supplier:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    no_tlp:{
        type: String,
        required: true,
    }
})

export default mongoose.model('Suppliers', supplier)