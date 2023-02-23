function Button({ className, children, type }: any) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}

export default Button;
