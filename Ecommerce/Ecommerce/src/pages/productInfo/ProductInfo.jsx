import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../firebase/FirebaseConfig';

// Component for Rating Stars
const RatingStars = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div>
            {stars.map((star, index) => (
                <span key={index} className={star <= rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                </span>
            ))}
        </div>
    );
};

// ProductInfo Component
const ProductInfo = () => {
    const { loading, setLoading } = useContext(myContext);
    const [product, setProduct] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [rating, setRating] = useState(0);
    const params = useParams();

    const getProductData = async () => {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id));
            setProduct(productTemp.data());
            setLoading(false);
        } catch (error) {
            console.error("Error fetching product:", error);
            toast.error('Failed to fetch product');
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, [params.id]);

    useEffect(() => {
        // Calculate average rating and update review count
        if (comments.length > 0) {
            const totalRating = comments.reduce((acc, cur) => acc + cur.rating, 0);
            const averageRating = totalRating / comments.length;
            const updatedProduct = {
                ...product,
                reviews: comments.length,
                rating: Math.round(averageRating),
            };
            setProduct(updatedProduct);
        }
    }, [comments]);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentText && rating > 0) {
            const newComment = {
                text: commentText,
                rating: rating,
            };
            setComments([...comments, newComment]);
            setCommentText('');
            setRating(0);
        }
    };

    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    {loading && <div>Loading...</div>}
                    {product && (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <div className="lg:w-1/3 w-full lg:h-auto h-64 overflow-hidden rounded">
                                <img
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-58"
                                    src={product.imageUrl}
                                />
                            </div>
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    Silox.in
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {product.title}
                                </h1>
                                <div className="flex mb-4">
                                    <RatingStars rating={product.rating} />
                                    <span className="text-gray-600 ml-3">({product.reviews} Reviews)</span>
                                </div>
                                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                    {product.description}
                                </p>
                                <div className="flex items-center pb-5 border-b-2 border-gray-200 mb-5">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        ₹{product.price}
                                    </span>
                                    <button onClick={() => addCart(product)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                        Add To Cart
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">Your Comment:</label>
                                        <textarea
                                            id="comment"
                                            value={commentText}
                                            onChange={(e) => setCommentText(e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            rows="4"
                                            placeholder="Enter your comment..."
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
                                        <select
                                            id="rating"
                                            value={rating}
                                            onChange={(e) => setRating(parseInt(e.target.value))}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        >

                                            <option value="0">Select Rating</option>
                                            <option value="1">1 Star</option>
                                            <option value="2">2 Stars</option>
                                            <option value="3">3 Stars</option>
                                            <option value="3">3 Stars</option>
                                            <option value="4">4 Stars</option>
                                            <option value="5">5 Stars</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Submit
                                    </button>
                                </form>
                                <div className="mt-8">
                                    <h2 className="text-xl font-semibold mb-2">Comments</h2>
                                    {comments.map((comment, index) => (
                                        <div key={index} className="border-b border-gray-200 py-4">
                                            <RatingStars rating={comment.rating} />
                                            <p className="text-gray-700 mt-2">{comment.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default ProductInfo;
