import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {createTour,deleteTour,getTour,getTours, getToursBySearch, getToursByTag, getToursByUser, updateTour} from "../controllers/tour.js";


router.get("/", getTours);
router.get("/:id", getTour);
router.post("/search",getToursBySearch);
router.get("/tag/:tag",getToursByTag);


router.post("/", auth ,createTour);
router.delete("/:id", auth,deleteTour);
router.patch("/:id", auth,updateTour);
router.get("/userTours/:id",auth, getToursByUser);
// router.get("/userTours/:id", getToursByUser); //without auth


export default router;