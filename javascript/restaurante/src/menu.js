export default function cargarMenu(){

    const content = document.getElementById("content");
    const container = document.createElement("div");

    const titulo = document.createElement("h1");
    titulo.textContent="Menu";

    // lista de platos

    const menuList = document.createElement("ul");

    const platos= [

    "🍕 Pizza - $10",
    "🍔 Hamburguesa - $8",
    "🥗 Ensalada - $6",
    "🍝 Pasta - $9",
    "🍰 Postre - $5"



    ];

        platos.forEach(plato=>{

            const li=document.createElement("li");
            li.textContent=plato;
            menuList.appendChild(li);

        });

        container.appendChild(titulo);
        container.appendChild(menuList);

        content.appendChild(container);



}