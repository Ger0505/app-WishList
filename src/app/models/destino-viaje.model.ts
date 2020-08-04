import { v4 as uuidv4 } from 'uuid';

export class DestinoViaje{
    private selected: boolean;
    private servicios: string[];
    public id: string;
    public votes: number = 0;

    constructor(public nombre:string, public imagenURL:string){
        this.servicios = ['Hospital','Luz','Internet'];
        this.id = uuidv4();
    }

    getServicios():string[]{
        return this.servicios;
    }

    isSelected():boolean {
        return this.selected;
    }

    setSelected(selected: boolean){
        this.selected = selected;
    }

    voteUp(){
        this.votes++;
    }

    voteDown(){
        this.votes--;
    }

}