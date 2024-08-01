import { useState } from "react";

export default function CreateCard() {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [tel, setTel] = useState('');
    const [imageUrl, setImageUrl] = useState(''); 
    const [cards, setCards] = useState([]);
    const [nextId, setNextId] = useState(1); 
    const [selectedCard, setSelectedCard] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleClickAdd = () => { 
        setCards([
            ...cards,
            {
                id: nextId, 
                name: name,
                note: note,
                tel: tel,
                image: imageUrl 
            }
        ]);
        setNextId(nextId + 1); 
        setName('');
        setNote('');
        setTel('');
        setImageUrl(''); 
    };

    const handleViewDetails = (card) => {
        setSelectedCard(card);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedCard(null);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-purple-200 text-black shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-center text-black mb-4">เพิ่มข้อมูล</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-xl font-medium text-gray-700">ชื่อ-สกุล</label>
                    <input 
                        type="text"
                        name="cName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="กรุณากรอกชื่อ-สกุล"
                    />
                </div>
                <div>
                    <label className="block text-xl font-medium text-gray-700">ที่อยู่</label>
                    <textarea 
                        name="cNote"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="กรุณากรอกที่อยู่"
                    />
                </div>
                <div>
                    <label className="block text-xl font-medium text-gray-700">เบอร์โทรศัพท์</label>
                    <input 
                        type="text"
                        name="cTel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="กรุณากรอกเบอร์โทรศัพท์"
                    />
                </div>
                <div>
                    <label className="block text-xl font-medium text-gray-700">ลิงค์ของภาพ</label>
                    <input 
                        type="text"
                        name="cImageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="กรุณากรอกลิงค์ของภาพ"
                    />
                </div>
                <button 
                    type="button"
                    onClick={handleClickAdd} 
                    className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    เพิ่มนามบัตร
                </button>
            </form>
            <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">รายการนามบัตร</h2>
                    <p className="text-lg font-medium text-gray-600">จำนวน {cards.length} รายการ</p>
                </div>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Address</th>
                            <th className="border border-gray-300 px-4 py-2">Telephone Number</th>
                            <th className="border border-gray-300 px-4 py-2">Picture</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map(card => (
                            <tr key={card.id}>
                                <td className="text-center border border-gray-300 px-4 py-2">{card.id}</td>
                                <td className="text-center border border-gray-300 px-4 py-2">{card.name}</td>
                                <td className="text-center border border-gray-300 px-4 py-2">{card.note}</td>
                                <td className="text-center border border-gray-300 px-4 py-2">{card.tel}</td>
                                <td className="text-center border border-gray-300 px-4 py-2">
                                    {card.image && <img src={card.image} alt={`Card ${card.id}`} className="w-24 h-24 object-cover rounded-md" />}
                                </td>
                                <td className="text-center border border-gray-300 px-4 py-2">
                                    <button 
                                        onClick={() => handleViewDetails(card)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md"
                                    >
                                        ดูรายละเอียด
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showPopup && selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl font-semibold mb-4">รายละเอียดนามบัตร</h3>
                        <p><strong>ID:</strong> {selectedCard.id}</p>
                        <p><strong>Name:</strong> {selectedCard.name}</p>
                        <p><strong>Address:</strong> {selectedCard.note}</p>
                        <p><strong>Telephone Number:</strong> {selectedCard.tel}</p>
                        <p><strong>Picture:</strong></p>
                        {selectedCard.image ? (
                            <img src={selectedCard.image} alt={`Card ${selectedCard.id}`} className="w-full h-48 object-cover rounded-md mb-4" />
                        ) : (
                            <p>No image available</p>
                        )}
                        <button 
                            onClick={handleClosePopup} 
                            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
