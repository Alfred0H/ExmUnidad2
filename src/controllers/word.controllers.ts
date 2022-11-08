import { Router, Request, Response } from "express";
import WordService from "../services/word.service";

class WordController{

    router = Router();
    constructor() {
        this.initRouters();

    }
    initRouters(){
        this.router.get('/palabra/animal/:id', WordService.getOneAnimal);

        this.router.get('/palabra/fruta/:id', WordService.getOneFruta);

        this.router.get('/palabra/pais/:id', WordService.getCountry);

        this.router.get('/palabra/telefono/:id', WordService.getSmartPhone);

        this.router.get('/animal/:name', WordService.getNameAnimal);

        this.router.get('/fruta/:name', WordService.getNameFruits);

        this.router.get('/pais/:name', WordService.getNameCountry);

        this.router.get('/telefono/:name', WordService.getNameSmartPhone);

        this.router.post('/palabra', WordService.create);

    }
}

export default new WordController();