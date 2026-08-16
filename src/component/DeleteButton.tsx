"use client"
import { deleteTask } from '@/lib/delete';
import { HiTrash } from 'react-icons/hi2';
interface Id {
    id: string
}
const DeleteButton = ({ id }: Id) => {
    const deleteHandle = async () => {
        const deleteTaskOne = await deleteTask(id)
        console.log(deleteTaskOne, 'from dlete');
    }
    return (
        <div>
            <button
                onClick={deleteHandle}
                type="button"
                title="Delete Task"
                className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-500 hover:text-white transition-all duration-200"
            >
                <HiTrash className="w-5 h-5" />
            </button>
        </div>
    );
};

export default DeleteButton;