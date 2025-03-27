export async function GET() {
    const posts = [
        {
            id: 1,
            title: '¿Por qué los gatos duermen tanto?',
            content: 'Los gatos pasan cerca de dos tercios de su vida durmiendo. ¿Envidia o sabiduría?',
        },
        {
            id: 2,
            title: 'El misterio de los calcetines perdidos',
            content: 'Exploramos las teorías detrás de la desaparición de calcetines en la lavadora.',
        },
        {
            id: 3,
            title: '¿Qué tan rápido crecen las uñas?',
            content: 'Un dato curioso sobre el crecimiento de nuestras uñas, ¡y cuál crece más rápido!',
        },
        {
            id: 4,
            title: 'Los mitos sobre el chicle y el estómago',
            content: '¿Realmente tarda siete años en digerirse el chicle? Aquí tienes la verdad.',
        },
        {
            id: 5,
            title: 'La magia de las burbujas de jabón',
            content: '¿Por qué son redondas y qué hace que sean tan fascinantes?',
        },
        {
            id: 6,
            title: '¿Qué es el efecto placebo?',
            content: 'El extraño poder de las pastillas de azúcar para hacerte sentir mejor.',
        },
        {
            id: 7,
            title: 'Datos curiosos sobre los patos de hule',
            content: '¿Sabías que tienen su propia conferencia mundial?',
        },
        {
            id: 8,
            title: 'El origen de las piñatas',
            content: 'Descubre cómo este elemento festivo tiene raíces muy antiguas.',
        },
        {
            id: 9,
            title: '¿Por qué bostezamos?',
            content: 'Una mirada a por qué el bostezo es contagioso y qué función tiene.',
        },
        {
            id: 10,
            title: 'El misterio de los pezones en los hombres',
            content: '¿Realmente tienen algún propósito biológico?',
        },
        {
            id: 11,
            title: 'Curiosidades sobre los delfines',
            content: 'Descubre por qué son considerados uno de los animales más inteligentes del mundo.',
        },
        {
            id: 12,
            title: '¿Por qué el cielo es azul?',
            content: 'La ciencia detrás del color del cielo que vemos todos los días.',
        },
        {
            id: 13,
            title: 'La historia de los emojis',
            content: 'Desde simples caritas hasta un lenguaje universal. ¿Cómo empezó todo?',
        },
        {
            id: 14,
            title: '¿Qué hay en el fondo del océano?',
            content: 'El 80% del océano sigue sin explorarse. ¿Qué secretos esconde?',
        },
        {
            id: 15,
            title: 'El arte de doblar ropa según Marie Kondo',
            content: '¿Realmente puede la organización cambiar tu vida?',
        },
        {
            id: 16,
            title: '¿Por qué tenemos lunares?',
            content: 'Una rápida explicación sobre estos pequeños puntos en nuestra piel.',
        },
        {
            id: 17,
            title: 'El dilema del pan quemado',
            content: '¿Qué hacemos cuando tostamos el pan un poco más de la cuenta?',
        },
        {
            id: 18,
            title: '¿Por qué los perros giran antes de acostarse?',
            content: 'Una peculiar manía que los conecta con sus ancestros salvajes.',
        },
        {
            id: 19,
            title: 'Datos curiosos sobre las alpacas',
            content: '¿Sabías que las alpacas rara vez escupen, y solo lo hacen para defenderse?',
        },
        {
            id: 20,
            title: 'La eterna lucha entre té y café',
            content: 'Un debate milenario sobre cuál es la mejor bebida para empezar el día.',
        },
    ];
    return Response.json(posts);
}
