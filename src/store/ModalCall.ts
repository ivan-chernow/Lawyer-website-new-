import {create} from 'zustand';

interface ModalCallState {
	modalCall: boolean;
	loadingCall: boolean;
	openModal: () => void;
	closeModal: () => void;
	setLoading: (loadingCall: boolean) => void;
}

const useModalCall = create<ModalCallState>((set) => ({
	modalCall: false,
	loadingCall: false,
	openModal: () => set({modalCall: true}),
	closeModal: () => set({modalCall: false}),
	setLoading: (loadingCall) => set({loadingCall})
}));


export default useModalCall;
