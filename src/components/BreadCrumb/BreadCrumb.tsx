function BreadCrumb({ ariaLabel, children }: any) {
  return (
    <nav aria-label={ariaLabel}>
      <ol className="breadcrumb">{children}</ol>
    </nav>
  );
}

export default BreadCrumb;
