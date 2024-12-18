import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (

        <Route
          path={path}
          element={(
            <div className="page-wrapper">
              {element}
            </div>
                    )}
          key={path}
        />
      ))}
    </Routes>
  </Suspense>
);
