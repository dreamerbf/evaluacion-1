function calcularPesoIdeal() {
    const tipoQueso = document.getElementById("txt_tipoDeQueso").value;
    const cantidad = document.getElementById("txt_cantDeQuesos").value;
    
    if (!tipoQueso || !cantidad) {
        alert("Por favor complete todos los campos");
        return;
    }

    // Ejemplo de cálculo - modifica según tus necesidades
    let precio = 0;
    if (tipoQueso === "quesos blandos") precio = 5000;
    else if (tipoQueso === "quesos frescos") precio = 6000;
    else if (tipoQueso === "quesos duros") precio = 7000;
    
    const total = precio * parseInt(cantidad);
    
    document.getElementById("estado_venta").innerHTML = 
        `Total a pagar: $${total.toLocaleString()}`;
    document.getElementById("estado_imagen").innerHTML = 
        `<img src="img/feliz.jpg" alt="Queso ${tipoQueso}" class="img-fluid">`;
}
