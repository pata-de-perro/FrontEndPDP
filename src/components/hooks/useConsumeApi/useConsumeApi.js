import { useState } from "react";

export const useConsumeApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConsumeApi = async (serviceApi, data) => {
    try {
      setLoading(true);
      const result = await serviceApi(data);
      return result;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleConsumeApi };
};
