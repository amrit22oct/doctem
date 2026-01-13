import MainTemplate from "../../components/templates/MainLayout";

const RouteController = (Component, meta = {}) => {
  return (
    <MainTemplate
      breadcrumbItems={meta.breadcrumb || []}
      breadcrumbIcon={meta.breadcrumbIcon || null}
      headerImage={meta.showImage ? meta.image : null}
    >
      {Component}
    </MainTemplate>
  );
};

export default RouteController;
