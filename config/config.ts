type EnvironmentConfig = {
  API_SERVER_URL?: string
}

const getURL = () => {
  const environments: Record<string, EnvironmentConfig> = {
    production: {
      API_SERVER_URL: "",
    },
    staging: {
      API_SERVER_URL: "",
    },
    development: {
      API_SERVER_URL: "http://localhost:5000/api",
    },
  };

  const env = process.env.NEXT_PUBLIC_ENV || "production";
  return environments[env]
}

export const { API_SERVER_URL } = getURL();
