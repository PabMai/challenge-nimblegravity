import { useForm, type SubmitHandler } from "react-hook-form";

import { useCandidate } from "@features/candidate";
import { useAppStore } from "@/shared/stores/appStore";
import { Button } from "@/shared/ui";

type Inputs = {
  email: string;
  emailRequired: string;
};

export function CandidateForm() {
  const isLoading = useAppStore((state) => state.isLoading);
  const setIsLoading = useAppStore((state) => state.setIsLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { searchCandidate } = useCandidate();

  const onSubmit: SubmitHandler<Inputs> = ({email}) => {
    setIsLoading(true);
    searchCandidate(email);
    setIsLoading(false);
  }

  return (
    <form className="max-w-md8" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-lg font-semibold mb-4">Candidate information</div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-800"
        >
          Email
        </label>
        <div className="flex gap-2 mt-1">
          <input
            type="email"
            className="flex-1 block border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter candidate email"
            {...register("email", { required: true })}
          />
          <Button text="Search" type="submit" disabled={isLoading} />
        </div>
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">Email is required</span>
        )}
      </div>
    </form>
  );
}
