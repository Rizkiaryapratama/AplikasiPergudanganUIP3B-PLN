import Supplier from "../models/SupplierModel.js"

export const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find()
        res.json(suppliers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getSuppliersById = async (req, res) => {
    try {
        const suppliers = await Supplier.findById({_id: req.params.id})
        res.json(suppliers)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const saveSupplier = async (req, res) => {
    const supplier = new Supplier(req.body)
    try {
        const insertedsupplier = await supplier.save()
        res.status(201).json(insertedsupplier)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateSupplier = async (req, res) => {
    try {
        const updatedsupplier = await Supplier.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updatedsupplier)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteSupplier = async (req, res) => {
    try {
        const deletedsupplier = await Supplier.deleteOne({_id: req.params.id})
        res.status(200).json(deletedsupplier)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}