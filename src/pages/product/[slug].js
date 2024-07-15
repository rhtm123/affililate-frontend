import { useRouter } from 'next/router';
import ProductDetail from '../../components/ProductDetail';
import Error404 from '@/components/Error404';

const ProductPage = ({data, featureCategorys, error}) => {
  const router = useRouter();

  if (error) {
    return <Error404 />;
  }
  return <ProductDetail data={data} featureCategorys={featureCategorys} />;
};



export async function getServerSideProps(context) {
  // Fetch data from external API
  const {slug} = context.params;
  const url = process.env.API_URL+"api/product/variant/"+slug;
  // console.log(url);

  const res = await fetch(url)
  const error = res.ok ? false : true
  const data = await res.json();

  // console.log(data);

  let featureCategorys = data.product?.category?.category_features.split(',')


  return { 
      props: {  
         data:data, featureCategorys, error:error, 
      } 

  }
}
export default ProductPage;
