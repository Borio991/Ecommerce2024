import CatalogCard from '@/components/catalog/CatalogCard';
import { getProducts } from '@/server/products-data';
import { useQuery } from '@tanstack/react-query';

function Catalogpage() {
  const { data, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  if (error) return <div>Error</div>;
  if (data) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((product) => (
          <CatalogCard
            id={product.id}
            name={product.name}
            key={product.id}
            brand={product.brand}
            type={product.type}
            image={product.pictureUrl}
            price={product.price}
          />
        ))}
      </div>
    );
  }
  return <div>Loading....</div>;
}

export default Catalogpage;
