

import ItemList from './item-list';

const Page = () => {
    return (
        <main className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 flex justify-center">Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;