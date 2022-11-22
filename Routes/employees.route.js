const express= require("express");
const Employees = require("../models/employees.model");

const router= express.Router();

router.get('/employees',(req,res) => {
    try{
        Employees.find((err,data) => {
            if(err){
                return res.status(400).send({message:"Error while retrieving an Employee data. Kindly check the data.."})
            }

            res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({ message: "Internal Server Error"})
    }

});

router.get('/employees/:empId',(req,res) => {
    try{
        Employees.findOne((err,data) => {
            if(err){
                return res.status(400).send({message: "Error while retrieving an employee data, kindly check the data.."})
            }
            res.status(200).send(data);
        })
    }catch(error){
        res.status(500).send({message:"Internal Server Error"})
    }
})

router.post('/employees', async (req,res) => {
    try{

        const newEmployee= new Employees(req.body);

        await newEmployee.save((err,data) => {
            if(err){
                return res.status(400).send({message: "Error while adding an Employee data, Kindly check the data.."})
            }

            res.status(201).send({ employeeId: data._id, message: "Employee data has been added successfully.. "})
        })

    }catch(error){
         res.status(500).send({ message: "Internal Server Error"})
    }

});

router.put('/employees/:empId', (req,res) => {
    try{
        Employees.findByIdAndUpdate({_id: req.params.empId},{$set: req.body}, (err,data) => {
            if(err){
                return res.status(400).send({message: "Error while updating an Employee data, Kindly check the data.."})
            }
            res.status(201).send({employeeId: data._id, message: "Employee data has been Updated.."})
        })
    }catch(error){
        res.status(500).send({ message: "Internal Server Error"})
    }

});

router.delete('/employees', (req,res) => {
    try{
        Employees.deleteOne({_id: req.params.empId}, (err,data) => {
            if(err){
                return res.status(400).send({message: " Employee data not found, Kindly check the data.."})
            }

            res.status(200).send({message: "Employee data has been deleted successfully"})
        })
    }catch(error){
        res.status(500).send({ message: "Internal Server Error"})
    }

});

module.exports= router;