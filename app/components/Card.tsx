const Card = () => {
    return (
        <div className="h1-full bg-white rounded-lg shadow-lg">
            <div className="aspect-video w-full">
                <img src="https://placehold.co/600x400" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 text-sm text-gray-600">
                <h2>Brazil</h2>
                <div>
                    <span>Capital:</span>
                    <span>Brasilia</span>
                </div>
                <div>
                    <span>Region:</span>
                    <span>South America</span>
                </div>
                <div>
                    <span>Population:</span>
                    <span>214000000</span>
                </div>
            </div>
        </div>
    )
};

export default Card;