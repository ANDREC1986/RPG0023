import { Fornecedor } from "../entities/fornecedor";

export class FornecedorController {
    public fornecedores : Array<Fornecedor>

    constructor(){
        this.fornecedores = []
    }

    public novo(nome : String,contato : String, logradouro : String,cidade : String,estado : String,logo : String,categoria : String,galeria : Array<String>){
        this.fornecedores.push(new Fornecedor(nome,contato,logradouro,cidade,estado,logo,categoria,galeria))
    }

    public list(){
        this.fornecedores.forEach(element => {
            console.log(element.id)
        });
    }
}