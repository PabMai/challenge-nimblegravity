
const baseUrl = import.meta.env.VITE_BASE_URL;

if (!baseUrl) {
	throw new Error('VITE_BASE_URL is not defined in the environment variables');
}

export const Env = {
	BASE_URL: baseUrl,
};

