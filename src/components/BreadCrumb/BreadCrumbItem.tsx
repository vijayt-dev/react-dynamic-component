function BreadCrumbItem({ className, children, ariaCurrent }: any) {
  return (
    <li className={className} aria-current={ariaCurrent}>
      {children}
    </li>
  );
}

export default BreadCrumbItem;
