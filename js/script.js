(function () {

    "use strict";
    /*O modo estrito ("use strict") é ativado para ajudar a detectar erros e comportamentos problemáticos no código. */

    /**
     * Função de seleção
     */

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function 
     * Função de Adição de Eventos (on) do tipo 'click'
     * Função espera que um evento ocorra e depois responde a ele  */


    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    // Ativar botão no modo mobile
    // primeira sintase

    on('click', '.mobile-nav-toggle', function () {
        select('body').classList.toggle('mobile-nav-active')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x') //modo expandir

    })


    //efeito digitação
    const typed = select('.typed');

    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')

        new Typed('.typed', {
            strings: typed_strings,
            loop: true, // verdadeiro 
            typeSpeed: 90, //velocidade digitação
            backSpeed: 100, //velocidade devagar
            backDelay: 1000,// tempo de espera

        });
    }







})()