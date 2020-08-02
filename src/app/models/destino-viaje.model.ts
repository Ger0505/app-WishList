export class DestinoViaje{
    // nombre:string;
    // imagenURL: string;
    private selected: boolean;
    private servicios: string[];

    constructor( public nombre:string, public imagenURL:string){
        this.servicios = ['Hospital','Luz','Internet'];
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

}