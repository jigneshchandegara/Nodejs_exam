import React, { useRef } from 'react'
import axios from "axios";
import Swal from "sweetalert2";


const RecipeForm = () => {
    let title = useRef();
    let description = useRef();
    let instructions = useRef();

    let getid =  JSON.parse(localStorage.getItem("user"));
    let Addrecipe = async (e) => {
        e.preventDefault();
        let recipedata = {
            title: title.current.value,
            description: description.current.value,
            instructions: instructions.current.value,
            createdBy: getid._id
        }
        try {

            let result = await axios.post("http://localhost:8080/v1/recipe/recipecreate", recipedata)
            console.log(result);
            if (result) {
                Swal.fire({
                    title: "Good job!",
                    text: "add Recipe success",
                    icon: "success"
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error}`
            });
        }
    }


    return (
        <>
            <div className="container">
                <section class="bg-white dark:bg-gray-900 ">
                    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg ">
                        <h2 class="mb-4 text-4xl  tracking-tight font-extrabold text-center text-white dark:text-white bg-blue-900">Recipe From</h2>
                        <form class="space-y-8">
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">title</label>
                                <input type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="title" required ref={title} />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">description</label>
                                <input type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="description" required ref={description} />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">instructions</label>
                                <input type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="instructions" required ref={instructions} />
                            </div>
                        
                            <button class="py-3 px-5 bg-blue-600 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={Addrecipe}
                            >Send message</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RecipeForm