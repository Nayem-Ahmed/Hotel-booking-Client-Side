import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CategorieiconBox from "./CategorieiconBox";

import { categories } from "./CategoriesData";

 

 

const Categories = () => {
    const [params,setParams] = useSearchParams()
    const category = params.get('category')
    return (
        <Container>

        <div className="  flex gap-6 mb-4 items-center justify-center p-2 overflow-x-auto">
            {categories.map(categorieiconbox=> <CategorieiconBox key={categorieiconbox.label} selected={category == categorieiconbox.label} categorieiconbox={categorieiconbox}></CategorieiconBox>)}
        </div>
        </Container>
    );
};

export default Categories;