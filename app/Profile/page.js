
'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    phone: '',
    address: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user/getUser");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUser(data);
        setFormData({
          phone: data.phone || '',
          address: data.address || ''
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user/updateUser", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      const updatedUser = await response.json();
      setUser(updatedUser);
      alert("Updated successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">

      {loading ? (
        <p className="text-lg text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-lg text-red-600">{error}</p>
      ) : user ? (
        <div className="bg-emerald-950 shadow-lg rounded-lg p-6 w-full flex  flex-row justify-between max-w-3xl">
          <Image src="/food2.avif" alt="food image" width={350} height={300} layout="intrinsic" priority={true} />
          <form onSubmit={handleSubmit} className="mx-auto">


            <h1 className="text-3xl font-semibold text-white mb-6">User Profile</h1>

            <hr className="border-t-2 border-gray-300 my-4" />
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={user.name}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={user.email}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-lg text-white mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg text-white mb-2">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-md mt-4">
              Update Profile
            </button>

          </form>
        </div >
      ) : (
        <p className="text-lg text-gray-600">Please sign in to view your profile.</p>
      )}
    </div >
  );
};

export default Profile;
