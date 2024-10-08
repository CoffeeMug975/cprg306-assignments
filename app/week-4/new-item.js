

export default function NewItem({currentQuantity, incrementCountQuantity, decrementCountQuantity}) {

    // Create a base button style
    const baseStyle = "p-1 rounded-lg mx-3 w-10";

    // Conditional styles for + and - buttons
    const incrementButtonStyle = `${baseStyle} ${currentQuantity > 19 ? 'bg-blue-300' : 'bg-blue-600'}`;
    const decrementButtonStyle = `${baseStyle} ${currentQuantity < 2 ? 'bg-blue-300' : 'bg-blue-600'}`;

    return (
        <div className="m-5 flex justify-center bg-white p-2 w-1/6">
            <p className="text-black">{currentQuantity}</p>
            <button onClick={incrementCountQuantity} className= {incrementButtonStyle}>+</button>
            <button onClick={decrementCountQuantity} className= {decrementButtonStyle}>-</button>
        </div>
    );
} 