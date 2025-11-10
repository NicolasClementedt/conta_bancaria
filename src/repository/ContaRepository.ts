import { Conta } from "../model/Conta";

export interface ContaRepository {


    //CRUD da conta
    procurarPorNumero(numero: number): void
    listarTodos(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    //  MÉTODOS OPERAÇÕES BANCÁRIAS
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(nuneroOrigen: number, numeroDestino: number, valor: number): void;
    
}