fetch('ventas.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    // Obtener la tabla HTML
    var tabla = document.getElementById('tabla-facturas');

    // Recorrer los objetos JSON y agregar filas a la tabla
    jsonData.data.forEach(function(factura) {
      // Crear una nueva fila
      var fila = document.createElement('tr');

      // Agregar las celdas de la fila
      var celdaRut = document.createElement('td');
      celdaRut.textContent = factura.RUTRecep;
      fila.appendChild(celdaRut);

      var celdaDv = document.createElement('td');
      celdaDv.textContent = factura.DV;
      fila.appendChild(celdaDv);

      var celdaRznSoc = document.createElement('td');
      celdaRznSoc.textContent = factura.RznSocRecep;
      fila.appendChild(celdaRznSoc);

      var celdaTipoDte = document.createElement('td');
      celdaTipoDte.textContent = factura.TipoDTE;
      fila.appendChild(celdaTipoDte);

      var celdaFolio = document.createElement('td');
      celdaFolio.textContent = factura.Folio;
      fila.appendChild(celdaFolio);

      var celdaFchEmis = document.createElement('td');
      celdaFchEmis.textContent = factura.FchEmis;
      fila.appendChild(celdaFchEmis);

      var celdaMntNeto = document.createElement('td');
      celdaMntNeto.textContent = factura.MntNeto;
      fila.appendChild(celdaMntNeto);

      var celdaIva = document.createElement('td');
      celdaIva.textContent = factura.IVA;
      fila.appendChild(celdaIva);

      var celdaMntTotal = document.createElement('td');
      celdaMntTotal.textContent = document.createElement('td');
      celdaMntTotal.textContent = factura.MntTotal;
      fila.appendChild(celdaMntTotal);
      tabla.appendChild(fila);
    });
})
.catch(function(error) {
console.error('Error al cargar las facturas: ' + error);
});