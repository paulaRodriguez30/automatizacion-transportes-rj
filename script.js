// ============================================
// 1. ESPERAR A QUE LA PÁGINA CARGUE COMPLETA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Página cargada exitosamente!');
    
    // Llamar a todas nuestras funciones
    iniciarContadorDias();
    configurarBotonMotivacion();
    mostrarHoraActual();
    animarTarjetas();
});


// ============================================
// 2. CONTADOR DE DÍAS APRENDIENDO
// ============================================

function iniciarContadorDias() {
    // Fecha en que empezaste (CAMBIA ESTA FECHA)
    const fechaInicio = new Date('2026-02-16'); // Año-Mes-Día
    
    // Fecha actual
    const fechaActual = new Date();
    
    // Calcular diferencia en milisegundos
    const diferencia = fechaActual - fechaInicio;
    
    // Convertir milisegundos a días
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    // Seleccionar el elemento HTML
    const contadorElemento = document.getElementById('contador-dias');
    
    // Cambiar el texto
    if (dias === 0) {
        contadorElemento.textContent = '🎉 ¡Hoy empecé mi journey DevOps!';
    } else if (dias === 1) {
        contadorElemento.textContent = '📅 Llevo 1 día aprendiendo DevOps';
    } else {
        contadorElemento.textContent = `📅 Llevo ${dias} días aprendiendo DevOps`;
    }
}


// ============================================
// 3. BOTÓN DE MOTIVACIÓN
// ============================================

function configurarBotonMotivacion() {
    // Array de mensajes motivacionales
    const mensajes = [
        "💪 ¡Vas increíble! Cada línea de código es un paso adelante.",
        "🚀 Los grandes proyectos empiezan con un simple commit.",
        "🌟 No importa cuán lento vayas, siempre que no te detengas.",
        "🔥 El código que escribes hoy será la base de tu futuro.",
        "⚡ Cada error es una lección, cada bug es un maestro.",
        "🎯 DevOps no se aprende en un día, pero cada día aprendes más.",
        "💡 Tu persistencia es tu superpoder.",
        "🏆 Ya estás más cerca de tu objetivo que ayer."
    ];
    
    // Seleccionar el botón
    const boton = document.getElementById('btn-motivacion');
    const mensajeElemento = document.getElementById('mensaje-motivacion');
    
    // Cuando hagan click en el botón
    boton.addEventListener('click', function() {
        // Seleccionar un mensaje aleatorio
        const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
        const mensajeAleatorio = mensajes[indiceAleatorio];
        
        // Mostrar el mensaje
        mensajeElemento.textContent = mensajeAleatorio;
        mensajeElemento.style.display = 'block';
        
        // Animación simple
        mensajeElemento.style.opacity = '0';
        setTimeout(function() {
            mensajeElemento.style.transition = 'opacity 0.5s';
            mensajeElemento.style.opacity = '1';
        }, 10);
        
        console.log('💬 Mensaje mostrado:', mensajeAleatorio);
    });
}


// ============================================
// 4. RELOJ EN TIEMPO REAL
// ============================================

function mostrarHoraActual() {
    function actualizarHora() {
        const ahora = new Date();
        
        // Formatear la hora
        const horas = ahora.getHours().toString().padStart(2, '0');
        const minutos = ahora.getMinutes().toString().padStart(2, '0');
        const segundos = ahora.getSeconds().toString().padStart(2, '0');
        
        const horaFormateada = `🕐 ${horas}:${minutos}:${segundos}`;
        
        // Actualizar el elemento
        const horaElemento = document.getElementById('hora-actual');
        horaElemento.textContent = horaFormateada;
    }
    
    // Actualizar inmediatamente
    actualizarHora();
    
    // Actualizar cada segundo (1000 milisegundos)
    setInterval(actualizarHora, 1000);
}


// ============================================
// 5. ANIMACIÓN DE TARJETAS AL HACER SCROLL
// ============================================

function animarTarjetas() {
    const tarjetas = document.querySelectorAll('.skill-card');
    
    // Agregar clase para animación CSS
    tarjetas.forEach(function(tarjeta, index) {
        // Retraso progresivo para cada tarjeta
        setTimeout(function() {
            tarjeta.style.opacity = '0';
            tarjeta.style.transform = 'translateY(20px)';
            tarjeta.style.transition = 'all 0.5s ease';
            
            setTimeout(function() {
                tarjeta.style.opacity = '1';
                tarjeta.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150); // 150ms de retraso entre cada una
    });
}


// ============================================
// 6. MENSAJE DE BIENVENIDA EN CONSOLA
// ============================================

console.log('%c👋 ¡Hola Developer!', 'font-size: 24px; color: #4CAF50; font-weight: bold;');
console.log('%c¿Curioseando el código? ¡Excelente! Así se aprende 🚀', 'font-size: 14px; color: #666;');
console.log('%cEste sitio está construido con HTML, CSS y JavaScript vanilla', 'font-size: 12px; color: #999;');