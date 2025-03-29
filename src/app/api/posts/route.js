/* eslint-disable max-len */
export const posts = [
    {
        id: 1,
        title: 'Mi primera planta',
        content:
            'Hace un mes compré mi primera planta, un pequeño cactus. Nunca pensé que regarla una vez a la semana sería tan terapéutico. Ahora estoy considerando llenar mi casa de verdes compañeros.',
    },
    {
        id: 2,
        title: 'El misterio del calcetín perdido',
        content:
            'Cada vez que lavo mi ropa, un calcetín desaparece misteriosamente. Estoy convencido de que mi lavadora alberga una dimensión paralela dedicada a calcetines solitarios.',
    },
    {
        id: 3,
        title: '¿Por qué me encantan los días lluviosos?',
        content:
            'Hay algo mágico en escuchar la lluvia mientras lees un libro o simplemente te acurrucas con una taza de café caliente. Es como si el mundo se desacelerara por un momento.',
    },
    {
        id: 4,
        title: 'Un paseo inesperado',
        content:
            'Ayer salí a caminar sin rumbo fijo y descubrí un pequeño parque escondido. Fue un recordatorio hermoso de que a veces, lo mejor está en los lugares más inesperados.',
    },
    {
        id: 5,
        title: 'Mi relación de amor-odio con el café',
        content:
            'Empiezo cada día con una taza de café, pero últimamente he pensado en dejarlo. Sin embargo, el aroma matutino me gana cada vez. Quizás algún día...',
    },
    {
        id: 6,
        title: 'El dilema de los domingos',
        content:
            'Los domingos son ese día extraño entre el descanso y la anticipación de la semana laboral. ¿Debo relajarme o prepararme para el lunes? Nunca tengo una respuesta clara.',
    },
    {
        id: 7,
        title: 'Cómo aprendí a cocinar',
        content:
            'Durante la pandemia, decidí aprender a cocinar. Mi primer intento de pasta fue un desastre, pero ahora tengo una receta de lasaña que impresiona a cualquiera.',
    },
    {
        id: 8,
        title: 'La playlist de mi vida',
        content:
            'Hoy revisé una vieja playlist que hice en 2010. Cada canción era como una cápsula del tiempo, llevándome de vuelta a momentos específicos y personas que significaron mucho.',
    },
    {
        id: 9,
        title: 'El arte de procrastinar',
        content:
            'Tengo una habilidad especial para posponer tareas importantes. Siempre termino limpiando mi escritorio o reorganizando libros cuando debería estar trabajando.',
    },
    {
        id: 10,
        title: 'Una noche con las estrellas',
        content:
            'La semana pasada, me aventuré fuera de la ciudad para ver el cielo estrellado. Fue un recordatorio de lo pequeños que somos en el vasto universo.',
    },
    {
        id: 11,
        title: 'Mis aventuras con el yoga',
        content:
            'Comencé yoga el mes pasado y, aunque mi flexibilidad aún es terrible, me encanta cómo me hace sentir más centrado y relajado.',
    },
    {
        id: 12,
        title: 'El poder de un buen libro',
        content:
            'Nada se compara con perderte en las páginas de un libro fascinante. Recientemente terminé uno que me dejó reflexionando por días.',
    },
    {
        id: 13,
        title: 'Cómo fallé haciendo pan',
        content:
            'Intenté hornear pan casero la semana pasada. El resultado fue un ladrillo que podría usarse como arma, pero no me rendiré.',
    },
    {
        id: 14,
        title: 'Mi obsesión con las plantas de interior',
        content:
            'Poco a poco, mi casa se ha convertido en una jungla. Cada planta tiene su propia personalidad y cuidarlas se ha vuelto mi pasatiempo favorito.',
    },
    {
        id: 15,
        title: 'Un viaje en el tiempo con fotos viejas',
        content:
            'Revisé álbumes de fotos antiguos y fue como viajar en el tiempo. Cada imagen tenía una historia que contar.',
    },
    {
        id: 16,
        title: 'El eterno debate: perros o gatos',
        content:
            'He tenido ambos y, aunque los perros son leales y juguetones, los gatos tienen esa independencia que me encanta. ¿Por qué no ambos?',
    },
    {
        id: 17,
        title: 'Cómo sobreviví al lunes más largo',
        content:
            'Mi último lunes fue interminable. Entre reuniones, llamadas y trabajo acumulado, me pregunté si los lunes tienen más horas que los demás días.',
    },
    {
        id: 18,
        title: 'Mi amor por las películas clásicas',
        content:
            'Hay algo especial en las películas antiguas. La narrativa, el estilo y el encanto de actores legendarios siempre me atrapan.',
    },
    {
        id: 19,
        title: 'Descubriendo un nuevo pasatiempo',
        content:
            'Hace poco descubrí la pintura por números. No soy un artista, pero ver cómo una imagen cobra vida con cada pincelada es muy satisfactorio.',
    },
    {
        id: 20,
        title: 'La magia del silencio',
        content:
            'Vivimos en un mundo ruidoso, pero a veces el silencio es exactamente lo que necesitamos para recargar nuestra energía y claridad mental.',
    },
];

export async function GET() {
    return Response.json(posts);
}
