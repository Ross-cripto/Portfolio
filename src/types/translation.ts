import type { Dispatch, ReactNode, SetStateAction } from "react";



export interface LanguageContextType {
	/** Current language code, e.g., 'en' or 'es' */
	language: string;
	/** Setter for the language state */
	setLanguage: Dispatch<SetStateAction<string>>;
	/** Translation function: accepts a key path and returns the translated string */
	t: (key: string) => string;
}

export interface LanguageProviderProps {
	children: ReactNode;
}
