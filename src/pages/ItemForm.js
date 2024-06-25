import { useEffect, useState } from "react";
import FormInput from "../components/common/FormInput";
import "./ItemForm.css";
import axios from "axios";
import { api } from "../config";
import SubmitButton from "../components/common/SubmitButton";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const ItemForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios.get(`${api}/item/${params.id}`);

      const item = result.data;

      setName(item.name);
      setPrice(item.price);
      setImage(item.image);
    };

    if (params.id) {
      fetchItem();
    }
  }, [params.id]);

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const result = await axios.post(`${api}/upload`, formData);
    setImage(result.data.path);
  };

  const handleSubmit = async () => {
    try {
      if (params.id) {
        await axios.put(`${api}/item/edit/${params.id}`, {
          name,
          price,
          image,
        });
        toast.success("Item updated successfully");
        navigate("/admin/menu-items");
      } else {
        await axios.post(`${api}/item/add`, {
          name,
          price,
          image,
        });
        toast.success("Item Added successfully");
        navigate("/admin/menu-items");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className='item-form-container'>
      <h2 className='subtitle'>{params.id ? "Edit" : "Add"} Form</h2>
      <form>
        <FormInput
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label='Price'
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormInput label='Image' type='file' onChange={handleImage} />
        {image && (
          <img src={`${api}${image}`} alt='' width='100px' height='100px' />
        )}

        <SubmitButton
          text={params.id ? "Update Item" : "Add Item"}
          className='submit-button'
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default ItemForm;
