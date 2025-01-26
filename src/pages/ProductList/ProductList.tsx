import { Box, Grid2, TextField } from "@mui/material";
import { debounce } from "lodash";
import { Fragment, useCallback, useRef, useState } from "react";
import { Card } from "../../components";
import { Product } from "../../types/general";
import { useGetProducts } from "./services";
import { styles } from "./styles";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetProducts(search);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  const handleSearch = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      setSearch(target.value); // Update search state
    }, 800),
    []
  );
  return (
    <Grid2 container gap={2} justifyContent="space-between" p={4}>
      <TextField
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        sx={styles.input}
      />
      {isFetching && !data && <div>Loading...</div>}
      {data?.pages.map((page, pageIndex) => {
        return (
          <Fragment key={pageIndex}>
            {page?.data.map((item: Product, index: number) => {
              const isLastItem =
                pageIndex === data.pages.length - 1 &&
                index === page.data.length - 1;
              return (
                <Box
                  key={item.id || index}
                  ref={isLastItem ? lastItemRef : null}
                >
                  <Card key={item.id} item={item} />
                </Box>
              );
            })}
          </Fragment>
        );
      })}
      {isFetchingNextPage && <div>Loading more...</div>}
      {!hasNextPage && !isFetchingNextPage && <div>No more data</div>}
    </Grid2>
  );
};

export default ProductList;
