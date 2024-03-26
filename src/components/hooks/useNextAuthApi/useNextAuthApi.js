import { useState } from "react";
import { signIn } from "next-auth/react";

export const useNextAuthApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAuthApi = async ({ email, password }) => {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result.ok === false) setError(result.error);

      return result;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleAuthApi };
};
