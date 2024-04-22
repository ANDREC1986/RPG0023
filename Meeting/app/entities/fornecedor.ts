import  uuid from "react-native-uuid";

export class Fornecedor {
    public id : String;
    public nome : String;
    public contato : String;
    public logradouro : String;
    public cidade : String;
    public estado : String;
    public logotipo : String;
    public categoria : String;
    public galeria : Array<String>

    constructor(nome : String, contato : String, logradouro : String, cidade: String, estado : String, logo : String, categoria : String, galeria : Array<String>, id? : String){
        this.nome = nome;
        this.contato = contato;
        this.logradouro = logradouro;
        this.cidade = cidade;
        this.estado = estado,
        this.logotipo = logo;
        this.categoria = categoria;
        this.galeria = galeria;
        if (!id) {
            this.id = uuid.v1().toString();
        } else {
            this.id = id;
        }
    }
}