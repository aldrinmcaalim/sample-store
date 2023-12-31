import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/Categories.context";
import CategoryPreview from "../../components/category-preview/CategoryPreview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        // console.log("prodhooo", products.length);
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
