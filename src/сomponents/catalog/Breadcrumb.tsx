import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setBreadcrumb,
  clearSelectedBreadcrumb,
} from '../../utils/reducers/productsListReducer';

function BreadcrumbCatalog(): React.ReactElement {
  const currentPath = useLocation().pathname;

  const dispatch = useDispatch();

  const breadcrumbItems = currentPath
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      const pathSegment = `/${crumb}`;
      const isLastCrumb = index === array.length - 1;
      const formattedName = crumb.replace('%20', '-');
      const crumbCapitalize =
        formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

      const handleBreadcrumbClick = (): void => {
        if (isLastCrumb) {
          dispatch(clearSelectedBreadcrumb());
        } else {
          dispatch(setBreadcrumb(crumbCapitalize));
        }
      };

      return (
        <div key={crumb} className="flex items-center">
          {isLastCrumb ? (
            <span className="text-orange-500 cursor-default">
              {crumbCapitalize}
            </span>
          ) : (
            <Link
              to={pathSegment}
              className="hover:text-zinc-600"
              onClick={handleBreadcrumbClick}
            >
              {crumbCapitalize}
            </Link>
          )}
          {!isLastCrumb && (
            <span className="mx-2 text-sm text-zinc-600">&#62;</span>
          )}
        </div>
      );
    });

  return <div className="flex mb-6">{breadcrumbItems}</div>;
}

export default BreadcrumbCatalog;
