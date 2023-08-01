import express from 'express'
import { createTour , deleteTour , updateTour , getSingleTour , getAllTour , getTourBySearch, 
getFeaturedTour,getTrendingTour,getaffordableTour,getDiscountTour,getSpecialPckages,getTourCount } from './../controllers/tourController.js';

const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js"

//create new tour
router.post('/', createTour);

//update tour
router.put('/:id',  updateTour);

//delete tour
router.delete('/:id',  deleteTour);

// getsingle tour
router.get('/:id', getSingleTour);

//get Alltour
router.get('/', getAllTour);

//get BySearch
router.get("/search/getTourBySearch", getTourBySearch);

//get FeaturedTours
router.get("/search/getFeaturedTours", getFeaturedTour);

//get TrendingTour
router.get("/search/getTrendingTour", getTrendingTour);

//get affordableTour
router.get("/search/getaffordableTour", getaffordableTour);

//get DiscountTour
router.get("/search/getDiscountTour", getDiscountTour);

//get SpecialPckages
router.get("/search/getSpecialPckages", getSpecialPckages);

//get Tourscount
router.get("/search/getTourCount", getTourCount );





export default router;

