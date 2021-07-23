const g = document.getElementById("cicle-main");

const btnCenter = document.getElementById("cicle5");

const btnAfter = document.querySelectorAll("button::after");

const centerImage = document.querySelectorAll(".centerImage");

const newE = document.createElement("div");

const removeEl = document.querySelector('#removeDiv');

for (var i = 0, len = g.children.length; i < len; i++) {
    (function (index) {
        g.children[i].onmouseover = function (e) {
            if (g.children[index] == g.children[0]) {
                console.log(index);
                btnCenter.classList.add("active", "active-reactImg");
                btnCenter.classList.remove(
                    "active-gitImg",
                    "active-cssImg",
                    "active-htmlImg",
                    "active-jsImg",
                    "active-gitImg",
                    "active-figmaImg",
                    "active-netLifyImg"
                );

                document.getElementById('newElement').appendChild(newE).innerHTML="<p>O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.</p>";
                removeEl.style.display = 'none';

            } else if (g.children[index] == g.children[1]) {
                console.log(index);
                btnCenter.classList.add("active-nodeImg");
                btnCenter.classList.remove(
                    "active-reactImg",
                    "active-cssImg",
                    "active-htmlImg",
                    "active-jsImg",
                    "active-gitImg",
                    "active-figmaImg",
                    "active-netLifyImg"
                );

                document.getElementById('newElement').appendChild(newE).innerHTML="<p>O Node. js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node. js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados.</p>";
                removeEl.style.display = 'none';
            } else if (g.children[index] == g.children[2]) {
                console.log(index);
                btnCenter.classList.add("active-cssImg");
                btnCenter.classList.remove(
                    "active-nodeImg",
                    "active-reactImg",
                    "active-htmlImg",
                    "active-jsImg",
                    "active-gitImg",
                    "active-figmaImg",
                    "active-netLifyImg"
                );
                document.getElementById('newElement').appendChild(newE).innerHTML="<p>CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. ... Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos.</p>";
                removeEl.style.display = 'none';
            } else if (g.children[index] == g.children[3]) {
                console.log(index)
                btnCenter.classList.add("active-htmlImg");
                btnCenter.classList.remove(
                    "active-nodeImg",
                    "active-reactImg",
                    "active-cssImg",
                    "active-jsImg",
                    "active-gitImg",
                    "active-figmaImg",
                    "active-netLifyImg"
                );
                document.getElementById('newElement').appendChild(newE).innerHTML="<p>O HTML5, sigla para Hypertext Markup Language, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web. Ela traz novas funções como as tags video, audio e elemento canvas e será o novo padrão para HTML, XHTML e HTML DOM.</p>";
                removeEl.style.display = 'none';
            } else if (g.children[index] == g.children[5]) {
                console.log(index);

                btnCenter.classList.add("active-jsImg");
                btnCenter.classList.remove(
                    "active-nodeImg",
                    "active-reactImg",
                    "active-cssImg",
                    "active-htmlImg",
                    "active-gitImg",
                    "active-figmaImg",
                    "active-netLifyImg"
                );
                document.getElementById('newElement').appendChild(newE).innerHTML="<p>JavaScript é uma linguagem de programação criada em 1995 por Brendan Eich enquanto trabalhava na Netscape Communications Corporation. ... Ao invés de rodar remotamente em servidores na internet, o JavaScript tem como característica rodar programas localmente - do lado do cliente, como se costuma dizer em TI.</p>";
                removeEl.style.display = 'none';
            } else if (g.children[index] == g.children[6]) {
                console.log(index);
                btnCenter.classList.add("active-gitImg");
                btnCenter.classList.remove(
                    "active-nodeImg",
                    "active-reactImg",
                    "active-cssImg",
                    "active-htmlImg",
                    "active-figmaImg",
                    "active-netLifyImg"
                );
                document.getElementById('newElement').appendChild(newE).innerHTML="<p>O GitHub é um site que abriga um software de controle de versão de desenvolvimento através do sistema Git. ... Através desse sistema, duas ou mais pessoas podem editar arquivos existentes ou criar novos sem arriscar que suas alterações sejam apagadas pelas modificações de outros membros da equipe.</p>";
                removeEl.style.display = 'none';
            } else if (g.children[index] == g.children[7]) {
                console.log(index);
                btnCenter.classList.add("active-figmaImg");
                btnCenter.classList.remove(
                    "active-nodeImg",
                    "active-reactImg",
                    "active-cssImg",
                    "active-htmlImg",
                    "active-gitImg",
                    "active-netLifyImg"
                );

                document.getElementById('newElement').appendChild(newE).innerHTML="<p>Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.</p>";
                removeEl.style.display = 'none';
            } else if (g.children[index] == g.children[8]) {
                console.log(index);
                btnCenter.classList.add("active-netLifyImg");
                btnCenter.classList.remove(
                    "active-nodeImg",
                    "active-reactImg",
                    "active-cssImg",
                    "active-htmlImg",
                    "active-gitImg",
                    "active-figma"
                );
                document.getElementById('newElement').appendChild(newE).innerHTML="<p>Um resumo sobre o que é o Netflix: a Netlify é uma plataforma de static hosting, ou seja, um servidor para arquivos estáticos, onde você tem diversas funcionalidades muito muito maneiras e o melhor, ela é GRATUITA.</p>";
                removeEl.style.display = 'none';
            } else {
                return false;
            }
        };

    })(i);
}
