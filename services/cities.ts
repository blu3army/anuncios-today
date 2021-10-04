import City from "../interfaces/City";
import {db} from './firebase';
import {collection, getDocs, query, where, doc, getDoc} from 'firebase/firestore';


export class CitiesService{

    citiesRef:string;
    
    constructor(ref:string = 'cities'){
        this.citiesRef = ref;
    }

    async getCities() {
        
        var arr = [];

        console.log("getCities city exec");
        
        const querySnapshot = await getDocs(collection(db, this.citiesRef));

        querySnapshot.forEach((doc)=>{

            arr.push(doc.data());

        });

        return arr;
    }






    async getCity(codeCity:any){
        
        const docRef = doc(db, this.citiesRef, codeCity);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            
            return docSnap.data();
        }
        else{
            console.log("no document");
        }



    }


    async searchCity(_query:string){
        
        console.log("Search city exec");
        
        
        var arr = [];
        
        const ref = collection(db, this.citiesRef);
        const q = query(ref, where('name', '==', _query));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc)=>{
            console.log("busqueda",doc.id, doc.data());
        });
        
    }

}