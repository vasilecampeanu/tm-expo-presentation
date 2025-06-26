import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { HomeStackParamList } from "../navigation/TabNavigator";
import useFetch from "../hooks/useFetch";

export type Product = {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  quantity?: number;
  images: string[];
  rating: number;
  thumbnail: string;
  stock: string;
  title: string;
  price: number;
};

type Products = {
  products: Product[];
};

type ProductScreenProps = RouteProp<HomeStackParamList, "ProductsScreen">;

const ProductsScreen = () => {
  const route = useRoute<ProductScreenProps>();
  const { data, isLoading, error } = useFetch<Products>({
    endpoint: `products/category/${route.params.query}`,
  });

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <TouchableOpacity>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      {data?.products && (
        <FlatList
          data={data.products}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ProductsScreen;
