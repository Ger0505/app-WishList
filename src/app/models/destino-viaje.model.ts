export class DestinoViaje{
    // nombre:string;
    // imagenURL: string;
    private selected: boolean;
    private servicios: string[];
    public id: string;

    constructor(public nombre:string, public imagenURL:string){
        this.servicios = ['Hospital','Luz','Internet'];
        this.id = '0';
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