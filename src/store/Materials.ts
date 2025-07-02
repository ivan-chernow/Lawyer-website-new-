import {create} from 'zustand';

interface UseMaterialsState {
	hovered: boolean;
	countMaterials: number;
	isAnimating: boolean;

	setHovered: (hovered: boolean | number | null) => void;
	setCountMaterials: (count: number) => void;
	setIsAnimating: (isAnimating: boolean) => void;

}


const useMaterials = create<UseMaterialsState>((set) => ({
	hovered: null,
	countMaterials: 3,
	isAnimating: false,

	setHovered: (hovered) => set({hovered}),
	setCountMaterials: (count) => set({countMaterials: count}),
	setIsAnimating: (isAnimating) => set({isAnimating}),
}));

export default useMaterials;



