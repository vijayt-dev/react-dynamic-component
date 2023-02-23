function Card({ className, style, children }: any) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default Card;
