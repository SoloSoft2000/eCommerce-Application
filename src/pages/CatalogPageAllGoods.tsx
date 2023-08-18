import React from 'react';

function CatalogPageAllGoods(): React.JSX.Element {
  return (
    <main className="container mx-auto">
      <h3 className="text-xl font-bold pt-20 text-center">All product</h3>
      <div className="flex justify-around items-center flex-wrap gap-8 md:gap-y-14 py-8"></div>
    </main>
  );
}

export default CatalogPageAllGoods;
