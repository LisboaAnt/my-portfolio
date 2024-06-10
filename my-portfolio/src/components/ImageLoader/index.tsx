import ContentLoader from 'react-content-loader';

const ImageLoader = () => (
  <ContentLoader 
    speed={1}
    width={500}
    height={300}
    viewBox="0 0 500 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Desenhe uma caixa para a imagem */}
    <rect x="0" y="0" rx="0" ry="0" width="500" height="300" />
  </ContentLoader>
);

export default ImageLoader;
