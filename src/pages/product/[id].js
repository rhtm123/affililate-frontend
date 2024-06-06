import { useRouter } from 'next/router';
import ProductDetail from '../../components/ProductDetail';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  return <ProductDetail initialProductVariantId={id} />;
};

export default ProductPage;


