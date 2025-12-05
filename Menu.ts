import readlinesync = require("readline-sync");
import { colors } from "./scr - camada de organização/ util - camada de recursos auxiliares/Colors";

export function main(){ //função main e exportamos ela

    let opcao: number; //opção do usuário no menu

    while (true) {  //inicia o loop while


console.log(colors.bg.black, colors.fg.yellow,
    "**************************************************************************************");
console.log("                                                                                      ");
console.log("                                   BANCO DO BRAZIL COM Z                              ");
console.log("                                                                                      ");
console.log("**************************************************************************************");
console.log("                                                                                      ");
console.log("                                  1 - Criar Conta                                     ");
console.log("                                  2 - Listar Todas As Contas                          ");
console.log("                                  3 - Buscar Conta Por Número                         ");
console.log("                                  4 - Atualizar Dados da Conta                        ");
console.log("                                  5 - Apagar Conta                                    ");
console.log("                                  6 - Sacar                                           ");
console.log("                                  7 - Depositar                                       ");
console.log("                                  8 - Transferir Valores Entre Contas                 ");
console.log("                                  9 - Sair                                            ");
console.log("                                                                                      ");
console.log("**************************************************************************************");
console.log("                                                                                      ",
    colors.reset);

console.log("Entre com a opção desejada: ");
opcao = readlinesync.questionInt("");
 
        if (opcao == 9){
            console.log(colors.fg.greenstrong,
                "\nBacon do Brazil com Z - O Seu Futuro Começa AQui!")
                sobre();
                console.log(colors.reset, "");
                process.exit(0);
        }

switch(opcao) {
    case 1:
        console.log(colors.fg.whitestrong,
            "\n\nCriar Conta\n\n", colors.reset);

        keyPress()
        break;

    case 2:
        console.log(colors.fg.whitestrong,
            "\n\nListar Todas as Contas\n\n", colors.reset);

        keyPress()
        break;

    case 3:
        console.log(colors.fg.whitestrong,
            "\n\nConsultar Dados da Conta - por Númmero\n\n", colors.reset);

        keyPress()
        break;

    case 4:
        console.log(colors.fg.whitestrong,
            "\n\nAtualizar Dados da Conta\n\n", colors.reset);

        keyPress()
        break;

    case 5:
        console.log(colors.fg.whitestrong,
            "\n\nApagar Uma Conta\n\n", colors.reset);

        keyPress()
        break;

    case 6:
        console.log(colors.fg.whitestrong,
            "\n\nSaque\n\n", colors.reset);

        keyPress()
        break;
    
    case 7:
        console.log(colors.fg.whitestrong,
            "\n\nDepósito\n\n", colors.reset);

        keyPress()
        break;

    case 8:
        console.log(colors.fg.whitestrong,
            "\n\nTransferência Entre Contas\n\n", colors.reset);

        keyPress()
        break;

        default:
            console.log(colors.fg.whitestrong,
                "\nOpção Inválida!\n", colors.reset);

        keyPress()
        break;

}


}

}

export function sobre(): void {     //function sobre tipo void
    console.log("\n*********************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Nicolas Fernando Clemente - nicolasfernando724@gmail.com");
    console.log("https://github.com/NicolasClementedt");
    console.log("\n*********************************************");
}

function keyPress(): void {     //função para adicionar as pausas para o usuário confirmar as etapas
    console.log(colors.reset, "");
    console.log("\nPressione Enter Para Continuar...")

    readlinesync.prompt();
}

main();