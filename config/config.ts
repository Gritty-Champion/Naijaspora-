type EnvironmentConfig = {
  API_SERVER_URL: string;
  CURRENT_ENV: string;
};

const getURL = (): EnvironmentConfig => {
  const environments: Record<string, EnvironmentConfig> = {
    production: {
      API_SERVER_URL: process.env.NEXT_PUBLIC_API_URL || "",
      CURRENT_ENV: "production",
    },
    staging: {
      API_SERVER_URL: process.env.NEXT_PUBLIC_API_URL || "",
      CURRENT_ENV: "staging",
    },
    development: {
      API_SERVER_URL: "http://localhost:5000/api",
      CURRENT_ENV: "development",
    },
  };

  const env = process.env.NEXT_PUBLIC_ENV || "production";
  const config = environments[env];

  if (!config) {
    console.warn(`Invalid NEXT_PUBLIC_ENV value "${env}". Falling back to development.`);
    return environments.development;
  }

  return config;
};

export const { API_SERVER_URL, CURRENT_ENV } = getURL();

export const INCLUDE_CREDENTIALS =
  CURRENT_ENV === "production" || CURRENT_ENV === "staging" ? "include" : undefined;
