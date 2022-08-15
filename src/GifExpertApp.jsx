import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);



    function addOnCategory(newCategory) {

        //comprueba si se repite la categoria
        const exist = categories.find(c => {
            return c.toLocaleLowerCase() == newCategory.toLocaleLowerCase();
        });

        if (exist) return;

        setCategories([...categories, newCategory].sort());
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory={addOnCategory}
            />


            {
                categories.map(category => {
                    return (
                        < GifGrid key={category} category={category} />
                    )
                })
            }

        </>
    )
}
