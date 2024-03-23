export const ArrowBack = ({ backRoute }: { backRoute: string }) => {
  return (
    <a href={backRoute}>
      <span>&larr;</span>
    </a>
  );
};
