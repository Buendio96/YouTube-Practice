import { useCallback, useState } from "react";

export default function useRecipe() {
	const [showRecipe, setShowRecipe] = useState(false)

	const toggleShowRecipe = useCallback(() => {
		setShowRecipe(prevShowRecipe => !prevShowRecipe);
	}, []);

	return { showRecipe, toggleShowRecipe }
};
