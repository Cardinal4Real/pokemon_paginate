import { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../Context/RecipeContext";

export default function Search() {
    const [itemToFind, setItemToFind] = useState("");
    const {recipes}=useContext(RecipeContext);
    const {setFilteredItems} = useContext(RecipeContext);

    const searchForItem = (event) => {
        let { name, value } = event.target;
        console.log({value});
        setItemToFind(value);   
    }

    useEffect(()=>{
        // ?. (Optional Chaining Operator): This operator is used to safely access properties of an object that might be undefined or null.
        //Short-Circuiting Behavior: && Operator: This operator exhibits short-circuiting behavior. If the left-hand side (LHS) evaluates to false or null or undefined, the entire expression evaluates to false, and the right-hand side (RHS) is not even evaluated.
        const res=recipes?.filter((item)=>{
            let recipeName = item.name.toLowerCase();
            return (recipeName.includes(itemToFind.toLowerCase()));
        });
        setFilteredItems(res);
        console.log({res});
    },[itemToFind]);

    return (
        <>
            <div className="searchMain">
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <div className="input-group">
                        <input name='searchfield' onChange={searchForItem} type="text" className="form-control" placeholder="Search pokemon" />
                    </div>
                </div>
            </div>
        </>
    );
}