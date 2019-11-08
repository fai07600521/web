import BaseStore from './BaseStore';
import axios from 'axios';
import { api } from '../config/config';


export class EventStore extends BaseStore {
    constructor() {
        super();
        this.observable({
            loading: false,
            EventList:[]
        });
    }

    async initData(){
        try {
            console.log("getttttt in ok")
            const response = await axios.get(`http://localhost:3007/`);
            console.log("response",response);
            if(response.status === 200){
               this.EventList = response.data; 
            }
            //console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
}


export default new EventStore();
