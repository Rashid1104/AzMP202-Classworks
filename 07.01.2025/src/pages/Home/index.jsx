import React from 'react'
import { useDeleteCategoryByiDMutation, useGetAllCategoriesQuery } from '../../redux/services/productApi';
import { FaTrashAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorites } from '../../redux/features/WishlistApi';

const Home = () => {
  const { data: categories, isLoading, isError, refetch } = useGetAllCategoriesQuery();

  const [DeleteCategoryByiD]  = useDeleteCategoryByiDMutation();

  const wishlist = useSelector((state) => state.wishlist)

  const dispatch = useDispatch()
  const handleDelete = async (cId) =>{
    try {
      await DeleteCategoryByiD(cId)
      refetch();
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div>
            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>some error occured!</h1>}

            {categories &&
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c) => {
                            return (<tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.description}</td>
                                <td>
                                  <button className='btn' onClick={() => {handleDelete(c.id)}}><FaTrashAlt /></button>
                                  <button onClick={() => { dispatch(toggleFavorites(c)) }}>
                                        {
                                            !wishlist?.items.find((q) => q.id === c.id) ? <FaRegHeart /> : <FaHeart />
                                        }
                                    </button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>

            }
        </div>
  )
}

export default Home