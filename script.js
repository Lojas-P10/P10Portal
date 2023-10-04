document.addEventListener('DOMContentLoaded', function () {
    // Seu código JavaScript aqui
 
    // Selecione o elemento com id "circle"
    var circle = document.getElementById('circle');
 
    // Verifique se o elemento com id "circle" foi encontrado
    if (circle) {
        // Adicione o event listener para o mouseenter
        circle.addEventListener('mouseenter', function () {
            this.style.cursor = 'pointer';
        });
 
        // Adicione o event listener para o mouseleave
        circle.addEventListener('mouseleave', function () {
            this.style.cursor = 'auto'; // "auto" restaura o estilo padrão do cursor
        });
    } else {
        console.error('Elemento com id "circle" não encontrado.');
    }
 
    // Resto do seu código aqui
 
    // Aqui está a parte do seu código que você forneceu anteriormente:
    var kinet = new Kinet({
        acceleration: 0.06,
        friction: 0.20,
        names: ["x", "y"],
    });
 
    kinet.on('tick', function (instances) {
        circle.style.transform = `translate3d(${(instances.x.current)}px, ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity/2)}deg) rotateY(${(instances.y.velocity/2)}deg)`;
    });
 
    document.addEventListener('mousemove', function (event) {
        kinet.animate('x', event.clientX - window.innerWidth / 2);
        kinet.animate('y', event.clientY - window.innerHeight / 2);
    });
 
    kinet.on('start', function () {
        console.log('start');
    });
 
    kinet.on('end', function () {
        console.log('end');
    });
 });
 