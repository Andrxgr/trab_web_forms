const form = document.getElementById("form");
const username = document.getElementById("username");
const id = document.getElementById("id");
const cliente = document.getElementById("cliente");
const cep = document.getElementById("cep");
const limite = document.getElementById("limite");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const idValue = id.value;
    const clienteValue = cliente.value;
    const cepValue = cep.value;
    const limiteValue = limite.value


      if (usernameValue === "") {
      setErrorFor(username, "O nome de usuário é obrigatório.");
      } 
      else {
      setSuccessFor(username);
      }
    

      if (idValue === "") {
      setErrorFor(id, "O id é obrigatório.");
      } 
      else if (idValue.length < 7 || idValue.length > 7) {
      setErrorFor(id, "o id deve conter 7 numeros")
      }
      else{
        setSuccessFor(id);
      }
      
      
    

    if (clienteValue === "") {
      setErrorFor(cliente, "O tipo de cliente é obrigatória.");
    } 

    else if (clienteValue !== "fisica" && clienteValue !== "juridica") {
      setErrorFor(cliente, "O tipo de cliente deve ser fisica ou juridica.");
    } 

    else {
      setSuccessFor(cliente);
    }


    if (cepValue === "") {
      setErrorFor(cep, "O cep do cliente é obrigatório.");
    } 

    else if (cepValue.length < 8 || cepValue.length > 8) {
      setErrorFor(cep, "O cep deve conter 8 numero .");
    } 

    else {
      setSuccessFor(cep);
    }

    if (limiteValue === "") {
      setErrorFor(limite, "O limite do cliente é obrigatório.");
    } 

    else if (limiteValue < 0 ){
      setErrorFor(limite, "o limite deve ser maior que 0 .");
    } 

    else {
      setSuccessFor(limite);
    }


    

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
    });

    if (formIsValid) {
    console.log("O formulário está 100% válido!");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
    small.innerText = message;

  // Adiciona a classe de erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

  // Adicionar a classe de sucesso
    formControl.className = "form-control success";
}

