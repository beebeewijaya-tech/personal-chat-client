function Card(props) {
  const { list, onChange } = props;
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 gap-y-2">
      {list.map((item) => (
        <section className="bg-white shadow-lg rounded-lg" key={item.id}>
          <section className="flex px-5 pb-4 pt-4">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-pink-600 mr-5"
              checked={item.isCompleted}
              onChange={() => onChange(item)}
            />
            <p
              className={`text-color text-sm ${
                item.isCompleted && "line-through"
              }`}
            >
              {item.text}
            </p>
          </section>
        </section>
      ))}
    </section>
  );
}

export default Card;
