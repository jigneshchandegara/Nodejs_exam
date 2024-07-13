import axios from 'axios'
import React, { useEffect, useState } from 'react'

const myRecipes = () => {
    let userget = JSON.parse(localStorage.getItem("user"))
    // let usertoken = Cookies.get("token");
    const [getmyrecipe, setgetmyrecipe] = useState([])


    const myrecipe = async () => {
        try {
            let result = await axios.get(`http://localhost:8080/v1/recipe/getmyrecipe/${userget._id}`)
            // let result = await axios.get(`http://localhost:8080/v1/recipe/getmyrecipe/66925220b387cecfd9fec3aa`)
            console.log(result);
            setgetmyrecipe(result.data)
        } catch (error) {
            console.error("Error fetching my recipes:", error);
        }
    }

    useEffect(() => {
        myrecipe()
    }, [])

    return (
        <>
            <div className="text-center mt-20 bg-blue-900 text-white">My Recipe List</div>
            <div className="container">
                <div className='flex flex-wrap justify-between'>
                    {
                        getmyrecipe?.data?.map((recipe) => {
                            return (
                                <div className=" m-5  ">
                                    <div key={recipe._id} className=" w-[300px] p-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">title :- {recipe.title}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">description :- {recipe.description}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">instructions :- {recipe.instructions}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">createdBy :- {recipe.createdBy.username}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default myRecipes
