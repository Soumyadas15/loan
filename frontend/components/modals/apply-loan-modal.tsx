"use client"

import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "@/components/ui/form"
import { Modal } from "@/components/modals/modal"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { useCallback, useTransition } from "react"
import { useModal } from "@/hooks/use-modal-store"
import { useRouter } from "next/navigation"

export const ApplyLoanModal = () => {

    const router = useRouter();

    const { isOpen, onClose, type, student, studentId } = useModal();
    const isModalOpen = isOpen && type === "applyLoanModal"

    const form = useForm({
        defaultValues: {
          amount: '',
          company: '',
          type: '',
        },
    });

    const [isPending, startTransition] = useTransition();

    const onSubmit = (values: any) => {
        
    }

    const handleClose = useCallback(() => {
        form.reset();
        onClose();
    }, [form, onClose]);

    const bodyContent = (
        <Form {...form}>
            <div className="flex flex-col w-full gap-2">
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input 
                                    className="focus-visible:ring-transparent focus:ring-0" 
                                    placeholder="Amount" 
                                    {...field} 
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input 
                                    className="focus-visible:ring-transparent focus:ring-0" 
                                    placeholder="Company" 
                                    type="text"
                                    {...field} 
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input 
                                    className="focus-visible:ring-transparent focus:ring-0" 
                                    placeholder="Type" 
                                    {...field} 
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </Form>
    );

    return (
        <Modal
            title="Apply for loan"
            description="Add loan details"
            onClose={handleClose}
            onSubmit={form.handleSubmit(onSubmit)}
            actionLabel="Apply"
            secondaryAction={handleClose}
            secondaryActionLabel="Cancel"
            isOpen={isModalOpen}
            body={bodyContent}
            disabled={false}
        />
    );
}