import { Router } from "express";
import {films} from "../controllers/get_films_genre.controller.js";


  const router = Router();

  router.get("/films_genre:id", films);

  export default router;