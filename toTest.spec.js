const { eq } = require("lodash");

describe("toTest", () =>{

    beforeEach(() => cy.visit("http://localhost/siteelis/toTest.html"));
    
    /*Capturar header do formulário*/
    it("Capturar header 'Campo de Treinamento' do formulário", () =>{
        cy.get("#elementosForm").should("contain", "Campo de Treinamento");      
    });

    /*Testes em botões*/
    it("Click no botão 'Clique Me!'", () =>{
        cy.get('input[id="buttonSimple"]').click();
    });
    it("Click no botão 'Abrir Popup'", () =>{
        cy.get('input[id="buttonPopUpEasy"]').click();
    });
    it("Click no botão 'Abrir P opup do Mal'", () =>{
        cy.get('input[id="buttonPopUpHard"]').click();
    });
    it("Click no botão 'Resposta Demorada'", () =>{
        cy.get('input[id="buttonDelay"]').click();
    });

    /*Testes preenchimento dos campos texto*/
    it("Preencher campo nome e sobrenome", () =>{
        cy.get('input[name="elementosForm:nome"]').type("Elislainy");
        cy.get('input[name="elementosForm:sobrenome"]').type("Silva");
     });

     /*Testes seleção dos radio buttons sexo*/
     it("Selecionar o sexo masculino", () =>{
        cy.get('input[id="elementosForm:sexo:0"]').check();
     });

    it("Selecionar o sexo feminino", () =>{
        cy.get('input[id="elementosForm:sexo:1"]').check();
     });
  
    /*Testes selecionar e desselecionar os checkbox comida favorita*/
    it("Selecionar qual sua comida favorita", () =>{
        cy.get('input[id="elementosForm:comidaFavorita:0"]').check().uncheck();
        cy.get('input[id="elementosForm:comidaFavorita:1"]').check().uncheck();
        cy.get('input[id="elementosForm:comidaFavorita:2"]').check().uncheck();
        cy.get('input[id="elementosForm:comidaFavorita:3"]').check().uncheck();
        
    });
 
    /*Testes seleção da lista de escolaridade*/
    it("Selecionar escolaridade", () =>{
        cy.get('select[name="elementosForm:escolaridade"]').select("1grauincomp");
        cy.get('select[name="elementosForm:escolaridade"]').select("1graucomp");
        cy.get('select[name="elementosForm:escolaridade"]').select("2grauincomp");
        cy.get('select[name="elementosForm:escolaridade"]').select("2graucomp");
        cy.get('select[name="elementosForm:escolaridade"]').select("superior");
        cy.get('select[name="elementosForm:escolaridade"]').select("especializacao");
        cy.get('select[name="elementosForm:escolaridade"]').select("mestrado");
        cy.get('select[name="elementosForm:escolaridade"]').select("doutorado");
    });

    /*Testes seleção da lista de esportes*/
    it("Selecionar pratica esportes", () =>{
        cy.get('select[id="elementosForm:esportes"]').select("natacao");
        cy.get('select[id="elementosForm:esportes"]').select("futebol");
        cy.get('select[id="elementosForm:esportes"]').select("Corrida");
        cy.get('select[id="elementosForm:esportes"]').select("Karate");
        cy.get('select[id="elementosForm:esportes"]').select("nada");  
    });

    /*Testes preenchimento da caixa de texto sugestões*/
    it("Preenchimento da caixa de texto sugestões", () =>{
        cy.get('textarea[name="elementosForm:sugestoes"]').type("Vôlei, Judô, Handebol, Ginastica, Hipismo");
    });
    /*Testes clicar no botão da tabela clique aqui*/ 
    it("Selecionar o clique aqui", () =>{
        cy.get('input[value="Clique aqui"]').eq(0).click();
        cy.get('input[value="Clique aqui"]').eq(1).click();
        cy.get('input[value="Clique aqui"]').eq(2).click();
        cy.get('input[value="Clique aqui"]').eq(3).click();
        cy.get('input[value="Clique aqui"]').eq(4).click();
             
     });
     /*Testes clicar no checkbox da tabela */ 
    it("Selecionar os checkboxs", () =>{
        cy.get('input[type="checkbox"]').eq(4).check().uncheck();
        cy.get('input[type="checkbox"]').eq(5).check().uncheck();
        cy.get('input[type="checkbox"]').eq(6).check().uncheck();
        cy.get('input[type="checkbox"]').eq(7).check().uncheck();
        cy.get('input[type="checkbox"]').eq(8).check().uncheck();
     });

    /*Testes de selecionar os radio buttons da tabela */ 
    it("Selecionar os radio buttons", () =>{
        cy.get('input[type="radio"]').eq(2).check();
        cy.get('input[type="radio"]').eq(3).check();
        cy.get('input[type="radio"]').eq(4).check();
        cy.get('input[type="radio"]').eq(5).check();
        cy.get('input[type="radio"]').eq(6).check();
    });    

    /*Testes de selecionar os radio buttons da tabela */ 
    it("digitar na input da tabela", () =>{
        cy.get('input[type="text"]').eq(2).type("Francisco");
        cy.get('input[type="text"]').eq(3).type("Maria");
        cy.get('input[type="text"]').eq(4).type("Usuario A");
        cy.get('input[type="text"]').eq(5).type("Doutorado");
        cy.get('input[type="text"]').eq(6).type("Usuário B");
    });    

    /*Testes preenchimento da tabela*/
    it("Selecionar tabela", () =>{
          cy.get('input[name="elementosForm:tableUsuarios:2:j_idt440"]').click();
    });

    /*Testes tentar cadastrar usuário sem preencher o campo obrigatório nome*/
    it("Clicar no botão cadastro sem preencher o campo obrigatório nome", () =>{
        cy.get('input[name="elementosForm:cadastrar"]').click();
    });

    /*Testes cadastrar usuário com alert sobrenomenome é obrigatório*/
    it("Clicar no botão cadastro sem digitar os campo obigatorio sobrenome", () =>{
        cy.get('input[name="elementosForm:nome"]').type("Elislainy");
        cy.get('input[name="elementosForm:cadastrar"]').click();
    });

    /*Testes cadastrar usuário com alert sexo é obrigatório*/
    it("Clicar no botão cadastro sem clicar no campo obrigatorio sexo", () =>{
        cy.get('input[name="elementosForm:nome"]').type("Elislainy");
        cy.get('input[name="elementosForm:sobrenome"]').type("Silva");
        cy.get('input[name="elementosForm:cadastrar"]').click(); 
    });

    /*Teste no botão voltar*/
    it("Clicar no botão voltar", () =>{
        cy.contains('Voltar').click();
    });

    /*Teste no botão Alert*/
    it("Clicar no botão 'Alert'", () =>{
        cy.get('input[id="alert"]').click();
    });

    /*Teste no botão Confirm*/
    it("Clicar no botão 'Confirm'", () =>{
        cy.get('input[id="confirm"]').click();       
    });

    /*Teste no botão Confirm*/
    it("Clicar no botão 'Prompt'", () =>{
        cy.get('input[id="prompt"]').click();      
    });

    /*Preencher e limpar o formulário*/
    it("Preencher e limpar o cadastro do formulário'", () =>{
        cy.get('input[name="elementosForm:nome"]').type("Elislainy");
        cy.get('input[name="elementosForm:sobrenome"]').type("Silva");
        cy.get('input[id="elementosForm:sexo:1"]').check();
        cy.get('select[name="elementosForm:escolaridade"]').select("superior");
        cy.get('input[id="elementosForm:comidaFavorita:0"]').check();
        cy.get('input[id="elementosForm:comidaFavorita:3"]').check();
        cy.get('select[id="elementosForm:esportes"]').select("futebol");
        cy.get('textarea[name="elementosForm:sugestoes"]').type("Vôlei, Judô, Handebol, Ginastica, Hipismo");
        cy.get('input[name="elementosForm:cadastrar"]').click();
        cy.get('a[href="#"]').click();
    });

});
