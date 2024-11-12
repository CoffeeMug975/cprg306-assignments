export default function Item ({ name, quantity, category, onSelect }) {
    return (
        <li 
            className="flex flex-col justify-between p-4 border-b border-gray-400 cursor-pointer"
            onClick={() => onSelect(name)}
        >
            <h2 className="font-bold text-2xl">{name}</h2>
            Quantity: {quantity} (Category: {category})
        </li>
    );
}
