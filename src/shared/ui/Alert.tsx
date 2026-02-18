interface AlertProps {
  type?: "error" | "success";
  children: React.ReactNode;
}

const typeStyles = {
  error: "text-red-900",
  success: "text-green-900",
};

export function Alert({ type = "success", children }: AlertProps) {
  return (
    <div
      role="alert"
      className={`relative flex w-full text-sm mt-2 rounded-md ${typeStyles[type]}`}
    >
      <span>{children}</span>
    </div>
  );
}
