import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import toggleFavorites from "../../redux/features/WishlistApi";

const Wishlist = () => {
  // Check if wishlist is correctly defined in the Redux state
  const wishlist = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  // Ensure wishlist is properly populated before using it
  if (!wishlist || !Array.isArray(wishlist.items)) {
    return <h2>Loading...</h2>; // Or handle an empty/undefined state more gracefully
  }

  return (
    <div>
      {wishlist.items.length === 0 ? (
        <h2>Wishlist is empty!</h2>
      ) : (
        wishlist.items.map((q) => (
          <div key={q.id}>
            <span>{q.name}</span>
            <button onClick={() => dispatch(toggleFavorites(q))}>
              <FaHeart />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
