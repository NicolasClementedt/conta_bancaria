import readlinesync = require ("readline-sync");
import { colors } from './src/util/Colors';

export function main() {

    let opcao: number;

    while (true) {

console.log(colors.bg.black, colors.fg.yellow,    
            "***************************************************************************************")
console.log("                                                                                       ")
console.log("                      BANCO DO BRAZIL COM Z                                            ")
console.log("                                                                                       ") 
console.log("***************************************************************************************")
console.log("                                                                                       ")  
console.log("                  1 - Criar Conta                                                      ")
console.log("                  2 - Listar Todas As Contas                                           ")
console.log("                  3 - Buscar Contas Por Numero                                         ")
console.log("                  4 - Atualizar Dados Da Conta                                         ")
console.log("                  5 - Apagar Conta                                                     ")
console.log("                  6 - Sacar                                                            ")
console.log("                  7 - Depositar                                                        ")
console.log("                  8 - Transferir Valores Entre Contas                                  ")
console.log("                  9 - Sair                                                             ")
console.log("                                                                                       ")
console.log("***************************************************************************************")
console.log("                                                                                       ",
colors.reset)

console.log("Entre com a opção desejada: ");
opcao = readlinesync.questionInt("");

if (opcao == 9){
    console.log(colors.fg.greenstrong,
        "\nBanco do Brasil com Z - O Seu Futuro Começa Aqui! ");
   sobre();
   console.log(colors.reset, "");
   process.exit(0);

}
switch (opcao){
    case 1:
        console.log(colors.fg.whitestrong,
            "\n\nCriar Conta\n\n", colors.reset);
       
        KeyPress()
        break;

        case 2:
            console.log(colors.fg.whitestrong,
                "\n\nListar Todas As Contas\n\n", colors.reset);
            
        KeyPress()
        break

        case 3:
            console.log(colors.fg.whitestrong,
                "\n\nConsultar Dados Da Conta - Por Número\n\n", colors.reset);
           
        KeyPress()
        break

        case 4:
            console.log(colors.fg.whitestrong,
                "\n\nAtualizar Dados Da Conta\n\n", colors.reset);
           
        KeyPress()
        break

        case 5:
            console.log(colors.fg.whitestrong,
                "\n\nApagar Uma Conta\n\n", colors.reset);
            
        KeyPress()
        break
        
        case 6:
            console.log(colors.fg.whitestrong,
                "\n\nSaque\n\n", colors.reset);
            
        KeyPress()
        break

        case 7:
            console.log(colors.fg.whitestrong,
                "\n\nDepósito\n\n", colors.reset);
            
        KeyPress()    
        break

        case 8:
            console.log(colors.fg.whitestrong,
                "\n\nTransferência Entre Contas\n\n", colors.reset)
            
         KeyPress()    
         break

        default:
            console.log(colors.fg.whitestrong,
                "\nOpção Inválida!\n", colors.reset)
              
        KeyPress()
        break

}

}

}

function KeyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione Enter Para Continuar...");
    readlinesync.prompt();
}


export function sobre(): void{
    console.log("\n**********************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Nicolas Fernando Clemente - nicolasfernando724@gmail.com");
    console.log("link do github");
    console.log("\n**********************************************");
}
main();