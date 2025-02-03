import { useState } from "react";
import Input from "../components/Input/Input";
import { toast } from "react-toastify";

type FormDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      ...formData,
      access_key: "6f63d726-c2f2-4cf9-945b-6fe6ff434ae8",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then(res => res.json());

    if (res.success) {
      toast.success(res.message);
    }

    // send the form data to your backend here. For simplicity, I'm just logging it here.
  };

  return (
    <section className="w-full h-full flex items-center p-10 md:p-20 overflow-y-auto">
      <div className="w-full lg:w-1/2">
        <h2 className="text-5xl text-[#ffd700] font-semibold flex gap-2 cursor-pointer">
          Contact me
        </h2>
        <p className="text-white text-sm mt-5">
          I am interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to contact me using below form either.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-2 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              handleChange={handleChange}
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              handleChange={handleChange}
            />
          </div>
          <Input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            handleChange={handleChange}
          />

          <div className="group">
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={e =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              rows={7}
              required
              className="w-full p-2 bg-[#115173] text-base text-white outline-none"
            />
            <div className="group-hover:animate-progress h-[2px] group-hover:bg-[#ffd700]"></div>
          </div>
          <button
            type="submit"
            className="w-max px-3 py-2 ml-auto uppercase border border-[#ffd700] rounded text-[11px] text-[#ffd700] tracking-[3px] hover:bg-[#ffd700] hover:text-[#181818]">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
