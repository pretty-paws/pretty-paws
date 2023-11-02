import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../store/AuthProvider';
import { observer } from 'mobx-react-lite';

const CatalogList = observer(() => {
  const { category } = useParams();

  const store = useStore();
  const {
    catalog: { getCategories },
  } = store;

  useEffect(() => {
    getCategories(category);
  }, [category]);
  console.log(category);
  return <div>CatalogList</div>;
});

export default CatalogList;
