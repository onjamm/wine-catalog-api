import { Router } from "express";
import express from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = Router();

//Get all wines
router.get("/wines", wineController.getAllWines);

//Get wine by id
router.get("/wines/:id", wineController.getWineById);

//create Wine
router.post("/wines", wineController.createWine);

//Put wine record 
router.put("/wines/:id", wineController.updateWine);

//Delete wine record
router.delete("/wines/:id", wineController.deleteWine);

router.get("/", (req, res) => {
    res.render("default", {
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});

export default router;