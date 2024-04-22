import { Fornecedor } from "../entities/fornecedor";

export class FornecedorController {
    public fornecedores : Array<Fornecedor>

    constructor(){
        this.fornecedores = []
    }

    public novo(fornecedor : Fornecedor){
        this.fornecedores.push(fornecedor)
    }

    private findIndex(fornecedor : Fornecedor) {
        var counter = 0
        var index = 0
        this.fornecedores.forEach(element => {
            if (element.id == fornecedor.id) {
                index = counter                
            } else { counter += 1}
        })
        return index
    }

    public update(fornecedor : Fornecedor) {
        this.fornecedores[this.findIndex(fornecedor)] = fornecedor
    }

    public delete(index : number) {
        this.fornecedores.splice(index,1)

    }



}
