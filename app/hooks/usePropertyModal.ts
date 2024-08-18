import { create} from "zustand"

interface AddPopertyModalStore{
    isOpen : boolean;
    open:()=>void;
    close:()=>void;

}

const useAddPropertyModal = create<AddPopertyModalStore>((set)=>({
    isOpen:false,
    open:()=>set({isOpen:true}),
    close:()=>set({isOpen:false})


}))

export default useAddPropertyModal;  