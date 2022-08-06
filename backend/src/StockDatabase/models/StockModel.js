import mongoose from "mongoose";

const stock = mongoose.Schema({
    nama_barang:{
        type: String,
        required: true
    },
    jumlah:{
        type: Number,
        required: true
    },
    nama_supplier_stock:{
        type: String,
        required: true,
    },
    tgl_masuk:{
        type: Date,
        required: true,
    },
    kategori:{
        type: String,
        required: true,
    }
})

export default mongoose.model('Stocks', stock)