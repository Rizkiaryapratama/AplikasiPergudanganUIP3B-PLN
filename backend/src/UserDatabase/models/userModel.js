import mongoose from "mongoose";

const user = mongoose.Schema({
    nama_barang:{
        type: String,
        required: true
    },
    peminjam:{
        type: String,
        required: true
    },
    tgl_pinjam:{
        type: Date,
        required: true,
    },
    tgl_kembali:{
        type: Date ,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

export default mongoose.model('Users', user)