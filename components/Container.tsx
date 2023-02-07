export const Container = ({ ...props }) => {
  return (
    <div className="mx-auto max-w-[2560px] font-space-mono">
      {props.children}
    </div>
  );
};
