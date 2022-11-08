import { plainToClass } from 'class-transformer';
import {Request, Response, text} from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database/connection';
import { Animal } from '../models/models-animal';
import { Fruit } from '../models/models-fruit';
import { Country } from '../models/models-countries';
import { SmartPhone } from '../models/models-smartphone';
class WordService{

    public async getOneAnimal( req: Request, res: Response ): Promise <Response> {
       
        const id = parseInt(req.params.id);
        const response : QueryResult = await pool.query(
            'SELECT * FROM  animal  WHERE id = $1', [id]);
        
        const nameAnimal = response.rows['name']; 
        const adivineWord = [];
        let viewWord: string = '';
        let contador = nameAnimal.length + 1;

        for (let i = 0; i <nameAnimal.length; i++) {
                
        adivineWord[i] = '_';
        
        }

        viewWord = adivineWord.join(' ');

        while(contador < 0){
            if (this.getNameAnimal.name == nameAnimal ){

            return res.json({"Info"  : "Tu has ganado "

            })
           
        }else{
            
            contador --;

            }
           
            
        }
        return res.json({"Info"  : "Intenta otra vez "
        });
            
    }

    //fruta
    public async getOneFruta( req: Request, res: Response ): Promise <Response> {
       
        const id = parseInt(req.params.id);
        const response : QueryResult = await pool.query(
            'SELECT * FROM  fruits  WHERE id = $1', [id]);
        
        const nameFruta = response.rows['name']; 
        const adivineWord = [];
        let viewWord: string = '';
        let contador = nameFruta.length + 1;

        for (let i = 0; i <nameFruta.length; i++) {
                
        adivineWord[i] = '_';
        
        }

        viewWord = adivineWord.join(' ');

        while(contador < 0){
            if (this.getNameFruits.name == nameFruta ){

            return res.json({"Info"  : "Tu has ganado "

            })
           
        }else{
            
            contador --;

            }
           
            
        }
        return res.json({"Info"  : "Intenta otra vez "
        });
            
    }
    //pais
    public async getCountry( req: Request, res: Response ): Promise <Response> {
       
        const id = parseInt(req.params.id);
        const response : QueryResult = await pool.query(
            'SELECT * FROM  contries  WHERE id = $1', [id]);
        
        const namePais = response.rows['name']; 
        const adivineWord = [];
        let viewWord: string = '';
        let contador = namePais.length + 1;

        for (let i = 0; i <namePais.length; i++) {
                
        adivineWord[i] = '_';
        
        }

        viewWord = adivineWord.join(' ');

        while(contador < 0){
            if (this.getNameCountry.name == namePais ){

            return res.json({"Info"  : "Tu has ganado "

            })
           
        }else{
            
            contador --;

            }
           
            
        }
        return res.json({"Info"  : "Intenta otra vez "
        });
            
    }

    // telefonos inteligentes
    public async getSmartPhone( req: Request, res: Response ): Promise <Response> {
       
        const id = parseInt(req.params.id);
        const response : QueryResult = await pool.query(
            'SELECT * FROM  smartphones  WHERE id = $1', [id]);
        
        const nameTelefono = response.rows['name']; 
        const adivineWord = [];
        let viewWord: string = '';
        let contador = nameTelefono.length + 1;

        for (let i = 0; i <nameTelefono.length; i++) {
                
        adivineWord[i] = '_';
        
        }

        viewWord = adivineWord.join(' ');

        while(contador < 0){
            if (this.getNameSmartPhone.name == nameTelefono ){

            return res.json({"Info"  : "Tu has ganado "

            })
           
        }else{
            
            contador --;

            }
           
            
        }
        return res.json({"Info"  : "Intenta otra vez "
        });
            
    }


    public getNameAnimal = async (name: string): Promise<Animal | null> => {

        const palabra = await Animal.findOne({ attributes: ['name'],
                                                where: { name }});

        return palabra;

    };

    public getNameCountry = async (name: string): Promise<Country | null> => {

        const palabra = await Country.findOne({ attributes: ['name'],
                                                where: { name }});

        return palabra;

    };

    public getNameFruits = async (name: string): Promise<Fruit | null> => {

        const palabra = await Fruit.findOne({ attributes: ['name'],
                                                where: { name }});

        return palabra;

    };

    public getNameSmartPhone = async (name: string): Promise<SmartPhone | null> => {

        const palabra = await SmartPhone.findOne({ attributes: ['name'],
                                                where: { name }});

        return palabra;

    };

    //crear palabras para base de datos

    public async create( req: Request, res: Response ): Promise <Response> {
        
        const name = req.body.name;
        const category = req.body.category;        

        if ( category == "animal"){
            const newAnimal = await Animal.create({
                name
            })
            console.log({newAnimal});  

        }else if (category == "fruta"){

          const newFruit = await Fruit.create({
            name
        })  
            console.log({newFruit})
        }else if (category == "pais"){

            const newCountry = await Country.create({
              name
          })  
              console.log({newCountry})
          }else if (category == "telefono"){

            const newPhone = await SmartPhone.create({
              name
          })  
              console.log({newPhone})
          }
        return res.json({
            "Info"  : "Esto agraga la palabra: ", name, 
            "Categoria" : category
        });


    }

}

export default new WordService();