import Stock from "../models/StockModel.js"

export const getStocks = async (req, res) => {
    try {
        const stocks = await Stock.find()
        res.json(stocks)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getStockById = async (req, res) => {
    try {
        const stocks = await Stock.findById({_id: req.params.id})
        res.json(stocks)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const saveStock = async (req, res) => {
    const stock = new Stock(req.body)
    try {
        const insertedstock = await stock.save()
        res.status(201).json(insertedstock)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateStock = async (req, res) => {
    try {
        const updatedstock = await Stock.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updatedstock)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteStock = async (req, res) => {
    try {
        const deletedstock = await Stock.deleteOne({_id: req.params.id})
        res.status(200).json(deletedstock)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}