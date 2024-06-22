// src/img/publications/publicationsImgs.ts

const imagesById: { [key: string]: string[] } = {
    '1': [
        '/img/publications/1/photo1.png',
        '/img/publications/1/photo2.png',
        // Adicione mais imagens conforme necessário
    ],
    '2': [
        '/img/publications/2/photo1.png',
        '/img/publications/2/photo2.png',
        '/img/publications/2/photo3.png',
        // Adicione mais imagens conforme necessário
    ],
    // Adicione mais casos conforme necessário
};

const GetPublicationsImgs = async (id: string): Promise<string[]> => {
    const images = imagesById[id] || [];
    // Simulação de carga de imagens assíncrona (pode ser substituído por import() se necessário)
    await new Promise(resolve => setTimeout(resolve, 1000));
    return images;
};

export default GetPublicationsImgs;
