export default function Item ({ name, quantity, category }) {
    return (
        <li className="flex flex-col justify-between p-4 border-b border-gray-400">
            <h2 className="font-bold text-2xl">{name}</h2>
            Quantity: {quantity} (Category: {category})
        </li>
    );
}
