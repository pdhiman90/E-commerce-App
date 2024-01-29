import React from "react";
import {useNavigate} from "react-router-dom"


const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error,setError]=React.useState(false);
    const navigate = useNavigate();
    const addProduct = async()=>{


        console.warn(!name)
        if(!name|| !price || !category || !company){
            setError(true);
        return false;
        }

        console.warn(name,price,category,company);
        const userId  = JSON.parse(localStorage.getItem('user'))._id;
        let result= await fetch('http://localhost:8000/add-product',
       {
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            'Content-Type':'application/JSON'
        }
       });
       result = await result.json();
       console.warn(result);
       navigate('/')
    }
    return (
        <div className="addProduct">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" placeholder="Enter Product Name"
                value={name} onChange={(e) => {setName(e.target.value)} }
            />{error && !name && <span className="invalid-input">Enter Valid Name</span>}

            <input className="inputBox" type="text" placeholder="Enter Product Price"
                value={price} onChange={(e) => {setPrice(e.target.value)} }
            />{error && !price && <span className="invalid-input">Enter Valid Price</span>}

            <input className="inputBox" type="text" placeholder="Enter Product Category"
                value={category} onChange={(e) =>  {setCategory(e.target.value)} }
            />{error && !category && <span className="invalid-input">Enter Valid Category</span>}

            <input className="inputBox" type="text" placeholder="Enter Product Company"
                value={company} onChange={(e) => {setCompany(e.target.value)} }
            />{error && !company && <span className="invalid-input">Enter Valid Company</span>}
            
            <button onClick={addProduct} className="appbutton">Add Product</button>
        </div>
    )
}
export default AddProduct;