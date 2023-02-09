// ./node_modules/.bin/cypress open

/// <reference types="cypress"/>
describe('realizar cadastro', () => {

    


    // Tela de home
    it('Tela de home ao clicar em cadastro o usuario deve ser direcionado para a referida tela', () => {
        cy.visit('http://127.0.0.1:5173')
        cy.get('[href="/Cadastro"]').click();
        cy.url()
        .should('be.equal','http://127.0.0.1:5173/Cadastro')
    });

    it('Tela de home ao clicar em login o usuario deve ser direcionado para a referida tela', () => {
        cy.visit('http://127.0.0.1:5173')
        cy.get('[href="/Login"]').click();
        cy.url()
        .should('be.equal','http://127.0.0.1:5173/Login')
    });
    // Tela de cadastro
    it('Ao clicar na logo o usuario séra direcionado a tela de home ', () => {
        cy.visit('http://127.0.0.1:5173/Cadastro');
        
        cy.get('[href="/"]').click();
        cy.url()
        .should('be.equal','http://127.0.0.1:5173/')
    });

    // it(' Não deve poder realizar cadastro pois a matricula é muito curta', ()=>{
    //     cy.visit('http://127.0.0.1:5173/Cadastro');
    //        //cy.get - buscar um elemento
    //      cy.get('[name=name]').type('Andinho');
    //      cy.get('[name=email]').type('m.andinho@escolar.ifrn.edu.br');
    //      cy.get('[name=password]').type('rg2255522');
    //      cy.get('[name=class]').type('TSI');
    //      cy.get('[name=registration]').type('');
    //      cy.get('.submitformbutton').click(); 
    //      cy.server();
    //     cy.route('post','**/users').as ('postlogin')
    //     cy.get('.submitformbutton').click(); 
    //     cy.wait('@postlogin').then((xhr)=> {
    //         expect(xhr.status).be.eq(409)
    //     })

    //  });

    
    

    it('O cadastro deve ser realizado', ()=>{
        cy.visit('http://127.0.0.1:5173/Cadastro');
        //cy.get - buscar um elemento
        //.type - insere um texto
        cy.get('[name=name]').type('Andinho');
        cy.get('[name=email]').type('m.andinho@escolar.ifrn.edu.br');
        cy.get('[name=password]').type('rg2208d3q21');
        cy.get('[name=class]').type('TSI');
        cy.get('[name=registration]').type('20211038060041');
        cy.server();
        cy.route('post','**/users').as ('postlogin')
        cy.get('.submitformbutton').click(); 
        cy.wait('@postlogin').then((xhr)=> {
            expect(xhr.status).be.eq(201)
        })

    });
    it('O cadastro deve ser realizado e aparecer a mensagem', ()=>{
        cy.visit('http://127.0.0.1:5173/Cadastro');
        //cy.get - buscar um elemento
        //.type - insere um texto
        cy.get('[name=name]').type('Andinhocachoeira');
        cy.get('[name=email]').type('m.andinhocachoeira@escolar.ifrn.edu.br');
        cy.get('[name=password]').type('rg2208d3q21');
        cy.get('[name=class]').type('TSI');
        cy.get('[name=registration]').type('20211038060047');
        cy.server();
        cy.route('post','**/users').as ('postlogin')
        cy.get('.submitformbutton').click(); 
        cy.wait('@postlogin').then((xhr)=> {
            expect(xhr.status).be.eq(201)
        })

    });

    
    
     it(' Não deve poder realizar cadastro pois a senha é muito curta', ()=>{
        cy.visit('http://127.0.0.1:5173/Cadastro');
           //cy.get - buscar um elemento
         cy.get('[name=name]').type('Andinho');
         cy.get('[name=email]').type('m.andinho@escolar.ifrn.edu.br');
         cy.get('[name=password]').type('rg2');
         cy.get('[name=class]').type('TSI');
         cy.get('[name=registration]').type('20211038060016');
         cy.get('.submitformbutton').click(); 
         cy.server();
        cy.route('post','**/users').as ('postlogin')
        cy.get('.submitformbutton').click(); 
        cy.wait('@postlogin').then((xhr)=> {
            expect(xhr.status).be.eq(400)
        })

     });
     it('Usuario encaminhado para a tela de login', () => {
        cy.visit('http://127.0.0.1:5173/Cadastro');
        
        cy.get('[href="/Login"]').click();
        cy.url()
        .should('be.equal','http://127.0.0.1:5173/Login')
    
        
     });
    // loguin
    it('Ao clicar na logo o usuario séra direcionado a tela de home ', () => {
        cy.visit('http://127.0.0.1:5173/Login');
        
        cy.get('[href="/"]').click();
        cy.url()
        .should('be.equal','http://127.0.0.1:5173/')
    });
    
    it('Deve poder realizar login no sistema', () => {
        cy.visit('http://127.0.0.1:5173/Login')
        cy.get('[name=registration]').type('20211038060016');
        cy.get('[name=password]').type('po2207s2q16');
        cy.server();
        cy.route('post','**/login').as ('postlogin')
        cy.get('.submitformbutton').click(); 
        cy.wait('@postlogin').then((xhr)=> {
            expect(xhr.status).be.eq(201)
        })
    });
     it('Não deve fazer login pois o usuario está certo mas a senha não', () => {
         cy.visit('http://127.0.0.1:5173/Login')
         cy.get('[name=registration]').type('20211038060016');
         cy.get('[name=password]').type('po220');
         cy.server();
        cy.route('post','**/login').as ('postlogin')
        cy.get('.submitformbutton').click(); 
        cy.wait('@postlogin').then((xhr)=> {
            expect(xhr.status).be.eq(401)
        })
        
     });
    //  it('Usuario de ser encaminhado para a tela de feed apois fazer o login', () => {
    //     cy.visit('http://127.0.0.1:5173/Login')
    //     cy.get('[name=registration]').type('20211038060016');
    //     cy.get('[name=password]').type('po2207s2q16');
    //     cy.server();
    //     cy.route('post','**/login').as ('postlogin')
    //     cy.get('.submitformbutton').click(); 
    //     cy.wait('@postlogin').then((Alert)=> {
    //         expect(xhr.status).be.eq(201)
    //     })
    // });
     it('Usuario deve ser encaminhado para a tela de cadastro ao clicar no link', () => {
        cy.visit('http://127.0.0.1:5173/Login')
        cy.get('[href="/Cadastro"]').click();
        cy.url()
        .should('be.equal','http://127.0.0.1:5173/Cadastro')
         
     });
     // tela de feed
     it('Ao clicar na logo o usuario séra direcionado a tela de home ', () => {
        cy.visit('http://127.0.0.1:5173/feed');
        
        cy.get('[href="/"]').click();
        cy.url()
        .should('be.equal','http://127.0.0.1:5173/')
    });
     it('Ao clicar em sair a tela deve sair do feed e ir para a pagina login', () => {
        cy.visit('http://127.0.0.1:5173/Login')
        cy.get('[name=registration]').type('20211038060016');
        cy.get('[name=password]').type('po2207s2q16');
        cy.server();
        cy.route('post','**/login').as ('postlogin')
        cy.get('.submitformbutton').click(); 
        cy.wait('@postlogin').then((xhr)=> {
            expect(xhr.status).be.eq(201)})
        cy.visit('http://127.0.0.1:5173/feed')
        cy.get('#logout').click();
        cy.url()
        .should('be.equal','http://127.0.0.1:5173/login')
    });
    it('a pergunta deve ser cadastrada', () => {
        cy.visit('http://127.0.0.1:5173/Login')
        cy.get('[name=registration]').type('20211038060016');
        cy.get('[name=password]').type('po2207s2q16');
        cy.server();
        cy.route('post','**/login').as ('postlogin')
        cy.get('.submitformbutton').click(); 
        cy.wait('@postlogin').then((xhr)=> {
            expect(xhr.status).be.eq(201)})
        cy.visit('http://127.0.0.1:5173/feed')
        cy.get('[name=question]').type('Qual porta logica faz a soma?');
        cy.get('#tag').select('virgula');
        cy.get('.submitquestion').click();
        cy.wait('@postlogin').then((xhr)=> {
            expect(xhr.status).be.eq('201')
        })
    });
         
    it('Não deve entrar no feed', () => {
        cy.visit('http://127.0.0.1:5173/feed')
        
    });
    
})


