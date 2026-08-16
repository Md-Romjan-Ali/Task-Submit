"use client"
import { deleteTask } from '@/lib/delete';
import { useRouter } from 'next/navigation';
import { HiTrash } from 'react-icons/hi2';
import { toast } from 'react-toast';
interface Id {
    id: string
}
const DeleteButton = ({ id }: Id) => {
    const router = useRouter()
    const deleteHandle = async () => {
        await deleteTask(id)
        router.refresh()
        toast.error('deleted parmanent')
    }
    return (
        <div>
            <button
                onClick={deleteHandle}
                title="Delete Task"
                className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white transition-all duration-200"
            >
                <HiTrash className="w-5 h-5" />
            </button>
        </div>
    );
};

export default DeleteButton;