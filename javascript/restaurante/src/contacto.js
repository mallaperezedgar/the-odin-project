export default  function cargarFormulario(){


    const content = document.getElementById("content");
    const container = document.createElement("div");


            const titulo = document.createElement("h1");
            titulo.textContent="Formulario";


            const subtitulo = document.createElement("h2");
         subtitulo.textContent = "Introduce tus datos";

         const form= document.createElement("form");

        
         const inputNombre=document.createElement("input");
         inputNombre.type="text";
         inputNombre.placeholder="tu nombre";
         
         const inputEmail=document.createElement("input");
            inputEmail.type="email";
            inputEmail.placeholder="tu email";
           
              // Mensaje
        const textarea = document.createElement("textarea");
        textarea.placeholder = "Tu mensaje"

            // Botón de enviar
            const button = document.createElement("button");
            button.type = "submit";
            button.textContent = "Enviar";

   

        form.appendChild(inputNombre);
        form.appendChild(inputEmail);
        form.appendChild(textarea);
        form.appendChild(button);

        // Añadir todo al container
        container.appendChild(titulo);
        container.appendChild(subtitulo);
        container.appendChild(form);

        content.appendChild(container);
}