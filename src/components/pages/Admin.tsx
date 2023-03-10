import React, {useState} from 'react';
import "./MainPage.scss"
import {IProduct} from "../../types/product";
const Admin = () => {
    const [value , setValue] =useState<string>("")
    const [img, setImg] = useState<ArrayBuffer | string | any | undefined>("")

    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        setImg(fileReader.result)
        console.log(fileReader.result)
    }
    const [price , setPrice] =useState(0)
    localStorage.getItem("product")
    const product:IProduct ={
        id:1,
        title:value,
        price:price,
        img:img,
    }
    localStorage.setItem("product",JSON.stringify([product]))
    console.log(product)


    const handleChangeUrl = (event:React.ChangeEvent<any>) => {
        fileReader.readAsDataURL(event.target.files[0])
    }
    return (
        <>
        <div id="admin">
            <div className="container">
                <div className="admin">
                    <p className={"text-center text-black"}>CREATE PRODUCT</p>

                    <div className="admin--input">
                        <div className="admin--input--left">
                            <input type="file" className={"one"}
                                onChange={handleChangeUrl}
                            />
                            <input type="text" className={"two"} placeholder="food name" onChange={(e) => setValue(e.target.value)}/>
                            <input type="number" className={"three"} placeholder="price" />

                        </div>
                        <div className="admin--input--right flex items-center justify-center">
                            {
                                product.img ? <img src={product.img}  alt=""/> :
                                    <div className={"text-black "}>place for a photo</div>
                            }
                        </div>
                    </div>
                    <div className="admin--btn">
                        <button>Create</button>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
};

export default Admin;