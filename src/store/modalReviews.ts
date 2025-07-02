import { create } from 'zustand';

interface ModalReviewsState {
	modalReviews: boolean;
	reviewsCount: number;
	loadingReviews: boolean;
	setReviewsCount: (reviewsCount: number) => void;
	openModalReviews: () => void;
	closeModalReviews: () => void;
	setLoadingReviews: (loadingReviews: boolean) => void;
}

const useModalReviews = create<ModalReviewsState>((set) => ({
	modalReviews: false,
	reviewsCount: 2,
	loadingReviews: false,

	setReviewsCount: (reviewsCount) => set({ reviewsCount }),

	openModalReviews: () => set({ modalReviews: true }),

	closeModalReviews: () => set({ modalReviews: false }),

	setLoadingReviews: (loadingReviews) => set({ loadingReviews }),
}));

export default useModalReviews;