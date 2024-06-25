const dados = {
    sintomas: [
        "Febre Alta, dor de cabeça, sangramentos, dor muscular, calafrios, olhos vermelhos e vômitos",
        "Contrações musculares dolorosas, especialmente na mandíbula e no pescoço, pode ter dificuldade para respirar, febre, Pressão alta e sudorese",
        "Sangramentos nas fezes, dores abdominais; em alguns casos pode haver muco",
        "Fadiga, icterícia (amarelão pelo corpo), urina escura, fezes claras e perda de apetite",
        "Febre alta, dores musculares, erupções cutâneas, dores nas articulações, em casos graves, hemorragia intensa, dificuldade para respirar (casos graves) edema (inchaço), rubor (vermelhidão), febre, dor de cabeça",
    ],
    doencas: [
        "Leptospirose",
        "Tétano",
        "Diarreia aguda",
        "Hepatite A",
        "Dengue",
        "Animais peçonhentos (aranhas, cobra, lacraias e escorpiões)",
    ],
    tratamentos: [
        "Prevenção: Use botas e luvas; evite água e solo contaminados com urina ou sangue de animais infectados; mantenha o ambiente limpo para evitar os roedores; Tratamento: Antibióticos precisos pelo médico;",
        "Prevenção: Vacina; limpe e cuide das feridas; evite contato com solo e fezes dos animais; controle a infecção e alivie os sintomas com medicamentos prescritos pelo médico;",
        "Prevenção: Evite tomar água da torneira, apenas se for fervida por pelo menos 5 minutos; lave bem as mãos e alimentos; beba água filtrada; evite alimentos crus ou mal cozidos; tome a vacina rotavírus.",
        "Não existe tratamento específico, porém pode-se aliviar os sintomas; evite automedicação; repouse; hidrate-se; faça uma dieta leve (evite comidas picantes e gordurosas); tome medicação prescrita pelo médico.",
        "Prevenção: Elimine os criadouros de mosquitos; use repelentes; instale telas nas portas e janelas; Tratamento: Descanse bastante; hidrate-se; tome medicamento prescrito pelo médico; evite anti-inflamatórios; monitore a temperatura.",
    ],
};

const sintomasContainer = document.getElementById("sintomas-container");
const botaoConsultar = document.getElementById("botaoConsultar");
const resultadosDiv = document.getElementById("resultados");

// Preencher os checkboxes dinamicamente
dados.sintomas.forEach(sintoma => {
    const checkboxContainer = document.createElement("label");
    checkboxContainer.classList.add("checkbox-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = sintoma;

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(span);
    sintomasContainer.appendChild(checkboxContainer);
});

botaoConsultar.addEventListener("click", () => {
    const sintomasSelecionados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.nextSibling.textContent.trim());

    if (sintomasSelecionados.length === 0) {
        alert("Por favor, selecione pelo menos um sintoma.");
        return;
    }

    const doencasPossiveis = sintomasSelecionados.map(sintoma => {
        const indice = dados.sintomas.indexOf(sintoma);
        return indice !== -1 ? dados.doencas[indice] : null;
    }).filter(doenca => doenca !== null);

    resultadosDiv.innerHTML = ""; // Limpa resultados anteriores

    if (doencasPossiveis.length > 0) {
        doencasPossiveis.forEach((doenca, index) => {
            const resultadoDiv = document.createElement("div");
            resultadoDiv.innerHTML = `
          <h2>Possível Doença: ${doenca}</h2>
          <p>Tratamento: ${dados.tratamentos[dados.doencas.indexOf(doenca)]}</p>
        `;
            resultadosDiv.appendChild(resultadoDiv);
        });
    } else {
        resultadosDiv.innerHTML = "<p>Nenhuma doença encontrada para os sintomas selecionados.</p>";
    }
});

const botaoTirarFoto = document.getElementById("botaoTirarFoto");

botaoTirarFoto.addEventListener("click", () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
        })
        .catch(error => {
            console.error("Erro ao acessar a câmera:", error);
            alert("Não foi possível acessar a câmera. Verifique as permissões.");
        });
});
