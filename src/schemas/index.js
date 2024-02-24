import * as Yup from "yup";
const categories = ["Meal", "Snack", "Dessert"];
const options = ["Small", "Medium", "Large", "N/A"];

const ItemSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  cost: Yup.number()
    .min(1, "Cost can't be zero or negative!")
    .max(9999, "Too expensive!")
    .required("Required"),
  category: Yup.string().oneOf(categories).required("Required"),
  price: Yup.number()
    .min(1, "Price can't be zero or negative!")
    .max(9999, "Too expensive!")
    .required("Required"),
  stock: Yup.number()
    .min(0, "Stock can't be negative!")
    .max(99999, "Too many!")
    .required("Required"),
  option: Yup.string().oneOf(options).required("Required"),
});

export default ItemSchema;
