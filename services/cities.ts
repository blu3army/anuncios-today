import City from "../interfaces/City";
import {db} from './firebase';
import {collection, getDocs} from 'firebase/firestore';

export class CitiesService{

    citiesRef:string;
    
    constructor(ref:string = 'cities'){
        this.citiesRef = ref;
    }

    async getCities() {
        
        var arr = [];

        console.log("PATH" , this.citiesRef);
        
        const querySnapshot = await getDocs(collection(db, this.citiesRef));

        querySnapshot.forEach((doc)=>{

            arr.push(doc.data());

        });

        return arr;
    }

}