import "./category.scss";

interface CategoryListProps {
  values: string[];
}

const CategoryList = ({ values }: CategoryListProps) => {
  return (
    <ul>
      {values.map((v) => (
        <li key={v} className="category">
          {v}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
