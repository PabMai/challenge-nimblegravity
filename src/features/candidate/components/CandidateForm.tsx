import { useForm, type SubmitHandler } from "react-hook-form";

import { Alert, Button, Input } from "@/shared/ui";
import { useAppStore } from "@/shared/stores/useAppStore";
import { useCandidate, useCandidateStore } from "@features/candidate";

type Inputs = {
  email: string;
  emailRequired: string;
  EmailFormat: string;
};

export function CandidateForm() {
  const isLoading = useAppStore((state) => state.isLoading);
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const candidate = useCandidateStore((state) => state.candidate);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const { searchCandidate } = useCandidate();

  const onSubmit: SubmitHandler<Inputs> = ({email}) => {
    reset();
    setIsLoading(true);
    searchCandidate(email);
    setIsLoading(false);
    setValue("email", email);
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-lg font-semibold mb-4">Candidate information</div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-800"
        >
          Email
        </label>
        <div className="flex gap-2 mt-1 w-full md:w-1/2">
            <Input
              type="text"
              placeholder="Enter candidate email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required"
                },  
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format"
                }
                })}
            />

            <Button text="Search" type="submit" disabled={isLoading} />
        </div>
        {errors.email && (
            <Alert type="error">
                {errors.email.message}
            </Alert>
        )}
        {candidate && Object.keys(errors).length === 0 && (
            <Alert type="success">
                Candidate found successfully!
            </Alert>
        )}
      </div>
    </form>
  );
}
