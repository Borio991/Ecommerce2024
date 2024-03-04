import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import { NavLink } from 'react-router-dom';

type ProductCard = {
  id: string;
  name: string;
  image: string;
  price: number;
  type: string;
  brand: string;
};

function CatalogCard({
  id,
  brand,
  image,
  name,
  price,
  type,
}: Partial<ProductCard>) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row gap-x-4 items-center">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>{name?.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <CardTitle>{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <img src={image} alt={name} className="border border-red-200" />
      </CardContent>
      <CardFooter className="flex-col gap-y-2">
        <div className="text-xl">${(price && price / 100)?.toFixed(2)}</div>
        <div className="text-md">
          {brand} / {type}
        </div>
        <div className="flex justify-between">
          <Button>Add To Cart</Button>
          <NavLink to={`/catalog/${id}`}>
            <Button variant="secondary">view</Button>
          </NavLink>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CatalogCard;
