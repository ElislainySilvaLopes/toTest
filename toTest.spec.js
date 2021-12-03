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
        cy.get('input[id="elementosForm:comidaFavorita:0"]').check();
        cy.get('input[id="elementosForm:comidaFavorita:1"]').check();
        cy.get('input[id="elementosForm:comidaFavorita:2"]').check();
        cy.get('input[id="elementosForm:comidaFavorita:3"]').check();
        cy.get('input[id="elementosForm:comidaFavorita:0"]').uncheck();
        cy.get('input[id="elementosForm:comidaFavorita:1"]').uncheck();
        cy.get('input[id="elementosForm:comidaFavorita:2"]').uncheck();
        cy.get('input[id="elementosForm:comidaFavorita:3"]').uncheck();
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

    /*Testes preenchimento da tabela*/
    it("Selecionar tabela", () =>{
          cy.get('input[name="elementosForm:tableUsuarios:2:j_idt440"]').click();
    });

    /*Testes cadastrar usuário com alert nome é obrigatório*/
    it("Clicar no botão cadastro sem digitar os campos obrigatórios", () =>{
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
        cy.get('a[href="#"]').click();   
    });

    /*Teste no botão Alert*/
    it("Clicar no botão 'Alert'", () =>{
        cy.get('input[id="alert"]').click();
    });

    /*Teste no botão Confirm*/
    it("Clicar no botão 'Confirm'", () =>{
        cy.get('input[id="confirm"]').click();       
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
