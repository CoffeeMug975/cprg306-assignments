

const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex flex-col justify-between p-4 border-b border-gray-400">
            <div className="text-lg font-bold">{name}</div>
            <div className="text-sm">Buy {quantity} in {category}</div>
        </li>
    );
};

export default Item;
