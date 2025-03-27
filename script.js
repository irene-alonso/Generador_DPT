document.addEventListener('DOMContentLoaded', () => {
    fetch('dpt.json')
        .then(response => response.json())
        .then(data => {
            const contenedor = document.getElementById('contenedor-dpt');
            for (const [position, details] of Object.entries(data)) {
                const positionDiv = document.createElement('div');
                positionDiv.classList.add('position');

                const title = document.createElement('h2');
                title.textContent = position;
                positionDiv.appendChild(title);

                const funciones = document.createElement('ul');
                funciones.textContent = 'Funciones:';
                details.funciones.forEach(funcion => {
                    const li = document.createElement('li');
                    li.textContent = funcion;
                    funciones.appendChild(li);
                });
                positionDiv.appendChild(funciones);

                const aptitudes = document.createElement('ul');
                aptitudes.textContent = 'Aptitudes:';
                details.aptitudes.forEach(aptitud => {
                    const li = document.createElement('li');
                    li.textContent = aptitud;
                    aptitudes.appendChild(li);
                });
                positionDiv.appendChild(aptitudes);

                const experiencia = document.createElement('p');
                experiencia.textContent = `Experiencia: ${details.experiencia}`;
                positionDiv.appendChild(experiencia);

                contenedor.appendChild(positionDiv);
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
