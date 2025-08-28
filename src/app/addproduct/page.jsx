"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  ImageIcon,
  Tags,
  Info,
  DollarSign,
  List,
  UploadCloud,
} from "lucide-react";
import Select from "react-select";
import Swal from "sweetalert2";
import { useDropzone } from "react-dropzone";
import { addProduct } from "../actions/productAction";

const categoryOptions = [
  { value: "Storage", label: "Storage" },
  { value: "Decor", label: "Decor" },
  { value: "Utility", label: "Utility" },
];

const tagSuggestions = [
  { value: "handmade", label: "Handmade" },
  { value: "clay", label: "Clay" },
  { value: "pot", label: "Pot" },
  { value: "eco-friendly", label: "Eco-Friendly" },
];

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#FAF3E0",
    borderColor: state.isFocused ? "#E2725B" : "#4A2C2A",
    boxShadow: state.isFocused ? "0 0 0 1px #E2725B" : "none",
    "&:hover": {
      borderColor: "#E2725B",
    },
    minHeight: "44px",
    borderRadius: "0.5rem",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 8px",
  }),
  input: (provided) => ({
    ...provided,
    color: "#4A2C2A",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#8B5E3C",
    opacity: 0.8,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#4A2C2A",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#D4B996",
    borderRadius: "0.375rem",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#4A2C2A",
    fontWeight: 500,
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#4A2C2A",
    "&:hover": {
      backgroundColor: "#E2725B",
      color: "#FAF3E0",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#FAF3E0",
    border: "1px solid #4A2C2A",
    borderRadius: "0.5rem",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#E2725B"
      : state.isFocused
      ? "rgba(226, 114, 91, 0.2)"
      : "#FAF3E0",
    color: state.isSelected ? "#FAF3E0" : "#4A2C2A",
    "&:active": {
      backgroundColor: "#E2725B",
    },
  }),
};

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setImagePreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => setImageFile(acceptedFiles[0]),
  });

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPrice(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

  const handleTagChange = (selectedOptions) => {
    setTags(selectedOptions);
  };

  const onSubmit = async (data) => {
    if (!imageFile) {
      Swal.fire("Error!", "Please upload an image.", "error");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );

      const imgData = await res.json();
      const imageUrl = imgData.secure_url;

      const productData = {
        name: data.name,
        detail: data.detail,
        price: Number(price.replace(/,/g, "")),
        category: data.category.value,
        description: data.description,
        tags: tags.map((t) => t.value),
        image: imageUrl,
      };

      const result = await addProduct(productData);

      if (result.success) {
        Swal.fire("Success!", "Product added successfully!", "success");
        reset();
        setTags([]);
        setPrice("");
        setImageFile(null);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to add product.", "error");
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-[#FAF3E0] flex items-center justify-center playfair">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-[#D4B996] p-8 rounded-2xl shadow-2xl shadow-[#4A2C2A]/20 space-y-6"
      >
        <h1 className="text-3xl font-bold text-[#4A2C2A] text-center mb-4">
          Add New Claycraft Product
        </h1>

        {[
          {
            id: "name",
            label: "Name",
            icon: Box,
            placeholder: "e.g., Terracotta Water Jug",
            required: "Product name is required",
          },
          {
            id: "detail",
            label: "Detail",
            icon: Info,
            placeholder: "e.g., Handcrafted with natural clay",
            required: "A short detail is required",
          },
        ].map((field) => (
          <div key={field.id}>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-[#4A2C2A]">
              <field.icon className="w-5 h-5" /> {field.label}
            </label>
            <input
              type="text"
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="w-full bg-[#FAF3E0] border-2 border-[#4A2C2A] text-[#4A2C2A] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent placeholder:text-[#8B5E3C]/70 transition"
            />
            {errors[field.id] && (
              <p className="text-red-700 text-xs mt-1">
                {errors[field.id].message}
              </p>
            )}
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-[#4A2C2A]">
              <DollarSign className="w-5 h-5" /> Price
            </label>
            <input
              type="text"
              value={price}
              onChange={handlePriceChange}
              placeholder="e.g., 1,500"
              className="w-full bg-[#FAF3E0] border-2 border-[#4A2C2A] text-[#4A2C2A] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent placeholder:text-[#8B5E3C]/70 transition"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-[#4A2C2A]">
              <List className="w-5 h-5" /> Category
            </label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={categoryOptions}
                  placeholder="Select a category..."
                  styles={customSelectStyles}
                  instanceId="category-select"
                />
              )}
            />
            {errors.category && (
              <p className="text-red-700 text-xs mt-1">
                {errors.category.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-[#4A2C2A]">
            <Info className="w-5 h-5" /> Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            rows={4}
            placeholder="Describe the product's features, materials, and story..."
            className="w-full bg-[#FAF3E0] border-2 border-[#4A2C2A] text-[#4A2C2A] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent placeholder:text-[#8B5E3C]/70 transition"
          />
          {errors.description && (
            <p className="text-red-700 text-xs mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-[#4A2C2A]">
            <Tags className="w-5 h-5" /> Tags
          </label>
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={tagSuggestions}
                isMulti
                placeholder="Add relevant tags..."
                onChange={handleTagChange}
                value={tags}
                styles={customSelectStyles}
                instanceId="category-select"
              />
            )}
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-[#4A2C2A]">
            <ImageIcon className="w-5 h-5" /> Product Image
          </label>
          <div
            {...getRootProps()}
            className={`w-full h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors duration-300 ${
              isDragActive
                ? "border-[#E2725B] bg-[#E2725B]/10"
                : "border-[#4A2C2A]/50 hover:border-[#E2725B]"
            }`}
          >
            <input {...getInputProps()} />
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Product Preview"
                className="w-full h-full object-contain rounded-lg p-2"
              />
            ) : (
              <div className="text-center text-[#8B5E3C]">
                <UploadCloud className="w-10 h-10 mx-auto mb-2" />
                <p className="font-semibold">Drag & drop an image here</p>
                <p className="text-sm">or click to select a file</p>
              </div>
            )}
          </div>
        </div>

        
        <button
          type="submit"
          disabled={loading} 
          className={`w-full bg-[#E2725B] text-[#FAF3E0] font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl shadow-[#4A2C2A]/30 transform hover:-translate-y-0.5 ${
            loading
              ? "bg-[#E2725B] cursor-not-allowed"
              : "bg-[#E2725B] text-[#FAF3E0]"
          }`}
        >
          {loading ? "Submitting..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
