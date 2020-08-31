
window.onload = function(){
    
    //Controle dos botoes de login

    var tela = window.matchMedia("(max-width: 800px)")
    var botaoAssinar = document.getElementById('botao-assinar');
    var botaoLogar = document.getElementById('botao-logar');
    
    botaoAssinar.addEventListener('click', function ()
    {
        alterarBotaoSelecionado(botaoAssinar);
    
        alterarBotaoDesselecionado(botaoLogar);
    });
    
    botaoLogar.addEventListener('click', function () 
    {
        alterarBotaoSelecionado(botaoLogar);
    
        alterarBotaoDesselecionado(botaoAssinar);
    });


    function alterarBotaoSelecionado(obj)
    {
        if(tela.matches)
        {
            obj.style.backgroundColor = 'rgb(77, 76, 161)';

            obj.style.color = 'rgb(255, 255, 255)';
        }
        else
        {
            obj.style.backgroundColor = 'rgb(255, 255, 255)';

            obj.style.color = 'rgb(77, 76, 161)';
        }
    }

    function alterarBotaoDesselecionado(obj)
    {
        if(tela.matches)
        {
            obj.style.backgroundColor = 'rgb(255, 255, 255)';

            obj.style.color = 'rgb(77, 76, 161)';
        }
        else
        {
            obj.style.backgroundColor = 'rgba(255, 255, 255, 0)';

            obj.style.color = 'rgb(255, 255, 255)';
        }
    }
    //fim

    //Controle do menu de navegacao desktop

    var linksMenu = document.getElementById('links-menu');
    var listaLinks = linksMenu.childNodes;

    listaLinks[1].addEventListener('click', function()
    {
        AlterarLinkSelecionado(listaLinks[1], listaLinks[3], listaLinks[5]);   
    });

    listaLinks[3].addEventListener('click', function()
    {
        AlterarLinkSelecionado(listaLinks[3], listaLinks[5], listaLinks[1]);   
    });

    listaLinks[5].addEventListener('click', function()
    {
        AlterarLinkSelecionado(listaLinks[5], listaLinks[1], listaLinks[3]);   
    });

    function AlterarLinkSelecionado(link1, link2, link3)
    {
        link1.style.textDecorationLine = 'underline';

        link2.style.textDecorationLine = 'none';

        link3.style.textDecorationLine = 'none';

        link1.style.color = 'rgb(255, 255, 255)';

        link2.style.color = 'rgba(255, 255, 255, 0.5)';
    }
    //fim

    //controle menu de navegacao mobile

    var panoDeFundo = document.getElementById('corpo'); 
    var btnMenuMobile = document.getElementById('btn-hamburger');
    var btnMenuMobileFechar = document.getElementById('btn-fechar');
    var menuMobile = document.getElementById('menu');
    var corpo = document.getElementById('principal');

    btnMenuMobile.addEventListener('click', MostrarMenuMobile);

    btnMenuMobileFechar.addEventListener('click', RecolheMEnuMobile);

    
    function MostrarMenuMobile ()
    {
        menuMobile.style.height = '30%';

        menuMobile.style.transform = 'translate(0%,128%)';

        menuMobile.style.transition = 'height .35s ease-in-out';
        
        corpo.style.transform = 'translate(0%,12%)';

        panoDeFundo.style.backgroundPosition = '0% -10%';

        btnMenuMobile.style.display = 'none';

        btnMenuMobileFechar.style.display = 'flex';
    }

    function RecolheMEnuMobile () 
    {
        menuMobile.style.height = '0%';

        corpo.style.transform = 'translate(0%,-1%)';

        panoDeFundo.style.backgroundPosition = '45% 10%';

        btnMenuMobile.style.display = 'flex';

        btnMenuMobileFechar.style.display = 'none';
    }
    //fim

    //controle de links do menu mobile
    var linksMenuMobile = document.getElementById('links-menu-mobile');
    var listaLinksMobile = linksMenuMobile.childNodes;


    listaLinksMobile[1].addEventListener('click', function ()
    {
        AlterarLinkMovelSelecionado(listaLinksMobile[1], listaLinksMobile[3], listaLinksMobile[5])
    });

    listaLinksMobile[3].addEventListener('click', function ()
    {
        AlterarLinkMovelSelecionado(listaLinksMobile[3], listaLinksMobile[5], listaLinksMobile[1])
    });

    listaLinksMobile[5].addEventListener('click', function ()
    {
        AlterarLinkMovelSelecionado(listaLinksMobile[5], listaLinksMobile[1], listaLinksMobile[3])
    });


    function AlterarLinkMovelSelecionado(link1, link2, link3)
    {
        link1.style.fontWeigth = 'bold';

        link2.style.fontWeigth = 'lighter';

        link3.style.fontWeigth = 'lighter';

        link1.style.color = '#5F41B6';

        link2.style.color = '#C6C6D4';

        link3.style.color = '#C6C6D4';
    }
    //fim

    // controle dos botoes de selecao de genero

    var botaoM = document.getElementById('botaoM');
    var botaoF = document.getElementById('botaoF');
    var imgM = document.getElementById('imgMen');
    var imgF = document.getElementById('imgWomen');

    botaoM.addEventListener('click', function()
    {
        AlteraBotaoGeneroSelecionado(botaoM,botaoF);
        imgM.src = 'img/png/btn_men_wt.png';
        imgF.src = 'img/png/btn_wmen_bk.png';
    });

    botaoF.addEventListener('click', function()
    {
        AlteraBotaoGeneroSelecionado(botaoF,botaoM);
        imgF.src = 'img/png/btn_wmen_wt.png';
        imgM.src = 'img/png/btn_men_bk.png';
    });

    function AlteraBotaoGeneroSelecionado(botao1, botao2)
    {
        botao1.style.backgroundColor = 'rgb(77, 76, 161)';
        
        botao2.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    //fim
}
