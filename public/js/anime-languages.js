const g = document.getElementById("cicle-main");

const btnCenter = document.getElementById("cicle5");

const btnAfter = document.querySelectorAll("button::after");

const centerImage = document.querySelectorAll(".centerImage");

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
            } else {
                return false;
            }
        };
    })(i);
}
