import React, { useState } from "react";

type FormData = {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
};

const ProductForm: React.FC = () => {
  const [formData, useFormData] = useState<FormData>({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name, "at handle");
    useFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // This function is called when the form is submitted
  const handleSubmitData = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<any> => {
    e.preventDefault();
    console.log(formData, "at sumit");

    const response = await fetch("http://localhost:8800/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    });
    console.log(response, "check after inserted");
  };

  return (
    <div>
      <form onSubmit={handleSubmitData}>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          value={formData.description}
          placeholder="description"
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          placeholder="company"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          placeholder="location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          value={formData.salary}
          placeholder="salary"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
