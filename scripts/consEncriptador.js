const $ = selector => document.querySelector(selector);

const $empty = $(".empty-output");
const $containerOutput = $(".output");
const $output = $(".text-output");
const $input = $(".input");
const $enc = $(".encr");
const $des = $(".dese");
const $cop = $(".copy");

const encriptar = () => {
    const text = $input.value;
    $output.innerText = encriptarText(text);
    $empty.style.display = "none";
    $containerOutput.style.display = "flex";
};

const desencriptar = () => {
    const text = $input.value;
    $output.innerText = desencriptarText(text);
    $empty.style.display = "none";
    $containerOutput.style.display = "flex";
};

const copy = () => {
    const text = $output.innerText;
    navigator.clipboard.writeText(text);
    alert(`El texto copiado es: ${text}`);
};

$enc.addEventListener("click", encriptar);
$des.addEventListener("click", desencriptar);
$cop.addEventListener("click", copy);